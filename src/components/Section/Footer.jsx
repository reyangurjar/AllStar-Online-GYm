import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full  flex flex-col text-center py-4 max-w-[1440px] items-center justify-center mx-auto mt-12  ">
        <h2 className="text-4xl mb-4">For Support</h2>
        <p className="text-[#F46B45] font-bold text-lg mt-2">
          <a href="tel:+1-800-123-4567"> Call Us: 1-800-123-4567</a>
        </p>
        <p className="text-[#F46B45] font-bold text-lg ">
          <a href="email:demo@gmail.com">Email: support@demogmail.com</a>
        </p>
        <p className="text-[#909090] font-light  text-sm mt-2">
          Temp CorpNo Company Assigned Yet, Test City, Test State, null, US
        </p>
      </div>
      
    </div>
  );
};

export default Footer;
