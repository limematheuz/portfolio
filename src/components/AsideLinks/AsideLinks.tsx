import './AsideLinks.css'
import git from '../../assets/icon/github.svg'
import linkedin from '../../assets/icon/linkedin.svg'
import mail from '../../assets/icon/mail.svg'

export const AsideLinks = () => {
  return (
    <section className='asideLinks-container'>
        <a href="">
            <img src={git} alt="github" />
        </a>
        <a href="">
            <img src={linkedin} alt="linkedin" />
        </a>
        <a href="">
            <img src={mail} alt="mail" />
        </a>
        <p className='asideLinks-p'>M Ribeiro</p>
    </section>
  )
}
