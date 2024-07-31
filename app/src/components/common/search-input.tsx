import { forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ className, placeholder, ...props }, ref) => {
    return (
      <div className="flex items-center gap-3 bg-background rounded-xl px-5 shadow-md ">
        <svg
          width="30"
          height="30"
          viewBox="0 0 37 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.8538 33.2657L27.3 24.7135C29.7793 21.737 31.0155 17.9193 30.7517 14.0545C30.4878 10.1898 28.7441 6.57548 25.8833 3.96357C23.0225 1.35166 19.2649 -0.0567815 15.3921 0.0312337C11.5194 0.119249 7.82959 1.69695 5.09042 4.43612C2.35124 7.1753 0.773546 10.8651 0.685531 14.7378C0.597515 18.6106 2.00596 22.3682 4.61787 25.229C7.22977 28.0898 10.844 29.8335 14.7088 30.0974C18.5736 30.3612 22.3913 29.125 25.3678 26.6457L33.92 35.1996C34.0469 35.3265 34.1977 35.4273 34.3636 35.496C34.5295 35.5647 34.7073 35.6001 34.8869 35.6001C35.0665 35.6001 35.2443 35.5647 35.4102 35.496C35.5761 35.4273 35.7269 35.3265 35.8538 35.1996C35.9808 35.0726 36.0816 34.9218 36.1503 34.7559C36.219 34.59 36.2544 34.4122 36.2544 34.2326C36.2544 34.053 36.219 33.8752 36.1503 33.7093C36.0816 33.5434 35.9808 33.3927 35.8538 33.2657ZM3.4528 15.0988C3.4528 12.666 4.1742 10.2879 5.52578 8.26512C6.87735 6.24235 8.7984 4.66579 11.046 3.73481C13.2936 2.80383 15.7667 2.56024 18.1528 3.03485C20.5388 3.50946 22.7305 4.68095 24.4507 6.40118C26.171 8.12141 27.3425 10.3131 27.8171 12.6991C28.2917 15.0852 28.0481 17.5583 27.1171 19.8059C26.1861 22.0535 24.6096 23.9746 22.5868 25.3261C20.564 26.6777 18.1859 27.3991 15.7531 27.3991C12.492 27.3955 9.36544 26.0984 7.05947 23.7924C4.7535 21.4865 3.45642 18.3599 3.4528 15.0988Z"
            fill="white"
          />
        </svg>

        <input
          ref={ref}
          {...props}
          type="text"
          placeholder={placeholder ?? "Type anything"}
          className="w-full bg-transparent py-5 outline-none text-white placeholder:font-light"
        />
      </div>
    );
  }
);

export default SearchInput;
