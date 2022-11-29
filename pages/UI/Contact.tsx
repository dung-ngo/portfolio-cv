import Image from 'next/image';
import { AiTwotoneMail, AiFillPhone, AiFillSkype } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';

const Contact = () => {
    return (
        <div className='my-5'>
            <h3 className='text-3xl font-bold dark:text-white'>Contact Me</h3>
            <div className='shadow-lg rounded-xl py-5 my-10 leading-8 dark:bg-white'>
                <div className='flex justify-center'>
                    <span className='text-xl mr-5 py-1'><GrLocation /></span>
                    <span className='text-gray-800'>Ho Chi Minh city, Vietnam</span>
                </div>
                <div className='flex justify-center'>
                    <span className='text-xl mr-5 py-1'><AiTwotoneMail /></span>
                    <span className='text-gray-800'>dungngo.nntd@gmail.com</span>
                </div>
                <div className='flex justify-center'>
                    <span className='text-xl mr-5 py-2'><AiFillPhone /></span>
                    <span className='text-gray-800 py-1'>(+84) 938 010 694</span>
                </div>
                <div className='flex justify-center'>
                    <span className='text-xl mr-5 py-2'><AiFillSkype /></span>
                    <span className='text-gray-800 py-1'>dungngo.nntd</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;