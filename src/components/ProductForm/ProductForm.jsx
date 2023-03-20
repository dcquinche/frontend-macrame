import './styles.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../features/productSlice';
import { createImage } from '../../features/uploadsSlice';
import useForm from '../../hooks/useForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ProductForm = () => {
  const whiteBoard = 'https://res.cloudinary.com/dirhpjaka/image/upload/v1676774321/macrameFiles/a7d172445cc2d80133f95437de08131f.png';
  const { form, handleChange } = useForm({});
  const { uploads } = useSelector((state) => state.uploads);
  const [file, setFile] = useState([]);
  const [urlImg, setUrlImg] = useState(whiteBoard);
  const dispatch = useDispatch();

  const handleChangeImage = ({target}) => {
    const { files } = target;
    const image = files[0];
    setFile(image);
  }

  const handleClickImage = async (event) => {
    event.preventDefault();
    try {
      dispatch(createImage(file));
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    if(uploads) {
      setUrlImg(uploads);
    }
  }, [uploads])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if(uploads) {
        dispatch(createProduct({ ...form, image: uploads}));
        document.getElementById('formProduct').reset();
        setUrlImg(whiteBoard);
        showToastMessage();
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  const showToastMessage = () => {
    toast.success('¡Producto Registrado!', {
        position: toast.POSITION.BOTTOM_CENTER
    });
  };

  return (
    <form className='productForm' id="formProduct" onSubmit={handleSubmit}>
      <h2 className='productForm__title'>Registro de Productos</h2>
      <p className='productForm__text'>Nombre: </p>
      <input className='productForm__input' name='name' type='text' onChange={handleChange} />
      <p className='productForm__text'>Descripción: </p>
      <textarea className='productForm__input' name='description' type='text' rows='6' onChange={handleChange} />
      <section className='productForm__inputs'>
        <div className='productForm__category'>
          <p className='productForm__text'>Categoría: </p>
          <select className='productForm__input' name='category' onChange={handleChange}>
            <option>Atrapasueños</option>
            <option>Cojines</option>
            <option>Portamacetas</option>
            <option>Tapices</option>
            <option>Otros</option>
          </select>
        </div>
        <div className='productForm__category'>
          <p className='productForm__text'>Precio: </p>
          <input className='productForm__input' name='price' type='number' onChange={handleChange}/>
        </div>
      </section>
      <figure className='productForm__figure'>
      <p className='productForm__text'>Imagen: </p>
        <section className='productForm__buttons'>
          <div className='productForm__input--img'>
            <input name='image' type='file' onChange={handleChangeImage}/>
          </div>
          <button className='productForm__button--upload' onClick={handleClickImage}>Cargar</button>
        </section>
        <img className='productForm__input' alt='productImage' src={urlImg}/>
      </figure>
      <section className='productForm__buttons'>
        <button className='productForm__button'>Guardar</button>
        <ToastContainer />
      </section>
    </form>
  )
}

export default ProductForm;
