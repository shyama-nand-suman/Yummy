import React from "react";

const Footer = () => {
  return (
   <>
      <div className=" bg-black text-white w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 py-10 pl-6">

            <div>
          <h1 className="font-bold mb-3 text-[20px] md:text-[25px]">Yummy<span className='text-[#fd79a8]'>Food</span></h1>
          <p className="text-[20px] text-[gray]">
            © 2024 Bundl Technologies Pvt. Ltd
            </p>
        </div>

        <div>
          <h1 className="font-bold mb-3 text-[20px] md:text-[25px]">Company</h1>
          <p className="text-[20px] mb-3 text-[gray]">About</p>
          <p className="text-[20px] mb-3 text-[gray]">Careers</p>
          <p className="text-[20px] mb-3 text-[gray]">Team</p>
          <p className="text-[20px] mb-3 text-[gray]">Swiggy One</p>
          <p className="text-[20px] mb-3 text-[gray]">Swiggy InstaMart</p>
          <p className="text-[20px] mb-3 text-[gray]">Swiggy Genie</p>
        </div>

        <div>
          <h1 className="font-bold mb-3 text-[20px] md:text-[25px]">ContactUs</h1>
          <p className="text-[20px] mb-3 text-[gray]">Help & Support</p>
          <p className="text-[20px] mb-3 text-[gray]">Partner with us</p>
          <p className="text-[20px] mb-3 text-[gray]">Ride with us</p>
        </div>

        <div>
          <h1 className="font-bold mb-3 text-[20px] md:text-[25px]">Legal</h1>

          <p className="text-[20px] mb-3 text-[gray]">Terms & Conditions</p>
          <p className="text-[20px] mb-3 text-[gray]">Cookie Policy</p>
          <p className="text-[20px] mb-3 text-[gray]">Privacy Policy</p>
          <p className="text-[20px] mb-3 text-[gray]">Investor Relations</p>
        </div>
      </div>
      </div>
      </>
  );
};

export default Footer;
