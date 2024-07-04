import React from "react";

import menu1 from "../assets/images/menu1.png";
import menu2 from "../assets/images/menu2.png";
import menu3 from "../assets/images/menu3.png";
import menu4 from "../assets/images/menu4.png";
import menu5 from "../assets/images/menu5.png";
import menu6 from "../assets/images/menu6.png";
import menu7 from "../assets/images/menu7.png";
import menu8 from "../assets/images/menu8.png";

function HeaderSaidbar() {
  return (
    <div className="bg-[#ECE9D8] relative">
      <div className="absolute text-[11px] top-[-1.3rem] right-2 flex items-center gap-2">
        <p>کاربر : سينا جباري </p>
        <a className="text-[#50A1F9]" href="#">
          خروج
        </a>
      </div>
      <div className="text-[10px] flex items-center gap-1 p-4 bg-[#ECE9D8]">
        <div className="absolute bottom-0 right-0">
          <img src={menu1} alt="/" className="w-[40px]" />
        </div>
        <img
          src={menu2}
          alt="/"
          className="w-[43px] h-[19px] absolute right-[2.7rem] bottom-0"
        />
        <img
          src={menu3}
          alt="/"
          className="w-[56px] h-[19px] absolute right-[5.4rem] bottom-0"
        />

        <img
          src={menu4}
          alt="/"
          className="w-[58px] h-[19px] absolute right-[8.9rem] bottom-[1px]"
        />
        <img
          src={menu5}
          alt="/"
          className="w-[58px] h-[19px] absolute right-[12.6rem] bottom-[1px]"
        />

        <img
          src={menu6}
          alt="/"
          className="w-[45px] h-[19px] absolute right-[16.3rem] bottom-[1px]"
        />

        <img
          src={menu7}
          alt="/"
          className="w-[45px] h-[19px] absolute right-[19.2rem] bottom-[1px]"
        />
        <img
          src={menu8}
          alt="/"
          className="w-[45px] h-[19px] absolute right-[22.2rem] bottom-[1px]"
        />

        {/* <button className="bg-[#F9F8F4] p-1 rounded-md">دانشجویی</button>
        <button className="bg-[#F9F8F4] p-1 rounded-md">مالی و اداری</button>
        <button className="bg-[#F9F8F4] p-1 rounded-md">پیشخوان خدمات</button>
        <button className="bg-[#F9F8F4] p-1 rounded-md">ثبت نام</button>
        <button className="bg-[#F9F8F4] p-1 rounded-md">ارزشیابی</button>
        <button className="bg-[#F9F8F4] p-1 rounded-md">سیستم</button> */}
      </div>
    </div>
  );
}

export default HeaderSaidbar;
