import hero from "../assets/hero.png";
import divider from "../assets/divider.png";
import play from "../assets/play.svg";
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

import Button from "../components/Button";
import InfoCard from "../components/infoCard";
import ReviewCard from "../components/ReviewCard";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  return (
    <>
      <section className="pt-[90px] pb-[65px]">
        <div className="container mx-auto">
          <div className="flex gap-10 w-full">
            <div className="w-1/2">
              <h2 className="text-[#191A15] text-[80px] leading-[90px] font-bold">
                We’re here to Increase your Productivity
              </h2>
              <img
                src={divider}
                alt="divider arc"
                className="mt-[30px] mb-[50px]"
              />
              <p className="text-black text-lg leading-[30px font-medium] max-w-[461px]">
                Let's make your work more organize and easily using the Taskio
                Dashboard with many of the latest featuresin managing work every
                day.
              </p>
              <div className="mt-[50px] flex gap-10 items-center">
                <Button btnText="Try free trial" varient="primary" size="md" />
                <div className="text-[#191A15] text-lg font-medium leading-none flex items-center gap-3.5 cursor-pointer">
                  <img
                    src={play}
                    alt="play button icon"
                    height={40}
                    width={40}
                  />
                  View Demo
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <img src={hero} alt="hero image" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[65px]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-[60px]">
            <h3 className="text-center text-[#191A15] text-[40px] font-bold leading-none">
              More than 25,000 teams use Collabs
            </h3>
            <div className="flex items-center gap-10 justify-center">
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
        <div className="container mx-auto">
          <div className="flex gap-8">
            <div className="max-w-[644px]">
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
              <div className="flex gap-20 pt-[73px]">
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
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-[#191A15] text-[50px] leading-none font-semibold max-w-[331px]">
              Our Features you cab get
            </h2>
            <p className="text-[#A6A6A6] text-lg leading-[30px] font-medium max-w-[461px]">
              We offer a variety of interesting features that you can help
              increase yor productivity at work and manage your projrct esaly
            </p>
            <Button btnText="Get Started" varient="primary" size="md" />
          </div>
          <div className="w-full flex justify-between gap-[30px] pt-[74px]">
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
    </>
  );
};

export default Home;
