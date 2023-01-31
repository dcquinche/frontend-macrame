import './styles.css';
import instagram from '../../assets/instagram.svg';
import whatsapp from '../../assets/whatsapp.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__logo'>
      <h2>Entre Tejidos</h2>
      <p>Los mejores productos nacionales hechos a mano y a un solo toque</p>
      <div className='footer__icons'>
          <img className='footer__socialmedia' alt='socialmedia' src={whatsapp}/>
          <img className='footer__socialmedia' alt='socialmedia' src={instagram}/>
        </div>
      </section>
    </footer>
  )
}

export default Footer;
