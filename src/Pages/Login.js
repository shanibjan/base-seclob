import React from "react";
import "../output.css";
import Logo from "../images/Ellipse 111.png";
import Vector from "../images/Vector 7.png";
import gitHub from "../images/Vector.png";
import twitter from "../images/Vector (1).png";
import discord from "../images/carbon_logo-discord.png";
import linkedIn from "../images/carbon_logo-linkedin.png";

function Login() {
  return (
    <div className="login-page-base">
      {/* <div class="flex overflow-hidden relative flex-col grow items-start px-14 py-16 fill-indigo-500 min-h-[1024px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d8d69e00310c0a865344e2c8facbc6dd1e1a615d0f101277623a2073c42404e?"
          class="object-cover absolute inset-0 size-full"
        />
        <div class="relative self-center mt-80 text-7xl font-bold text-white max-md:mt-10 max-md:text-4xl">
          BASE
        </div>
        <div class="flex relative gap-5 justify-between mt-96 ml-20 max-md:mt-10 max-md:ml-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/483a474977a52d91b3b7234c05ec51ebb7a6b5129b7cde1d5193c001879ba7cd?"
            class="shrink-0 my-auto w-11 aspect-square fill-white"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/625006c878b4fa4f50f4929c7bc195b50d342207164b11e1ed88a5611456adbf?"
            class="shrink-0 my-auto aspect-[1.02] fill-white w-[42px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b146c4cb46549ff66c0e714fa20f85d734e9236c342906512c5b14c4fc288146?"
            class="shrink-0 w-12 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e572a9d56606bef8316fad0eb264b20422e37f60cbded5abe253758e85e2683?"
            class="shrink-0 aspect-[1.04] w-[50px]"
          />
        </div>
      </div> */}

      <div class="w-full bg-slate-50 max-md:max-w-full">
        <div class="flex max-md:flex-col max-md:gap-0">
          <div>
            <div class=" px-[25px]  h-[100px] bg-indigo-500 hidden max-md:flex items-center max-[320px]:h-[65px]">
              <img
                loading="lazy"
                src={Logo}
                class="bg-white rounded-full aspect-[1.06] w-[60px] h-[60] z-10 max-[320px]:w-[40px]"
              />
              <img
                loading="lazy"
                src={Vector}
                class=" top-[34px] bg-white rounded-full aspect-[1.06]  w-[60px] z-10 absolute h-8  max-[320px]:w-[40px] max-[320px]:h-[22px] max-[320px]:top-[22px]"
              />
              <h1 class='text-white font-gbold text-3xl font-medium ml-5 max-[320px]:text-[23px] max-[320px]:ml-3' >Base</h1>
            </div>
          </div>
          <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full max-sm:h-16 max-md:hidden max-[1388px]:bg-indigo-500">
            <div class="flex overflow-hidden relative flex-col grow items-start px-14 py-16 fill-indigo-500 min-h-[1024px] max-md:px-5  max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d8d69e00310c0a865344e2c8facbc6dd1e1a615d0f101277623a2073c42404e?"
                class="object-cover absolute inset-0 size-full max-sm:h-16"
              />
              <img
                loading="lazy"
                src={Logo}
                class="bg-white rounded-full aspect-[1.06] w-[85px] z-10 max-md:absolute max-md:top-[24px] max-md:left-[26px] max-md:w-[71px]"
              />
              <img
                loading="lazy"
                src={Vector}
                class=" top-[90px] bg-white rounded-full aspect-[1.06] w-[85px] z-10 absolute h-8 max-md:top-[44px] max-md:left-[26px] max-md:w-[70px]"
              />
              <div class="relative font-gbold self-center mt-80 text-7xl font-bold text-white max-md:mt-10 max-md:text-4xl">
                BASE
              </div>
              <div class="flex relative gap-5 justify-between m-auto my-0 mt-[300px] max-md:mt-10 max-md:ml-2.5 max-sm:hidden ">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/483a474977a52d91b3b7234c05ec51ebb7a6b5129b7cde1d5193c001879ba7cd?"
                  class="shrink-0 my-auto w-11 aspect-square fill-white"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/625006c878b4fa4f50f4929c7bc195b50d342207164b11e1ed88a5611456adbf?"
                  class="shrink-0 my-auto aspect-[1.02] fill-white w-[42px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b146c4cb46549ff66c0e714fa20f85d734e9236c342906512c5b14c4fc288146?"
                  class="shrink-0 w-12 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e572a9d56606bef8316fad0eb264b20422e37f60cbded5abe253758e85e2683?"
                  class="shrink-0 aspect-[1.04] w-[50px]"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col self-stretch px-5 my-auto text-base text-black max-md:mt-10 max-md:max-w-full">
              <div class="text-4xl font-gmedium font-bold max-md:max-w-full max-[375px]:text-[30px] ">Sign In</div>
              <div class="mt-4 font-gregular max-md:max-w-full">Sign in to your account</div>
              <div class="flex gap-5 mt-8 text-xs text-center text-zinc-500 max-md:flex-wrap">
                <div class="flex flex-1 flex-auto gap-5 px-8 py-2 bg-white rounded-xl max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/02269d6ac98ddd12190f7d9307ad8dcca8702f2e2e33d850df7fc6b9fb255551?"
                    class="shrink-0 aspect-[0.93] w-[15px]"
                  />
                  <div class="flex-auto">Sign in with Google</div>
                </div>
                <div class="flex flex-1 flex-auto gap-5 px-10 py-2 bg-white rounded-xl max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9917f5f5470a787282e1f14f4e5650e8f19fb59c4bbf2a755a836b04ce752d17?"
                    class="shrink-0 self-start w-3 aspect-[0.75]"
                  />
                  <div class="flex-auto">Sign in with Apple</div>
                </div>
              </div>
              <div class="flex flex-col px-12 py-9 mt-7 bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
                <div class="max-md:max-w-full">Email address</div>
                <input type="email" class=" w-full flex gap-3 px-6 py-3 mt-4 whitespace-nowrap bg-gray-200 rounded-xl max-md:flex-wrap max-md:px-5 mt-7 max-md:max-w-full" placeholder="email" />
                <div class="mt-7 max-md:max-w-full">Password </div>
                <div class="">

                <input type="text" class=" w-full flex gap-3 px-6 py-3 mt-4 whitespace-nowrap bg-gray-200 rounded-xl max-md:flex-wrap max-md:px-5 mt-7 max-md:max-w-full" placeholder="Password" />
                  
                </div>
                <div class="mt-7 text-blue-600 max-md:max-w-full">
                  Forgot password?
                </div>
                <div class="justify-center items-center px-16 py-3.5 mt-6 font-bold text-center text-white bg-indigo-500 rounded-xl max-md:px-5 max-md:max-w-full">
                  Sign In
                </div>
              </div>
              <div class="self-center mt-7 text-center text-blue-600 max-md:max-w-full">
                Don’t have an account?
                <span class="text-blue-600">Register here</span>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden max-md:flex justify-center my-10 gap-5">
          <img
            loading="lazy"
            src={gitHub}
            class="shrink-0 my-auto w-11 aspect-square fill-white"
          />
          <img
            loading="lazy"
            src={twitter}
            class="shrink-0 my-auto aspect-[1.02] fill-white w-[42px]"
          />
          <img
            loading="lazy"
            src={linkedIn}
            class="shrink-0 w-12 aspect-square"
          />
          <img
            loading="lazy"
            src={discord}
            class="shrink-0 aspect-[1.04] w-[50px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
