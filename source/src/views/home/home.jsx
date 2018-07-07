import React from "react";
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialGithub
} from "react-icons/lib/ti";

import { FaMedium, FaBehance } from "react-icons/lib/fa";
export default () => {
  return (
    <div className="text-container">
      {/* <h1 className="text-center text-xl my-8">HELLO THERE.</h1> */}
      <p className="first-para">
        {" "}
        Hello! I am Nitin. I am a fullstack Javascript developer, specializing
        in <strong>frontend design/development</strong> based out of Pune -
        India.
      </p>
      <br />
      <p>
        I am deeply passionate about user experience. I love designing polished
        UIs for products using cutting-edge tech. My passion? creating
        beautiful, super user-friendly products. Checkout my{" "}
        <a href="https://github.com/nitinja">Github</a> or{" "}
        <a href="https://www.behance.net/nitinjadhav-ux">design portfolio</a>.
      </p>
      <br />Say hi on <a href="https://twitter.com/_nitinj">Twitter</a> -{" "}
      <a href="https://www.linkedin.com/in/nitin-jadhav-23927aa/"> Linkedin </a>
      - <a href="https://medium.com/@nitinj">Blog @ Medium</a>
      <div className="p-4 mt-8 flex items-center justify-center">
        <a
          className="mx-2 text-4xl text-grey hover:text-grey-darkest"
          href="https://github.com/nitinja"
          target="_new"
        >
          <TiSocialGithub />
        </a>
        <a
          className="mx-2 text-4xl text-grey hover:text-grey-darkest"
          href="https://twitter.com/codenitin"
          target="_new"
        >
          <TiSocialTwitter />
        </a>
        <a
          className="mx-2 text-4xl text-grey hover:text-grey-darkest"
          href="https://www.linkedin.com/in/nitin-jadhav-23927aa/"
          target="_new"
        >
          <TiSocialLinkedin />
        </a>
        <a
          className="mx-2 text-2xl mt-2 text-grey hover:text-grey-darkest"
          href="https://medium.com/@nitinj"
          target="_new"
        >
          <FaMedium />
        </a>
        <a
          className="mx-2 text-2xl ml-4 mt-2 text-grey hover:text-grey-darkest"
          href="https://www.behance.net/nitinjadhav-ux"
          target="_new"
        >
          <FaBehance />
        </a>
      </div>
    </div>
  );
};
