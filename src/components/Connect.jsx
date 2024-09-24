import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import GreenDot from '/src/assets/greendot.svg';
import RedDot from '/src/assets/reddot.svg';
import GitHub from '/src/assets/github.svg';
import LinkedIn from '/src/assets/linkedin.svg';
import Email from '/src/assets/email.svg';
import Arrow from '/src/assets/arrow.svg';

function Connect() {
  const [value] = useState('nadiavespalec00@gmail.com');
  const [copy, setCopy] = useState(false);

  return (
    <>
      <h1>Connect.</h1>
      <h2>Let's Get In Touch.</h2>
      <p>
        Wanting to see your vision come to life? Whether you have a project in
        mind or just want to chat about the latest in tech, I would love to hear
        from you. Feel free to reach out through email, or view my social media
        links below!
      </p>

      {/* comment out when unavailable */}
      <img src={GreenDot} alt="Green Dot" width={10} />
      <h2>I'm available for work! 👋</h2>

      {/* uncomment when unavailable */}
      {/* <img src={RedDot} alt="Red Dot" width={10} />
      <h2>Not available for work right now :&#40;</h2> */}

      <div>
        <a href="https://www.linkedin.com/in/nadia-vespalec/">
          <img src={LinkedIn} alt="LinkedIn Logo" width={22} />
          LinkedIn
          <img src={Arrow} alt="Arrow" width={10} />
        </a>
        <a href="https://github.com/nai-ada">
          <img src={GitHub} alt="GitHub Logo" width={22} />
          GitHub
          <img src={Arrow} alt="Arrow" width={10} />
        </a>
        <CopyToClipboard text={value} onCopy={() => setCopy(true)}>
          <button className={`${copy ? 'copied' : 'copy'}`}>
            {/* <img src={Email} alt="Email Logo" width={22} /> */}
            {copy ? 'Email Copied!' : 'Copy Email'}
          </button>
        </CopyToClipboard>
      </div>
    </>
  );
}

export default Connect;
