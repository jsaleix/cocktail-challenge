"use client";

import Link from "next/link";
import Image from "next/image";
import ActiveLink from "../../common/active-link";
import { GITHUB_URL } from "@/lib/config/links";

export default function Header() {
    return (
        <header className="z-10 bg-transparent flex w-full h-fit">
            <div className="w-full p-3 container mx-auto flex justify-between flex items-center border-b-2 border-gray-500">
                <div className={"flex justify-center items-center gap-6"}>
                    <div className="w-33 h-20 overflow-hidden hover:opacity-80">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                className="h-full w-full object-contain"
                                alt="Cocktail glass shaped logo"
                                width={130}
                                height={100}
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <nav className="flex items-center gap-5">
                        <ul className="flex gap-6 px-5 border-r-2 border-gray">
                            <li>
                                <ActiveLink
                                    href="/"
                                    className="hover:opacity-80"
                                    activeClassName="underline"
                                >
                                    Builder
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink
                                    activeClassName="underline"
                                    className="hover:opacity-80"
                                    href="/browse"
                                >
                                    Browse
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink
                                    activeClassName="underline"
                                    className="hover:opacity-80"
                                    href="/saved"
                                >
                                    Saved
                                </ActiveLink>
                            </li>
                        </ul>
                        <a href={GITHUB_URL} target="_blank" className="hover:opacity-80">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 256 250"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M128.001 0C57.317 0 0 57.307 0 128.001C0 184.555 36.676 232.536 87.535 249.461C93.932 250.646 96.281 246.684 96.281 243.303C96.281 240.251 96.161 230.168 96.107 219.473C60.497 227.215 52.983 204.37 52.983 204.37C47.16 189.575 38.77 185.64 38.77 185.64C27.157 177.696 39.646 177.86 39.646 177.86C52.499 178.762 59.267 191.05 59.267 191.05C70.684 210.618 89.212 204.961 96.516 201.69C97.665 193.418 100.982 187.77 104.643 184.574C76.212 181.338 46.325 170.362 46.325 121.316C46.325 107.341 51.325 95.922 59.513 86.958C58.184 83.734 53.803 70.716 60.753 53.084C60.753 53.084 71.502 49.644 95.963 66.205C106.173 63.369 117.123 61.947 128.001 61.898C138.879 61.947 149.838 63.368 160.067 66.205C184.498 49.645 195.232 53.085 195.232 53.085C202.199 70.715 197.816 83.735 196.487 86.958C204.694 95.922 209.66 107.341 209.66 121.316C209.66 170.479 179.716 181.304 151.213 184.473C155.804 188.445 159.895 196.235 159.895 208.177C159.895 225.303 159.747 239.087 159.747 243.303C159.747 246.71 162.051 250.701 168.539 249.443C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0ZM47.941 182.34C47.659 182.976 46.658 183.167 45.747 182.73C44.818 182.313 44.297 181.446 44.597 180.808C44.873 180.153 45.876 179.97 46.802 180.409C47.732 180.827 48.262 181.702 47.941 182.34ZM54.237 187.958C53.627 188.524 52.433 188.261 51.623 187.367C50.786 186.475 50.629 185.281 51.248 184.707C51.878 184.141 53.035 184.406 53.874 185.298C54.712 186.201 54.874 187.386 54.237 187.958ZM58.557 195.146C57.772 195.691 56.49 195.18 55.697 194.042C54.913 192.904 54.913 191.539 55.714 190.992C56.509 190.445 57.772 190.937 58.575 192.067C59.357 193.224 59.357 194.589 58.556 195.147M65.86 203.472C65.159 204.246 63.664 204.038 62.57 202.982C61.451 201.95 61.14 200.486 61.844 199.712C62.554 198.936 64.057 199.154 65.159 200.202C66.269 201.232 66.609 202.707 65.86 203.472ZM75.302 206.282C74.992 207.285 73.552 207.741 72.103 207.315C70.655 206.876 69.708 205.702 70 204.689C70.301 203.679 71.747 203.205 73.207 203.661C74.653 204.097 75.603 205.263 75.302 206.283M86.046 207.476C86.082 208.531 84.853 209.406 83.331 209.426C81.801 209.46 80.562 208.606 80.545 207.566C80.545 206.501 81.747 205.634 83.278 205.608C84.8 205.578 86.046 206.426 86.046 207.476ZM96.601 207.071C96.783 208.101 95.726 209.159 94.214 209.441C92.729 209.712 91.353 209.076 91.164 208.055C90.98 206.999 92.057 205.941 93.54 205.668C95.054 205.405 96.408 206.024 96.601 207.071Z"
                                    fill="white"
                                    className="fill-current"
                                />
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
