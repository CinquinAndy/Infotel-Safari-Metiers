import clsx from "clsx";
import Link from "next/link";
import React from "react";

export function SocialLink({className, href, children, icon: Icon}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-slate-800 transition hover:text-teal-700 "
            >
                <Icon className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-teal-700"/>
                <span className="ml-4 flex items-center">{children}</span>
            </Link>
        </li>
    )
}