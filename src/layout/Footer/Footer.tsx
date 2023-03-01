import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <h1>EC</h1>
      <div className='footer-row'>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
        <div className='footer-row__subscribe'>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque,
            sed harum fuga ipsum.
          </h3>
          <input type='text' placeholder='Your E-mail' />
          <button type='button'>Subscribe</button>
        </div>
        <div className='footer-row__follow'>
          <h3>Follow Us</h3>
        </div>
        <div className='footer-row__call'>
          <h3>Call Us</h3>
          <h3>(555)-212-3893</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
