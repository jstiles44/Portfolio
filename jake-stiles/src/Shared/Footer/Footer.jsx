import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='jake'>
        Jake Stiles
        <a href='https://www.linkedin.com/in/jacob-stiles/'>
          <img className='linked-in'src='https://i.imgur.com/XU5XCFs.png' alt='linkedin-page' />
        </a>
        <a href='https://github.com/jstiles44'>
          <img className= 'github' src='https://i.imgur.com/3JoFkIB.png' alt='github-page' />
        </a>
      </div>
    </div>
  );
};

export default Footer;