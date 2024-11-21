import hero from "../assets/hero.png";
import divider from "../assets/divider.png";
import play from "../assets/play.svg";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";

import Button from "../components/Button";
const Home = () => {
  return (
    <>
      <section className="pt-[90px] pb-[65px]">
        <div className="container mx-auto">
          <div className="flex gap-10 w-full">
            <div className="w-1/2">
              <h2 className="text-[#191A15] text-[80px] leading-[90px] font-bold">We’re here to Increase your Productivity</h2>
              <img src={divider} alt="divider arc" className="mt-[30px] mb-[50px]" />
              <p className="text-black text-lg leading-[30px font-medium] max-w-[461px]">Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
              <div className="mt-[50px] flex gap-10 items-center">
                <Button btnText="Try free trial" varient="primary" size="md" />
                <div className="text-[#191A15] text-lg font-medium leading-none flex items-center gap-3.5 cursor-pointer">
                  <img src={play} alt="play button icon" height={40} width={40} /> View Demo
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
            <h3 className="text-center text-[#191A15] text-[40px] font-bold leading-none">More than 25,000 teams use Collabs</h3>
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
    </>
  );
};

export default Home;
