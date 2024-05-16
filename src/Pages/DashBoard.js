import React, { useEffect, useState } from "react";
import "../output.css";
import mask from "../images/Mask Group.png";
import chart from "../images/Chart.png";
import menu from "../images/burger-regular.png";
import cancel from "../images/frame.png";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const [state,setState]=useState()
  const nav=useNavigate()
  useEffect(() => {
    let menuButton = document.querySelector(".menu");
    let cancelButton = document.querySelector(".cancel");
    console.log(cancelButton);
    let menuBar = document.querySelector(".menu-bar");
    menuButton.addEventListener("click", () => {
      menuBar.style.transform = "translateX(0)";
      menuBar.style.transition = "1s cubic-bezier(0.075, 0.82, 0.165, 1)";
    });
    cancelButton.addEventListener("click", () => {
      menuBar.style.transform = "translateX(-100%)";
      menuBar.style.transition = "1s cubic-bezier(0.075, 0.82, 0.165, 1)";
    });
  });

  const store=(e)=>{
    let val=e.target.files[0].name
    setState(val)
  }
  console.log(state);
  return (
    <div>
      <div class="pr-8 bg-gray-50 max-md:pr-0">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:relative">
          <div class="flex flex-col w-[16%] max-md:ml-0 max-md:-translate-x-full  max-[1200px]:w-[24%] max-[920px]:w-[37%] menu-bar max-md:absolute z-10 max-md:w-full max-md:top-[-45px]">
            <div class="flex flex-col grow pt-12 pb-20 mx-auto w-full bg-white max-md:mt-8">
              <div class="flex flex-col max-md:pl-0">
                <div class="flex gap-4 self-center w-full justify-between px-14 items-center max-[425px]:px-6">
                  <div class="flex gap-3">
                    <div class="flex overflow-hidden relative flex-col justify-center items-center aspect-square fill-indigo-500 w-[42px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2158e5f110b99ca54e8f044746a79811c92934560ba37777d1e109911279a021?"
                        class="object-cover absolute inset-0 size-full"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2158e5f110b99ca54e8f044746a79811c92934560ba37777d1e109911279a021?"
                        class="w-full aspect-square fill-indigo-500"
                      />
                    </div>
                    <div class="my-auto text-2xl font-semibold text-slate-950 font-gregular max-[425px]:text-xl">
                      Base
                    </div>
                  </div>
                  <div class="hidden max-md:block w-10 cancel max-[425px]:w-6">
                    <img src={cancel} alt="" />
                  </div>
                </div>
              </div>

              <div class=" font-gregular flex flex-col items-start pr-4 pl-10 mt-10 text-base font-semibold whitespace-nowrap text-slate-950 max-md:pl-5 max-md:mt-10">
                <div class="flex gap-3.5 self-start mt-12 text-base font-semibold whitespace-nowrap text-zinc-400 max-md:mt-10 ">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b156694b19d339450f615ccb83841d6db35cf5efc9353599743b14698c50813?"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="flex-auto my-auto">Dashboard</div>
                </div>
                <div class="flex gap-4 mt-10 text-base font-semibold text-indigo-500 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src={chart}
                    class="shrink-0 rounded-none aspect-[1.1] w-6"
                  />
                  <div class="flex-auto my-auto">Upload</div>
                </div>
                <div class="flex gap-3.5 mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9873ef7e8057f97adae7618bec5a6b0610eff5fe7e3e840313f0daf489dbc0e?"
                    class="shrink-0 w-6 aspect-[1.09]"
                  />
                  <div class="flex-auto">Invoice</div>
                </div>
                <div class="flex gap-3.5 mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6f48ab8a0bd77484d20b87f5a4bd15a1de4f05bc8367fcf12be2dbcca00edc?"
                    class="shrink-0 w-6 aspect-[0.88]"
                  />
                  <div class="flex-auto my-auto">Schedule</div>
                </div>
                <div class="flex gap-3.5 mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/daaa1935d4dca0483a3ec6bc50e67527bb002e4932ed95838fc7ded81eef1e79?"
                    class="shrink-0 w-6 aspect-[0.93]"
                  />
                  <div class="justify-center px-px py-1.5 my-auto">
                    Calendar
                  </div>
                </div>
                <div class="flex gap-3.5 mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/178f3997eb73cddbd19883660f5efa8c69b050ee5d8e40089c89255979c448f1?"
                    class="shrink-0 w-6 aspect-[0.88]"
                  />
                  <div class="flex-auto my-auto">Notification</div>
                </div>
                <div class="flex gap-3.5 mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f590e2a6882300660e576462fa62d567825fb9e025d168a993830dd000a79dc?"
                    class="shrink-0 w-6 aspect-[0.93]"
                  />
                  <div class="flex-auto my-auto">Settings</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full max-[840px]:w-[60%] ">
            <div class="flex flex-col mt-12 max-md:mt-10 max-md:max-w-full">
              <div class="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full max-md:hidden">
                <div class=" font-gmedium text-2xl font-semibold leading-8 text-black">
                  Upload CSV
                </div>
                <div class="flex gap-5 justify-between self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c6d4a711af25c600d91d1f7162b063fdd4c9bfb25df4c02722eaf77ace11e3e?"
                    class="shrink-0 my-auto aspect-[0.78] fill-black w-[18px]"
                  />
                  <img
                    loading="lazy"
                    src={mask}
                    class="shrink-0 aspect-square w-[30px]"
                  />
                </div>
              </div>

              <div class=" hidden gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full max-md:flex items-end px-[35px] max-[425px]:h-[30px] max-[370px]:px-[24px] ">
                <div class="flex gap-[34px] items-center max-[425px]:h-[30px] max-[425px]:gap-[10px]">
                  <div class="w-[32px] h-[32px] items-center flex max-[425px]:w-[20px] menu ">
                    <img src={menu} alt=" " class="w-full" />
                  </div>
                  <div class="flex overflow-hidden relative flex-col justify-center items-center aspect-square fill-indigo-500 w-[42px] max-[425px]:w-[25px] ">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2158e5f110b99ca54e8f044746a79811c92934560ba37777d1e109911279a021?"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2158e5f110b99ca54e8f044746a79811c92934560ba37777d1e109911279a021?"
                      class="w-full aspect-square fill-indigo-500"
                    />
                  </div>
                  <div class=" font-gregular text-2xl font-semibold leading-8 text-black max-[425px]:text-[20px] ">
                    Base
                  </div>
                </div>
                <div class="flex gap-5 justify-between self-start h-[42px] max-[425px]:h-[30px] ">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c6d4a711af25c600d91d1f7162b063fdd4c9bfb25df4c02722eaf77ace11e3e?"
                    class="shrink-0 my-auto aspect-[0.78] fill-black w-[27px] max-[425px]:w-[20px]"
                  />
                  <img
                    loading="lazy"
                    src={mask}
                    class="shrink-0 aspect-square w-[42px] max-[425px]:w-[30px] max-[425px]:h-[30px] "
                  />
                </div>
              </div>

              <div class="hidden max-md:block ml-[50px] mt-[50px]">
                <h1 class="font-gmedium text-2xl font-semibold leading-8 text-black">
                  Upload CSV
                </h1>
              </div>
              <div class="flex flex-col self-center p-4 mt-36 max-w-full leading-6 bg-white rounded-lg w-[596px] max-md:mt-10">
                <div class="flex flex-col items-center p-20 text-base text-center text-indigo-500 rounded-lg border border-gray-200 border-dashed max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/600015f9d914aa7a7c77d9c1efdc1dd5550a81118493ded2e8e30daa3d56e21a?"
                    class="mt-5 w-9 aspect-square"
                  />
                  <div class="mt-4 mb-1 font-gregular ">
                    <input
                      class="hidden "
                      type="file"
                      name="files[]"
                      id="file"
                      data-multiple-caption="{count} files selected"
                      multiple
                      onChange={store}
                    />
                    <label for="file">
                      {state ? <span>{state}</span> :<strong class='cursor-pointer' >Choose a file</strong>}
                      
                      {/* <span class=""> or drag it here</span>. */}
                    </label>
                    {/* <label htmlFor="file">Drop your excel sheet here or</label> */}
                    {/* <span class="text-indigo-500 font-gregular">browse</span> */}
                  </div>
                </div>
                <div onClick={()=>{
                      nav('/upload')
                    }}  class=" cursor-pointer flex justify-center items-center py-2 pr-4 pl-2 mt-5 text-sm font-semibold text-white whitespace-nowrap bg-indigo-500 rounded-lg max-md:px-5 max-md:max-w-full">
                  <div class="flex gap-2 items-end ">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4072a967b2119188244462bc914318b152a17dcf455d129fb82ed972ef1861d0?"
                      class="shrink-0 w-6 aspect-square"
                    />
                    <div class="font-gregular ">Upload</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
