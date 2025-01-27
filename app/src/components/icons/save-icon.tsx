interface Props {
  onClick?: () => void;
}

export default function SaveIcon({ onClick }: Props) {
  return (
    <svg
      onClick={onClick}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="2" />
      <path d="M23 17H17V23H15V17H9V15H15V9H17V15H23V17Z" fill="white" />
    </svg>
  );
}
