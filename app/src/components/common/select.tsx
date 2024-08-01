import clsx from "clsx";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export default function Select({ children, className, ...props }: Props) {
  return (
    <select
      {...props}
      className={clsx(
        "bg-background rounded-xl py-5 px-8 shadow-md outline-none",
        className
      )}
    >
      {children}
    </select>
  );
}
