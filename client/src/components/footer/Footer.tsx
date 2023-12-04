import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import './Footer.css'


const Footer = ()=>{
    return(<>
    <div className='footer'>
        <div className='link-wrapper'>
        <a ><FontAwesomeIcon icon ={faFacebook}/></a>
        <a><FontAwesomeIcon icon ={faInstagram}/></a>
        <a><FontAwesomeIcon icon ={faTwitter}/></a>
         <a><FontAwesomeIcon icon ={faLinkedin}/></a>
         <a><FontAwesomeIcon icon ={faGithub}/></a>
         </div>
    </div>
        </>

    )
}
export default Footer;