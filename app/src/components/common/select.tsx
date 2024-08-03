import clsx from "clsx";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  register?: any;
}

export default function Select({ children, className, register, ...props }: Props) {
  return (
    <select
      {...props}
      {...register}
      className={clsx(
        "bg-background rounded-xl py-5 px-3 shadow-md outline-none",
        className
      )}
    >
      {children}
    </select>
  );
}
