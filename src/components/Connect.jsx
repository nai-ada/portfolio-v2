import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Button} from "@nextui-org/react";

import GreenDot from '/src/assets/greendot.svg';
import RedDot from '/src/assets/reddot.svg';
import GitHub from '/src/assets/github.svg';
import LinkedIn from '/src/assets/linkedin.svg';
import Arrow from '/src/assets/arrow.svg';
import ScrollToTop from '../components/ScrollToTop';
import FadeIn from '../components/FadeIn';



function Connect() {
  const [value] = useState('nadiavespalec00@gmail.com');
  const [copy, setCopy] = useState(false);

  return (
    <> 
    <FadeIn>
     <div className="md-x:mx-[4rem] lg-x:mx-[10rem] xl-x:mx-[13rem] mt-48">
      <div className="md:relative">
      
      <h1 className="font-bold uppercase text-[48px] pl-8  pt-[4rem] pb-0 mb-0 text-[#2b2b2b] md:text-[78px] lg-x:text-[98px] md:ml-4"><span className='text-primary'>C</span>onnect.</h1>
      </div>
      <div className="hidden md-x:block absolute right-10 top-[86%] md:top-[116%] transform -translate-y-1/2 h-full flex flex-col items-center">
              <div className="border-l-1 border-[#222222] h-[8%]"></div>
              <div className="w-[5px] h-[5px] bg-purple-400 rounded-full mt-2 absolute md:right-[-2px]"></div>
            </div>
      <div className="contact-section md:mt-10 md:mb-38 md:mt-18">
      <h2 className="font-semibold text-[32px] mt-[1rem] p-8 pt-6 md:pt-[2rem] text-[#2b2b2b] md:text-[36px] md:ml-6 lg-x:text-[45px]">Let's Get In Touch.</h2>
      <p className="font-normal text-[16px] p-8 pr-12 md:mr-2 md:ml-6 mt-4 text-[#2b2b2b] lg-x:text-[20px]">
        Wanting to see your vision come to life? Whether you have a project in
        mind or just want to chat about the latest in tech, I would love to hear
        from you. Feel free to reach out through email, or view my social media
        links below!
      </p>
    </div>

      {/* comment out when unavailable */}
      <div className='text-center mt-10 '>
      <img src={GreenDot} alt="Green Dot" width={10} className="inline-block"/>
      <h2 className="inline-block ml-2 text-[14px] font-bold md:text-[18px]">I'm available for work! 👋</h2>
      </div>

      {/* uncomment when unavailable */}
      {/* <div className='text-center'>
      <img src={RedDot} alt="Red Dot" width={10} className="inline-block"/>
      <h2 className="inline-block ml-2 text-[14px] font-bold">Not available for work right now :&#40;</h2>
      </div> */}

<div className="grid grid-cols-3 border border-black mt-12 md:mt-20 mb-20 md:mb-53 mx-1 xs:mx-4 sm-plus:mx-16 md-x:mx-auto md-x:max-w-[800px] rounded-full overflow-hidden md:ml-32 md:mr-32 md:p-4">
  <a href="https://linkedin.com/in/nadiavespalec" className="flex items-center justify-center p-10 hover:bg-gray-100 border-r border-black -my-4">
    <img src={LinkedIn} alt="LinkedIn Logo" className="w-5 h-5 mr-1" />
    <span className="text-[12px] font-medium md:text-[16px]">LinkedIn</span>
    <img src={Arrow} alt="Arrow" className="w-2 h-2 ml-1" />
  </a>
  <a href="https://github.com/nai-ada" className="flex items-center justify-center p-6 hover:bg-gray-100 border-r border-black -my-4">
    <img src={GitHub} alt="GitHub Logo" className="w-5 h-5 mr-1" />
    <span className="text-[12px] font-medium md:text-[16px]">GitHub</span>
    <img src={Arrow} alt="Arrow" className="w-2 h-2 ml-1" />
  </a>
  <div className="flex items-center justify-center p-2 -my-4">
    <CopyToClipboard text={value} onCopy={() => setCopy(true)}>
      <Button className={`max-w-[210px] h-[38px] md:h-[48px] flex items-center justify-center rounded-[1000px] bg-primary text-white px-4 md:px-6 ${copy ? 'bg-[#757678]' : ''}`}>
        <span className="text-[12px] md:text-[16px] font-medium whitespace-nowrap">{copy ? 'Copied!' : 'Copy Email'}</span>
      </Button>
    </CopyToClipboard>


  </div>

</div>

</div>
</FadeIn>
<div className='pb-20'>
<ScrollToTop />
</div>




    </>
  );
}

export default Connect;
