import Image from 'next/image';
import publicspeaking from '../../public/publicspeaking.png';
import teamplayer from '../../public/teamplayer.png';
import problemsolving from '../../public/problemsolving1.png';
import creativethinking from '../../public/creativethinking1a.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';

const OtherSkill = () => {
    return (
        <>
            <h3 className='text-3xl font-bold py-1 dark:text-white'>Other skills</h3>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap dark:text-white'>
                <div className='basis-1/3 flex-1'>
                    <h4 className='text-xl'>Public Speaking</h4>
                    <Image alt='publicspeaking' src={publicspeaking} className='rounded-lg object-cover my-5' width={100} height={100} layout='responsive' />
                    <p className='text-sm'>
                        I was a Guest Speaker for "Bosch University Tour 2022" to support organization branding activities.
                    </p>
                </div>
                <div className='basis-1/3 flex-1'>
                    <h4 className='text-xl'>Team player</h4>
                    <Image alt='teamplayer' src={teamplayer} className='rounded-lg object-cover my-5' width={100} height={100} layout='responsive' />
                    <p className='text-sm'>
                        I really enjoy being a part of a team and I thrive when I'm able to effectively collaborate with others.
                    </p>
                </div>
                <div className='basis-1/3 flex-1'>
                    <h4 className='text-xl'>Problem solving</h4>
                    <Image alt='problemsolving' src={problemsolving} className='rounded-lg object-cover my-5' width={100} height={100} layout='responsive' />
                    <p className='text-sm'>
                        I consider myself a problem solver, I am definitely not afraid to confront problems, and I won’t hide a problem I face at work.
                    </p>
                </div>
                <div className='basis-1/3 flex-1'>
                    <h4 className='text-xl'>Creative thinking</h4>
                    <Image alt='creativethinking' src={creativethinking} className='rounded-lg object-cover my-5' width={100} height={100} layout='responsive' />
                    <p className='text-sm'>
                        I always spend much effort in brainstorming and designing layout for new UIs following customer request.
                    </p>
                </div>
            </div>
        </>
    )
}

export default OtherSkill;