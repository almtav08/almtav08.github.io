import gitub from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.svg'
import orcid from '../assets/orcid.svg'
import './contact.css'

function Contact() {
    return (
        <div className='contact'>
            <h1>alemarti AT uji DOT com</h1>
            <h1>github / almtav08</h1>
            <h1>linkedin / alex-martinez-martinez</h1>
            <div className='contact-buttons'>
                <a href='mailto:alemarti@uji.es' target='_blank'><button><img src={mail} width={30} height={30}/></button></a>
                <a href='https://github.com/almtav08' target='_blank'><button><img src={gitub} width={30} height={30}/></button></a>
                <a href='https://www.linkedin.com/in/alex-martinez-martinez/' target='_blank'><button><img src={linkedin} width={30} height={30}/></button></a>
                <a href='https://orcid.org/0000-0002-3751-705X' target='_blank'><button><img src={orcid} width={30} height={30}/></button></a>
            </div>
        </div>
    )
}

export default Contact