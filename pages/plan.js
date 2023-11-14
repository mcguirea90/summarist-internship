import { IoDocumentTextSharp } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";

import Footer from "../components/Footer";

export default function ChoosePlan() {
  const [accordionOneClicked, setAccordionOneClicked] = useState(false);
  const [accordionTwoClicked, setAccordionTwoClicked] = useState(false);
  const [accordionThreeClicked, setAccordionThreeClicked] = useState(false);
  const [accordionFourClicked, setAccordionFourClicked] = useState(false);
  const [planSelected, setPlanSelected] = useState("yearly");



  function handleAccordionOne() {
    setAccordionOneClicked(!accordionOneClicked);
  }
  function handleAccordionTwo() {
    setAccordionTwoClicked(!accordionTwoClicked);
  }
  function handleAccordionThree() {
    setAccordionThreeClicked(!accordionThreeClicked);
  }
  function handleAccordionFour() {
    setAccordionFourClicked(!accordionFourClicked);
  }

 

  return (
    <>
      <div className="ml-0 w-full">
        <div className="w-full">
          <div className="text-center w-full pt-[48px] mb-[24px]top-0 left-0 z-[-1] h-full bg-[#032b41] md:rounded-b-[256px]">
            <div className="before:absolute before:top-0 before:left-0 before:z-[-1] before:w-full before:h-full "></div>
            <div className="max-w-[1000px] mx-auto px-[24px] text-white">
              <div className="text-[26px] md:text-[48px] font-bold md:mb-[40px] mb-[32px]">
                Get unlimited access to many amazing books to read
              </div>
              <div className="text-[16px] md:text-[20px] mb-[32px]">
                Turn ordinary moments into amazing learning opportunities
              </div>
              <figure className="flex justify-center max-w-[340px] mx-auto rounded-t-[180px] overflow-hidden">
                <img src={"/assets/pricing-top.png"} alt="" />
              </figure>
            </div>
          </div>
          <div className="max-w-[1070px] mx-auto w-full px-[24px]">
            <div className="py-[40px] w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center text-center gap-[24px] max-w-[800px] mx-auto mb-[56px] mt-0 ">
                <div>
                  <figure className="flex justify-center">
                    <IoDocumentTextSharp className="fill-[#032b41] w-[60px] h-[60px] mb-[12px]" />
                  </figure>
                  <div className="">
                    <b>Key ideas in few min</b> with many books to read
                  </div>
                </div>
                <div>
                  <figure className="flex justify-center">
                    <RiPlantFill className="fill-[#032b41] w-[60px] h-[60px] mb-[12px]" />
                  </figure>
                  <div className="">
                    <b>3 million people </b>
                    growing with Summarist everyday
                  </div>
                </div>
                <div>
                  <figure className="flex justify-center">
                    <FaHandshake className="fill-[#032b41] w-[60px] h-[60px] mb-[12px]" />
                  </figure>
                  <div className="">
                    <b>Precise recommendations </b>
                    collections curated by experts
                  </div>
                </div>
              </div>
              <div className="text-center text-[32px] text-[#032b41] font-bold mb-[32px]">
                Choose the plan that fits you
              </div>
              <div
                className={`flex gap-[24px] p-[24px] bg-[#f1f6f4] rounded-[4px] cursor-pointer max-w-[680px] mx-auto ${
                  planSelected == "yearly"
                    ? "border-[4px] border-solid border-[#2be080]"
                    : ""
                } `}
                onClick={() => {
                  setPlanSelected("yearly");
                }}>
                <div className="relative w-[24px] h-[24px] rounded-full border-2 border-solid border-black flex items-center justify-center">
                  <div
                    className={`${
                      planSelected == "yearly" ? "inline" : "hidden"
                    } absolute w-[6px] h-[6px] bg-black rounded-full`}
                  ></div>
                </div>
                <div>
                  <div className="text-[16px] md:text-[18px] font-semibold text-[#032b41] mb-[8px]">
                    Premium Plus Yearly
                  </div>
                  <div className="text-[24px] font-bold text-[#032b41] mb-[8px]">
                    $99.99/year
                  </div>
                  <div className="text-[#6b757b] text-[14px]">
                    7-day free trial included
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[8px] max-w-[240px] mx-auto my-[24px]">
                <hr className="w-[40%] h-[8px] text-[#bac8ce]" />
                or
                <hr className="w-[40%] h-[8px] text-[#bac8ce]" />
              </div>
              <div
                className={`flex gap-[24px] p-[24px] bg-[#f1f6f4] rounded-[4px] cursor-pointer max-w-[680px] mx-auto ${
                  planSelected == "monthly"
                    ? "border-[4px] border-solid border-[#2be080]"
                    : ""
                } `}
                onClick={() => {
                  setPlanSelected("monthly");
                }}>
                <div className="relative w-[24px] h-[24px] rounded-full border-2 border-solid border-black flex items-center justify-center">
                  <div
                    className={`${
                      planSelected == "monthly" ? "inline" : "hidden"
                    } absolute w-[6px] h-[6px] bg-black rounded-full`}
                  ></div>
                </div>
                <div>
                  <div className="text-[16px] md:text-[18px] font-semibold text-[#032b41] mb-[8px]">
                    Premium Monthly
                  </div>
                  <div className="text-[24px] font-bold text-[#032b41] mb-[8px]">
                    $9.99/month
                  </div>
                  <div className="text-[#6b757b] text-[14px]">
                    No trial included
                  </div>
                </div>
              </div>
              <div className="bg-white sticky bottom-0 z-[1] py-[32px] flex flex-col items-center gap-[16px]">
                <button
                  className="w-[300px] text-[#032b41] bg-[#2bd97c] h-[40px] rounded-[4px] text-[16px] flex items-center justify-center min-w-[180px] cursor-not-allowed" >
                  {planSelected == "yearly" ? (
                    <>Start your free 7-day trial</>
                  ) : (
                    <>Start your first month</>
                  )}
                </button>
                <div className="text-[12px] text-[#6b757b] text-center">
                  {planSelected == "yearly" ? (
                    <>
                      Cancel your trial at any time before it ends, and you
                      won’t be charged.
                    </>
                  ) : (
                    <>30-day money back guarantee, no questions asked.</>
                  )}
                </div>
              </div>
              <div className="">
                <div className="border-b-[1px] border-solid overflow-hidden border-[#ddd]">
                  <div
                    className="flex flex-col  cursor-pointer py-[24px] gap-[8px]"
                    onClick={handleAccordionOne}
                  >
                    <div className="flex justify-between items-center ">
                      <div className="font-semibold text-[20px] md:text-[24px] mb-0 text-[#032b41]">
                        How does the free 7-day trial work?
                      </div>
                      <SlArrowDown
                        className={`min-w-[24px] w-[24px] h-[24px] transition-transform duration-500 ml-[24px] ${
                          accordionOneClicked ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`text-[#394547] transition-[height] ease-in duration-500 ${
                        accordionOneClicked ? "inline" : "hidden"
                      } `}
                    >
                      Begin your complimentary 7-day trial with a Summarist
                      annual membership. You are under no obligation to continue
                      your subscription, and you will only be billed when the
                      trial period expires. With Premium access, you can learn
                      at your own pace and as frequently as you desire, and you
                      may terminate your subscription prior to the conclusion of
                      the 7-day free trial.
                    </div>
                  </div>
                </div>
                <div className="border-b-[1px] border-solid overflow-hidden border-[#ddd]">
                  <div
                    className="flex flex-col  cursor-pointer py-[24px] gap-[8px]"
                    onClick={handleAccordionTwo}
                  >
                    <div className="flex justify-between items-center ">
                      <div className="font-semibold text-[20px] md:text-[24px] mb-0 text-[#032b41]">
                        Can I switch subscriptions from monthly to yearly, or
                        yearly to monthly?
                      </div>
                      <SlArrowDown
                        className={`min-w-[24px] w-[24px] h-[24px] transition-transform duration-500 ml-[24px] ${
                          accordionTwoClicked ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`text-[#394547] transition-[height] ease-in duration-500 ${
                        accordionTwoClicked ? "inline" : "hidden"
                      } `}
                    >
                      While an annual plan is active, it is not feasible to
                      switch to a monthly plan. However, once the current month
                      ends, transitioning from a monthly plan to an annual plan
                      is an option.
                    </div>
                  </div>
                </div>

                <div className="border-b-[1px] border-solid overflow-hidden border-[#ddd]">
                  <div
                    className="flex flex-col  cursor-pointer py-[24px] gap-[8px]"
                    onClick={handleAccordionThree}
                  >
                    <div className="flex justify-between items-center ">
                      <div className="font-semibold text-[20px] md:text-[24px] mb-0 text-[#032b41]">
                        What's included in the Premium plan?
                      </div>
                      <SlArrowDown
                        className={`min-w-[24px] w-[24px] h-[24px] transition-transform duration-500 ml-[24px] ${
                          accordionThreeClicked ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`text-[#394547] transition-[height] ease-in duration-500 ${
                        accordionThreeClicked ? "inline" : "hidden"
                      } `}
                    >
                      Premium membership provides you with the ultimate
                      Summarist experience, including unrestricted entry to many
                      best-selling books high-quality audio, the ability to
                      download titles for offline reading, and the option to
                      send your reads to your Kindle.
                    </div>
                  </div>
                </div>
                <div className="border-b-[1px] border-solid overflow-hidden border-[#ddd]">
                  <div
                    className="flex flex-col  cursor-pointer py-[24px] gap-[8px]"
                    onClick={handleAccordionFour}
                  >
                    <div className="flex justify-between items-center ">
                      <div className="font-semibold text-[20px] md:text-[24px] mb-0 text-[#032b41]">
                        Can I cancel during my trial or subscription?
                      </div>
                      <SlArrowDown
                        className={`min-w-[24px] w-[24px] h-[24px] transition-transform duration-500 ml-[24px]${
                          accordionFourClicked ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`text-[#394547] transition-[height] ease-in duration-500 ${
                        accordionFourClicked ? "inline" : "hidden"
                      } `}
                    >
                      You will not be charged if you cancel your trial before
                      its conclusion. While you will not have complete access to
                      the entire Summarist library, you can still expand your
                      knowledge with one curated book per day.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}