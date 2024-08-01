import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  reverse?: boolean;
}

export default function Btn({
  children,
  onClick,
  className,
  reverse = false,
}: Props) {
  const base =
    "group px-5 py-3 border-transparent border-2 rounded-xl flex items-center justify-center gap-2 text-md duration-500";
  const regular =
    "text-white !border-white hover:bg-white hover:text-black hover:border-transparent";
  const reversed =
    "text-black bg-white hover:bg-slate-700 hover:text-white hover:border-white ";

  return (
    <button
      className={clsx(base, reverse ? reversed : regular, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
