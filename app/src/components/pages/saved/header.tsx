interface Props {
  toggleSort: () => void;
}

export default function Header({ toggleSort }: Props) {
  return (
    <div className="flex">
      <div className="w-fit flex items-center gap-2">
        <input
          type="checkbox"
          id="hide_saved"
          onClick={toggleSort}
          className="appearance-none checked:appearance-auto bg-background w-5 h-5 rounded-md cursor-pointer hover:bg-gray-800 duration-500"
        />
        <label htmlFor="hide_saved" className="font-light">
          Recent first
        </label>
      </div>
    </div>
  );
}
