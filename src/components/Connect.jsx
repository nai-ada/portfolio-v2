import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Button} from "@nextui-org/react";

import GreenDot from '/src/assets/greendot.svg';
import RedDot from '/src/assets/reddot.svg';
import GitHub from '/src/assets/github.svg';
import LinkedIn from '/src/assets/linkedin.svg';
import Email from '/src/assets/email.svg';
import Arrow from '/src/assets/arrow.svg';
import ScrollToTop from '../components/ScrollToTop';


function Connect() {
  const [value] = useState('nadiavespalec00@gmail.com');
  const [copy, setCopy] = useState(false);

  return (
    <>
      <h1 className='font-bold uppercase text-[45px] p-8 pt-0 mt-2 pb-0 mb-0 text-[#2b2b2b]'><span className='text-primary'>C</span>onnect.</h1>
      <h2 className="font-semibold text-[23px] p-8 pt-6 mt-4 pb-4 text-[#2b2b2b]">Let's Get In Touch.</h2>
      <p className="font-normal text-[14px] p-8 pr-12 pt-0 mt-4 text-[#2b2b2b]">
        Wanting to see your vision come to life? Whether you have a project in
        mind or just want to chat about the latest in tech, I would love to hear
        from you. Feel free to reach out through email, or view my social media
        links below!
      </p>

      {/* comment out when unavailable */}
      <div className='text-center mt-6'>
      <img src={GreenDot} alt="Green Dot" width={10} className="inline-block"/>
      <h2 className="inline-block ml-2 text-[14px] font-bold">I'm available for work! 👋</h2>
      </div>

      {/* uncomment when unavailable */}
      {/* <div className='text-center'>
      <img src={RedDot} alt="Red Dot" width={10} className="inline-block"/>
      <h2 className="inline-block ml-2 text-[14px] font-bold">Not available for work right now :&#40;</h2>
      </div> */}

<div className="grid grid-cols-3 border border-black mt-12 mb-20 mx-1 rounded-full overflow-hidden">
  <a href="https://www.linkedin.com/in/nadia-vespalec/" className="flex items-center justify-center p-6 hover:bg-gray-100 border-r border-black">
    <img src={LinkedIn} alt="LinkedIn Logo" className="w-5 h-5 mr-1" />
    <span className="text-[12px] font-medium">LinkedIn</span>
    <img src={Arrow} alt="Arrow" className="w-2 h-2 ml-1" />
  </a>
  <a href="https://github.com/nai-ada" className="flex items-center justify-center p-6 hover:bg-gray-100 border-r border-black">
    <img src={GitHub} alt="GitHub Logo" className="w-5 h-5 mr-1" />
    <span className="text-[12px] font-medium">GitHub</span>
    <img src={Arrow} alt="Arrow" className="w-2 h-2 ml-1" />
  </a>
  <div className="flex items-center justify-center p-2">
    <CopyToClipboard text={value} onCopy={() => setCopy(true)}>
      <Button className={`w-[90px] h-[38px] flex items-center justify-center rounded-[1000px] bg-primary text-white px-4 ${copy ? 'bg-secondary' : ''}`}>
        <span className="text-[12px] font-medium whitespace-nowrap">{copy ? 'Copied!' : 'Copy Email'}</span>
      </Button>
    </CopyToClipboard>
  </div>
        <div className="absolute right-5 top-[134%] transform -translate-y-1/2 h-full flex flex-col items-center ">
          <div className="border-l-1 border-[#222222] h-[3%]"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
        </div>
</div>
<ScrollToTop />

    </>
  );
}

export default Connect;
