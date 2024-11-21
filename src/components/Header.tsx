import Button from "./Button";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-10">
          <div className="text-[#54BD95] font-semibold leading-none text-[50px] cursor-pointer">
            Biccas
          </div>
          <div className="flex items-center gap-[130px]">
            <nav>
              <ul className="flex gap-10 items-center">
                <li className="text-[#A6A6A6] font-medium leading-none text-base cursor-pointer">
                  Home
                </li>
                <li className="text-[#A6A6A6] font-medium leading-none text-base cursor-pointer">
                  Product
                </li>
                <li className="text-[#A6A6A6] font-medium leading-none text-base cursor-pointer">
                  FAQ
                </li>
                <li className="text-[#A6A6A6] font-medium leading-none text-base cursor-pointer">
                  Blog
                </li>
                <li className="text-[#A6A6A6] font-medium leading-none text-base cursor-pointer">
                  About Us
                </li>
              </ul>
            </nav>
            <div className="flex flex-row items-center gap-[20px]">
              <Button btnText="Login" varient="transparent" size="sm" />
              <Button btnText="Sign Up" varient="primary" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
