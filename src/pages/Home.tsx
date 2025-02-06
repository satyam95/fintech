import hero from "../assets/hero.png";
import divider from "../assets/divider.png";
import outlinePlay from "../assets/outlinePlay.svg";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import activity1 from "../assets/activity1.png";
import activity2 from "../assets/activity2.png";
import activity3 from "../assets/activity3.png";
import feat1 from "../assets/feat1.png";
import feat2 from "../assets/feat2.png";
import feat3 from "../assets/feat3.png";
import tick from "../assets/tick.svg";
import laptop from "../assets/laptop.png";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";

import Button from "../components/Button";
import ReviewCard from "../components/ReviewCard";
import FeatureCard from "../components/FeatureCard";
import InfoCard from "../components/InfoCard";

const Home = () => {
  return (
    <>
      <section className="pt-[90px] pb-[65px]">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            <div className="text-center lg:text-left lg:w-1/2">
              <h2 className="text-[#191A15] text-[62px] leading-[72px] md:text-[80px] md:leading-[90px] font-bold">
                We’re here to Increase your Productivity
              </h2>
              <img
                src={divider}
                alt="divider arc"
                className="mt-[30px] mb-[50px] mx-auto lg:ml-0 lg:mr-0"
              />
              <p className="text-black text-lg leading-[30px font-medium] lg:max-w-[461px]">
                Let's make your work more organize and easily using the Taskio
                Dashboard with many of the latest featuresin managing work every
                day.
              </p>
              <div className="mt-[50px] flex gap-10 items-center justify-center lg:justify-start">
                <Button btnText="Try free trial" varient="primary" size="md" />
                <div className="text-[#191A15] text-lg font-medium leading-none flex items-center gap-3.5 cursor-pointer">
                  <img
                    src={outlinePlay}
                    alt="play button icon"
                    height={40}
                    width={40}
                  />
                  View Demo
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={hero} alt="hero image" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[65px]">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col gap-[60px]">
            <h3 className="text-center text-[#191A15] text-[40px] font-bold leading-none">
              More than 25,000 teams use Collabs
            </h3>
            <div className="flex flex-wrap items-center gap-10 justify-center">
              <img src={client1} alt="client logo 1" />
              <img src={client2} alt="client logo 1" />
              <img src={client3} alt="client logo 1" />
              <img src={client4} alt="client logo 1" />
              <img src={client5} alt="client logo 1" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[65px]">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
            <div className="w-full lg:max-w-[520px] xl:max-w-[644px]">
              <div className="flex flex-col gap-[30px]">
                <h2 className="text-[#191A15] text-[50px] leading-none font-semibold">
                  How we support our pratner all over the world
                </h2>
                <p className="text-[#A6A6A6] text-base leading-[30px] font-medium">
                  SaaS become a common delivery model for many business
                  application, including office software, messaging software,
                  payroll processing software, DBMS software, management
                  software
                </p>
              </div>
              <div className="flex gap-20 pt-[40px] lg:pt-[73px]">
                <ReviewCard
                  rating={5}
                  title="4.9 / 5 rating"
                  descp="databricks"
                />
                <ReviewCard
                  rating={4}
                  title="4.8 / 5 rating"
                  descp="Chainalysis"
                />
              </div>
            </div>
            <div className="grow flex flex-col gap-[30px]">
              <InfoCard
                img={activity1}
                imgAlt="activity 1 icon"
                title="Publishing"
                desp="Plan, collaborate, and publishing your contetn that drivees meaningful
          engagement and growth for your barnd"
              />
              <InfoCard
                img={activity2}
                imgAlt="activity 2 icon"
                title="Analytics"
                desp="Analyze your performance and create goegeous report"
              />
              <InfoCard
                img={activity3}
                imgAlt="activity 3 icon"
                title="Engagement"
                desp="Quiuckly navigate you anda engage with your adience"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[65px]">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between">
            <h2 className="text-[#191A15] text-[50px] leading-none font-semibold max-w-[331px]">
              Our Features you cab get
            </h2>
            <p className="hidden lg:block text-[#A6A6A6] text-lg leading-[30px] font-medium max-w-[390px] xl:max-w-[461px]">
              We offer a variety of interesting features that you can help
              increase yor productivity at work and manage your projrct esaly
            </p>
            <Button btnText="Get Started" varient="primary" size="md" />
          </div>
          <div className="w-full flex flex-wrap justify-center xl:justify-between gap-[65px] xl:gap-[30px] pt-[74px]">
            <FeatureCard
              img={feat1}
              imgAlt="feature 1 image"
              title="Collboration Teams"
              descp="Here you can handle projects together with team virtually"
            />
            <FeatureCard
              img={feat2}
              imgAlt="feature 2 image"
              title="Cloud Storage"
              descp="No nedd to worry about storage because we provide storage up to 2 TB"
            />
            <FeatureCard
              img={feat3}
              imgAlt="feature 3 image"
              title="Daily Analytics"
              descp="We always provide useful informatin to make it easier for you every day"
            />
          </div>
        </div>
      </section>
      <section className="py-[65px]">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row justify-between lg:justify-center items-center gap-20 lg:gap-40">
            <div className="lg:max-w-[471px]">
              <h2 className="text-[#191A15] text-[50px] leading-none font-bold">
                What Benifit Will You Get
              </h2>
              <div className="flex flex-col gap-[30px] pt-[50px]">
                <div className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                  <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                    <img src={tick} alt="tick icon" width={20} height={20} />
                  </div>
                  Free Consulting With Experet Saving Money
                </div>
                <div className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                  <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                    <img src={tick} alt="tick icon" width={20} height={20} />
                  </div>
                  Online Banking
                </div>
                <div className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                  <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                    <img src={tick} alt="tick icon" width={20} height={20} />
                  </div>
                  Investment Report Every Month
                </div>
                <div className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                  <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                    <img src={tick} alt="tick icon" width={20} height={20} />
                  </div>
                  Saving Money For The Future
                </div>
                <div className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                  <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                    <img src={tick} alt="tick icon" width={20} height={20} />
                  </div>
                  Online Transection
                </div>
              </div>
            </div>
            <div className="relative lg:mr-[69px]">
              <img src={laptop} alt="laptop image" />
              <img src={a1} alt="absolute image 1" className="hidden md:block absolute top-10 -left-[152px]" />
              <img src={a2} alt="absolute image 2" className="hidden md:block absolute top-[121px] -right-[79px]" />
              <img src={a3} alt="absolute image 3" className="hidden md:block absolute -bottom-8 -left-[100px]" />
              <img src={a4} alt="absolute image 4" className="hidden md:block absolute top-64 -left-16" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[65px] pb-[90px]">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col gap-6 justify-center items-center">
            <h2 className="leading-[73px] text-[50px] text-[#191A15] font-bold text-center max-w-[492px]">
              Choose Plan That’s Right For You
            </h2>
            <p className="text-[#A6A6A6] font-bold text-lg leading-[22px] text-center">
              Choose plan that works best for you, feel free to contact us
            </p>
          </div>
          <div className="max-w-[340px] bg-white rounded-xl h-[70px] mx-auto mb-[67px] mt-10 flex items-center p-2 justify-between">
            <button className="text-lg leading-[30px] font-medium text-[#191A15] w-[160px] h-[56px] text-center bg-transparent rounded-xl">
              Bill Monthly
            </button>
            <button className="text-lg leading-[30px] font-medium text-white w-[160px] h-[56px] text-center bg-[#54BD95] rounded-xl">
              Bill Yearly
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-[30px] items-center">
            <div className="max-w-[374px] w-full bg-white rounded-3xl flex flex-col items-center justify-center px-5 py-6">
              <div className="flex flex-col gap-2.5 max-w-[251px]">
                <h3 className="text-[#191A15] font-semibold leading-none text-[30px] text-center">
                  Free
                </h3>
                <p className="text-[#A6A6A6] font-medium leading-[27px] text-lg text-center">
                  Have a go and test your superpowers
                </p>
              </div>
              <div className="flex gap-1 mt-3 mb-[30px]">
                <div className="text-[#A6A6A6] leading-[30px] text-lg font-medium">
                  $
                </div>
                <div className="text-[#191A15] leading-none text-[50px] font-semibold">
                  0
                </div>
              </div>
              <div className="bg-[#F9FAFB] w-full rounded-xl py-6 px-8">
                <ul className="mb-[27px] flex flex-col gap-[22px]">
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    2 Users
                  </li>
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    2 Files
                  </li>
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    Public Share & Comments
                  </li>
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    Chat Support
                  </li>
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    New income apps
                  </li>
                </ul>
                <button className="text-[#54BD95] text-lg leading-[30px] font-semibold py-4 w-full rounded-3xl bg-white shadow-lg">
                  Signup for free
                </button>
              </div>
            </div>
            <div className="max-w-[374px] w-full bg-[#54BD95] rounded-3xl flex flex-col items-center justify-center px-5 py-6">
              <div className="flex flex-col gap-2.5 max-w-[251px]">
                <h3 className="text-white font-semibold leading-none text-[30px] text-center">
                  Pro
                </h3>
                <p className="text-white font-medium leading-[27px] text-lg text-center">
                  Experiment the power of infinite possibilities
                </p>
              </div>
              <div className="flex gap-1 mt-3">
                <div className="text-white leading-[30px] text-lg font-medium">
                  $
                </div>
                <div className="text-white leading-none text-[50px] font-semibold">
                  8
                </div>
              </div>
              <div className="my-4">
                <button className="shadow-xl text-white text-sm leading-[30px] font-semibold px-2.5 py-1.5 rounded-xl bg-[#85DAB9]">
                  Save $50 a year
                </button>
              </div>
              <div className="bg-white w-full rounded-xl py-6 px-8">
                <ul className="mb-[27px] flex flex-col gap-[22px]">
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    4 Users
                  </li>
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    All apps
                  </li>
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    Unlimited editable exports
                  </li>
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    Folders and collaboration
                  </li>
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    All incoming apps
                  </li>
                </ul>
                <button className="text-[#54BD95] text-lg leading-[30px] font-semibold py-4 w-full rounded-3xl bg-white shadow-lg">
                  Go to pro
                </button>
              </div>
            </div>
            <div className="max-w-[374px] w-full bg-white rounded-3xl flex flex-col items-center justify-center px-5 py-6">
              <div className="flex flex-col gap-2.5 max-w-[251px]">
                <h3 className="text-[#191A15] font-semibold leading-none text-[30px] text-center">
                  Business
                </h3>
                <p className="text-[#A6A6A6] font-medium leading-[27px] text-lg text-center">
                  Unveil new superpowers and join the Design Leaque
                </p>
              </div>
              <div className="flex gap-1 mt-3 mb-[30px]">
                <div className="text-[#A6A6A6] leading-[30px] text-lg font-medium">
                  $
                </div>
                <div className="text-[#191A15] leading-none text-[50px] font-semibold">
                  16
                </div>
              </div>
              <div className="bg-[#F9FAFB] w-full rounded-xl py-6 px-8">
                <ul className="mb-[27px] flex flex-col gap-[22px]">
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    All the features of pro plan
                  </li>
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    Account success Manager
                  </li>
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    Single Sign-On (SSO)
                  </li>
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    Co-conception pogram
                  </li>
                  <li className="text-[#191A15] font-medium text-lg leading-[30px] flex items-center gap-2.5">
                    <div className="max-w-[26px] min-h-[26px] w-full rounded-full bg-[#54BD95] flex justify-center items-center">
                      <img src={tick} alt="tick icon" width={20} height={20} />
                    </div>
                    Collaboration-Soon
                  </li>
                </ul>
                <button className="text-[#54BD95] text-lg leading-[30px] font-semibold py-4 w-full rounded-3xl bg-white shadow-lg">
                  Goto Business
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
