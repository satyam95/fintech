import quote from "../assets/quotes.png";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import review4 from "../assets/review4.png";
import playBtn from "../assets/play-btn.png";
import coin from "../assets/coin.png";
import arrowRight from "../assets/arrow-right.png";

const Footer = () => {
  return (
    <footer className="bg-[#161C28]">
      <div className="container mx-auto">
        <div className="pt-[130px] pb-[170px]">
          <div className="flex justify-between gap-[100px]">
            <div className="max-w-[466px]">
              <div className="flex flex-col gap-5">
                <h3 className="text-[50px] leading-none font-semibold text-white">
                  People are Saying About DoWhith
                </h3>
                <p className="text-[#A6A6A6] text-lg leading-[30px] font-medium">
                  Everything you need to accept to payment and grow your money
                  of manage anywhere on planet
                </p>
              </div>
              <div className="flex flex-col gap-10 pt-[42px]">
                <img src={quote} alt="quote icon" width={45} height={38} />
                <p className="text-[#A6A6A6] text-lg leading-[30px] font-medium">
                  I am very helped by this E-wallet application , my days are
                  very easy to use this application and its very helpful in my
                  life , even I can pay a short time 😍
                </p>
                <p className="text-[#A6A6A6] text-lg leading-[30px] font-medium">
                  _ Aria Zinanrio
                </p>
              </div>
              <div className="flex items-center gap-5 mt-10">
                <img src={review1} alt="review 1" width={66} height={66} />
                <img src={review2} alt="review 2" width={66} height={66} />
                <img src={review3} alt="review 3" width={66} height={66} />
                <img src={review4} alt="review 4" width={66} height={66} />
                <img src={playBtn} alt="play btn icon" width={66} height={66} />
              </div>
            </div>
            <div className="grow">
              <div className="bg-[#222938] rounded-3xl w-full h-full">
                <div className="flex flex-col justify-center gap-6 items-center w-full h-full">
                  <div className="flex items-center gap-2.5 flex-col">
                    <img
                      src={coin}
                      alt="coin stack together icon"
                      width={73}
                      height={86}
                    />
                    <h3 className="text-white text-[30px] leading-none font-medium">
                      Get Started
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5">
                      <label
                        htmlFor="emailField"
                        className="text-white font-medium text-lg leading-none"
                      >
                        Email
                      </label>
                      <input
                        id="emailField"
                        type="text"
                        placeholder="Enter your email"
                        className="h-[50px] w-[440px] bg-white rounded-xl text-[#A6A6A6] text-sm outline-none px-5 py-4 placeholder:text-[#A6A6A6]"
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <label
                        htmlFor="message"
                        className="text-white font-medium text-lg leading-none"
                      >
                        Email
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="What are you say ?"
                        className="w-[440px] bg-white rounded-xl text-[#A6A6A6] text-sm outline-none px-5 py-4 placeholder:text-[#A6A6A6]"
                      />
                    </div>
                    <div className="flex flex-col items-end	gap-1">
                      <button className="text-white text-base leading-none font-semibold w-full text-center max-w-[440px] bg-[#54BD95] rounded-xl py-5">
                        Request Demo
                      </button>
                      <p className="font-medium text-sm leading-none text-white">
                        <span className="text-[#A6A6A6]">or</span> Start Free
                        Trial
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[157px]">
          <div className="w-[410px]">
            <div className="flex flex-col gap-[30px]">
              <h2 className="text-[#54BD95] leading-none font-semibold text-[50px]">
                Biccas
              </h2>
              <p className="text-[#A6A6A6] text-lg leading-none font-medium">
                Get started noew try our product
              </p>
              <div className="h-[60px] w-full border-[#A6A6A6] border-2 rounded-full flex items-center px-1.5">
                <input
                  type="email"
                  className="text-xl pl-3 leading-[30px] font-medium text-[#A6A6A6] grow bg-transparent outline-none"
                  placeholder="Enter your email here"
                />
                <div className="w-[46px] h-[46px] bg-[#54BD95] rounded-full cursor-pointer flex justify-center items-center">
                  <img
                    src={arrowRight}
                    alt="right arrow icon"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grow">
            <div className="grid grid-cols-3 gap-[64px]">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-white text-lg leading-none font-medium">
                  Support
                </h3>
                <ul className="flex flex-col gap-5">
                  <li className="text-[#A6A6A6] text-lg leading-none font-medium">
                    Help centre
                  </li>
                  <li className="text-[#A6A6A6] text-lg leading-none font-medium">
                    Account information
                  </li>
                  <li className="text-[#A6A6A6] text-lg leading-none font-medium">
                    About
                  </li>
                  <li className="text-[#A6A6A6] text-lg leading-none font-medium">
                    Contact us
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-white text-lg leading-none font-medium">
                  Help and Solution
                </h3>
                <ul className="flex flex-col gap-5">
                  <li className="text-[#A6A6A6] text-lg leading-none font-medium">
                    Talk to support
                  </li>
                  <li className="text-[#A6A6A6] text-lg leading-none font-medium">
                    Support docs
                  </li>
                  <li className="text-[#A6A6A6] text-lg leading-none font-medium">
                    System status
                  </li>
                  <li className="text-[#A6A6A6] text-lg leading-none font-medium">
                    Covid responde
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-white text-lg leading-none font-medium">
                  Product
                </h3>
                <ul className="flex flex-col gap-5">
                  <li className="text-[#A6A6A6] text-lg leading-none font-medium">
                    Update
                  </li>
                  <li className="text-[#A6A6A6] text-lg leading-none font-medium">
                    Security
                  </li>
                  <li className="text-[#A6A6A6] text-lg leading-none font-medium">
                    Beta test
                  </li>
                  <li className="text-[#A6A6A6] text-lg leading-none font-medium">
                    Pricing product
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10 pt-16 flex justify-between items-center">
          <div className="text-white text-lg font-medium leading-[30px]">
            © 2022 Biccas Inc. Copyright and rights reserved
          </div>
          <div className="flex items-center gap-3">
            <div className="text-white text-lg font-medium leading-[30px] cursor-pointer">
              Terms and Condtions
            </div>
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="text-white text-lg font-medium leading-[30px] cursor-pointer">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
