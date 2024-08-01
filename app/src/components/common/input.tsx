import clsx from "clsx";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, placeholder, ...props }: Props) => {
  return (
    <input
      {...props}
      type="text"
      placeholder={placeholder ?? "Type anything"}
      className={clsx(
        "bg-background rounded-xl p-5 outline-none text-white placeholder:font-light",
        className
      )}
    />
  );
};

export default Input;
