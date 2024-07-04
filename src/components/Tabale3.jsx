import React from "react";

function Tabale3() {
  return (
    <div className="mt-20">
      <h2 className="text-center text-sm">خلاصه وضعیت دانشجو</h2>
      <table className="border-[1px] border-gray-600 text-xs font-thin ">
        <thead>
          <tr className="border-b-[1px] border-gray-600 bg-[#ECE9D8]">
            <td className="text-center border-l-[1px] bg-[#ECE9D8] border-gray-600  pt-2"></td>
            <td className="text-center border-l-[1px] bg-[#ECE9D8] border-gray-600 pt-2">
              معدل
            </td>
            <td
              className="bg-[#ECE9D8] pt-2  border-l-[1px] border-b-[1px] border-gray-600 text-center"
              colSpan="8"
            >
              واحد
              <div className="border-b-[1px] border-gray-600 "></div>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 ">
                {" "}
                گذرانده
              </td>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 ">
                {" "}
                اخذ شده
              </td>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 ">
                {" "}
                رد شده
              </td>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 ">
                {" "}
                حذف شده
              </td>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 ">
                {" "}
                نا تمام
              </td>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 ">
                {" "}
                اعلام نشده
              </td>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 ">
                {" "}
                پذیرفته شده
              </td>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2 ">
                {" "}
                خیرایی گذرانده
              </td>
            </td>
            <td
              className="text-center border-l-[1px] border-gray-600  bg-[#ECE9D8] "
              colSpan="2"
            >
              تعداد مشروطی
              <div className="border-b-[1px] border-gray-600 "></div>

              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-4  ">
                {" "}
                کل
              </td>
              <td className="border-l-[1px] border-gray-600 bg-[#ECE9D8] px-2  ">
                {" "}
                قبولی
              </td>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-[1px] border-l-[1px] border-gray-600">
            <td className=" border-l-[1px] border-gray-600 px-5">
              ترم
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-7">
              16
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
            16
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
            16
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600 text-center px-1">
            16
            </td>
            <td className="  border-l-[1px] border-gray-600 text-center px-1">
            16
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
            16
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
            16
            </td>
            <td className=" font-mono border-l-[1px] border-gray-600  px-1">
            16
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
            16
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
           .........
            </td>
            <td className=" border-l-[1px] border-gray-600  px-1">
           ..........
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default Tabale3;
