export default function CircledArrow() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group"
    >
      <path
        d="M25 18L11 18M25 18L19 24M25 18L19 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:opacity-80 group-hover:translate-x-0.5 duration-300"
      />
      <circle
        cx="18"
        cy="18"
        r="17.3571"
        transform="rotate(-90 18 18)"
        stroke="white"
        strokeWidth="1.28571"
      />
    </svg>
  );
}
