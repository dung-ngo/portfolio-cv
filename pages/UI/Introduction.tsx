import classes from './Introduction.module.css';

const LandingPage = () => {
    return (
        <div className='text-left my-64 md:my-48 dark:text-white'>
            <div>
                <h1 className='text-lg font-syncopate'>WELCOME TO MY WEBSITE</h1>
                <div className=''>
                    <div className={classes.caption}>
                        <div className='mt-6 text-xl font-saira md:text-3xl'>I am</div>
                        <div className={classes['text-box']}>
                            <div className='text-xl font-saira md:text-3xl'>Ngo Nguyen Thien Dung</div>
                            <div className='text-xl font-saira md:text-3xl'>A Front end Developer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mt-10'>
                <div className='mr-5'>
                    <a href='#about' className='buttons about-btn'>About me</a>
                </div>
                <div>
                    <a href='#contact' className='buttons contact-btn'>Contact me</a>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;