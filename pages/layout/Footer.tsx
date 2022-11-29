import { AiFillLinkedin, AiFillSkype, AiFillMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='bg-white pb-10 dark:bg-gray-900'>
            <div className='text-2xl flex justify-center gap-5 text-gray-600 dark:text-white'>
                <a href="https://linkedin.com/in/dungnnt"><AiFillLinkedin /></a>
                <a href="skype:dungngo.nntd?userinfo"><AiFillSkype /></a>
                <a href="mailto:dungngo.nntd@gmail.com"><AiFillMail /></a>
            </div>
            <div className='text-center text-xs pt-3 leading-6 dark:text-white'>
                <p>Copyright &copy; 2022 - All Right Reserved</p>
                <p>Designed by Dung Ngo</p>
            </div>
        </div>
    )
}

export default Footer;