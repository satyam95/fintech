type ButtonProps = {
  btnText: string;
  varient: "primary" | "transparent";
  size: "sm" | "md"
};
const Button = ({ btnText, varient, size }: ButtonProps) => {
  return (
    <button
      className={`font-medium ${size === "sm" ? "text-base leading-none px-2.5 py-3 rounded-xl" : "text-lg leading-none py-[20px] px-[30px] rounded-full"} ${
        varient === "primary"
          ? "text-[#F8F8FA] bg-[#54BD95]"
          : "text-[#A6A6A6] bg-transparent"
      } `}
    >
      {btnText}
    </button>
  );
};

export default Button;
