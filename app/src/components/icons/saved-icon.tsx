interface Props {
  onClick?: () => void;
}

export default function SavedIcon({onClick}: Props) {
  return (
    <svg
      onClick={onClick}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM8.42 15.41L12.59 19.58L23.18 9L24.59 10.41L12.59 22.41L7 16.82L8.42 15.41Z"
        fill="white"
      />
    </svg>
  );
}
