import clsx from "clsx";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
}

export default function Btn({
  children,
  onClick,
  className,
  reverse = false,
  ...rest
}: Props) {
  const disabled = "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-white";
  const base =
    "group px-5 py-3 border-transparent border-2 rounded-xl flex items-center justify-center gap-2 text-md duration-500";
  const regular =
    "text-white !border-white hover:bg-white hover:text-black hover:border-transparent";
  const reversed =
    "text-black bg-white hover:bg-slate-700 hover:text-white hover:border-white ";

  return (
    <button
      className={clsx(
        base,
        rest.disabled && disabled,
        reverse ? reversed : regular,
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
