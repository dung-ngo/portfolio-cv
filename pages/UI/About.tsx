
import Image from 'next/image';
import avatar from '../../public/avatar.png';
import { AiFillLinkedin, AiFillSkype, AiFillMail } from 'react-icons/ai';

const About = () => {
  return (
    <div className='pt-5 pb-16'>
      <div className='bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-5 rounded-full w-80 h-80 p-4 md:w-60 md:h-60 md:p-2'>
        <div className='relative mx-auto w-72 h-72 rounded-full overflow-hidden md:w-56 md:h-56'>
          <Image alt='profile-img' src={avatar} layout='fill' objectFit='cover' />
        </div>
      </div>

      <div className='text-center'>
        <h2 className='text-3xl py-1 text-teal-600 font-medium font-lobstertwo dark:text-teal-300'>Ngo Nguyen Thien Dung</h2>
        <h3 className='text-2xl py-2 text-orbitron dark:text-white'>Frontend Developer</h3>
        <div className='text-3xl flex justify-center gap-5 text-gray-600 dark:text-white'>
          <a href="https://linkedin.com/in/dungnnt" target="_blank"><AiFillLinkedin /></a>
          <a href="skype:dungngo.nntd?userinfo" target="_blank"><AiFillSkype /></a>
          <a href="mailto:dungngo.nntd@gmail.com"><AiFillMail /></a>
        </div>
        <div className='m:mx-60'>
          <p className='text-md py-3 text-gray-800 max-w-xl mx-auto dark:text-white'>
            I am a girl who loves code in Saigon, Vietnam, and I am very passionate and dedicated to my work.
          </p>
          <p className='text-md py-2 text-gray-800 max-w-xl mx-auto dark:text-white'>
            With over 1 year experience as a Front end Developer, I eager to face significant challenges to strengthen my competency.
          </p>
        </div>
      </div>


    </div>
  )
}

export default About;