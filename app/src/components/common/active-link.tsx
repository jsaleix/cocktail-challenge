"use client";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface Props extends LinkProps {
    activeClassName?: string;
    children: React.ReactNode;
    className?: string;
    exact?: boolean;
}

export default function ActiveLink({
    children,
    activeClassName,
    exact,
    ...rest
}: Props) {
    const currentPath = usePathname();
    const cond = useMemo(() => {
        if (rest.href === "/") {
            return currentPath === rest.href;
        }
        if (exact) {
            return currentPath === rest.href;
        }
        return currentPath.startsWith(rest.href as string);
    }, [currentPath, rest.href, exact]);

    return (
        <Link
            {...rest}
            className={clsx(
                rest.className ?? "",
                cond ? activeClassName ?? "" : ""
            )}
        >
            {children}
        </Link>
    );
}
