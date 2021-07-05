import "./Footer.css"
import img10 from "../../Images/GitHub-Mark-64px.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='jake'>
        <a href='https://www.linkedin.com/in/jacob-stiles/'>
          <img className='linked-in'src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.TYrrBqMWU-BxDbQ9rluOTAHaHa%26pid%3DApi&f=1' alt='linkedin-page' />
        </a>
        <a href='https://github.com/jstiles44'>
          <img className='github' src={img10} alt='github-page' />
        </a>
      </div>
    </div>
  );
};

export default Footer;