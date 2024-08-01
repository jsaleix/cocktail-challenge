import Divider from "@/components/common/divider";
import Input from "@/components/common/input";

interface Props {}

export default function BrowsePage({}: Props) {
  return (
    <div className="flex flex-col gap-5 p-5 min-h-48 w-2/3 bg-gradient-to-r from-light-blue to-slightly-darker-blue shadow-2xl rounded-md">
      <form className="flex items-center gap-5">
        <Input
          name=""
          type="text"
          placeholder="Type anything"
          className="w-1/3"
        />
        <select className="w-1/3 p-2 rounded-md">
          <option value="1">ASC</option>
          <option value="2">DESC</option>
        </select>
        <div className="flex items-center gap-2">
          <input type="radio" id="hide_saved" />
          <label htmlFor="hide_saved">Hide saved</label>
        </div>
        <button>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7 19.5H14.3V11.7H11.7V19.5ZM13 9.1C13.3683 9.1 13.6773 8.9752 13.9269 8.7256C14.1765 8.476 14.3009 8.16746 14.3 7.8C14.2991 7.43253 14.1743 7.124 13.9256 6.8744C13.6769 6.6248 13.3683 6.5 13 6.5C12.6317 6.5 12.3231 6.6248 12.0744 6.8744C11.8257 7.124 11.7009 7.43253 11.7 7.8C11.6991 8.16746 11.8239 8.47643 12.0744 8.7269C12.3249 8.97736 12.6334 9.10173 13 9.1ZM13 26C11.2017 26 9.51166 25.6585 7.93 24.9756C6.34833 24.2927 4.9725 23.3666 3.8025 22.1975C2.6325 21.0284 1.70647 19.6525 1.0244 18.07C0.342335 16.4875 0.000868312 14.7975 1.64557e-06 13C-0.000865021 11.2025 0.340602 9.51253 1.0244 7.93C1.7082 6.34747 2.63423 4.97163 3.8025 3.8025C4.97077 2.63337 6.3466 1.70733 7.93 1.0244C9.5134 0.341467 11.2034 0 13 0C14.7966 0 16.4866 0.341467 18.07 1.0244C19.6534 1.70733 21.0292 2.63337 22.1975 3.8025C23.3658 4.97163 24.2922 6.34747 24.9769 7.93C25.6616 9.51253 26.0026 11.2025 26 13C25.9974 14.7975 25.6559 16.4875 24.9756 18.07C24.2953 19.6525 23.3692 21.0284 22.1975 22.1975C21.0258 23.3666 19.6499 24.2931 18.07 24.9769C16.4901 25.6607 14.8001 26.0017 13 26Z"
              fill="#05FFF0"
            />
          </svg>
        </button>
      </form>
      <Divider />
    </div>
  );
}
