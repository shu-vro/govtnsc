"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import principal from "@/assets/principal.jpg";
import notice_png from "@/assets/notice.png";
import result_logo from "@/assets/result-logo.png";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Image } from "@nextui-org/react";
import { ThemeButton } from "@/components/ThemeButton";
import {
    notice_links,
    NavigationLinks,
    about_us_links,
    result_links,
} from "@/lib/constants";

export default function NavigationLinksDesktop() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>
                            {NavigationLinks.home}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        {NavigationLinks.about}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="gap-3 p-4 md:w-[400px] lg:w-[500px] flex flex-row justify-between items-start">
                            <NavigationMenuLink asChild>
                                <Link
                                    className="flex h-full w-fit select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 px-3 no-underline outline-none focus:shadow-md"
                                    href="/principals">
                                    <Image
                                        src={principal.src}
                                        alt="principal"
                                        className="w-[calc(14rem*.8)] h-56 m-auto block"
                                    />
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                        অধ্যক্ষগণের তালিকা
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground w-48">
                                        A legacy of visionary leaders who have
                                        inspired innovation and excellence in
                                        every student, setting a path for future
                                        success
                                    </p>
                                </Link>
                            </NavigationMenuLink>
                            <div className="grow">
                                {about_us_links.map((link, i) => (
                                    <ListItem
                                        key={i}
                                        href={link.href}
                                        title={link.title}>
                                        {link.description}
                                    </ListItem>
                                ))}
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        {NavigationLinks.notice}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] items-start">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href={notice_links[0].href}>
                                        <Image
                                            src={notice_png.src}
                                            alt="principal"
                                            // className="w-[calc(14rem*.8)] h-56 m-auto block"
                                        />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Notice
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            All kinds of latest notices,
                                            downloads, instructions can be found
                                            here.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {notice_links.map((link, i) => (
                                <ListItem
                                    key={i}
                                    title={link.title}
                                    href={link.href}>
                                    {link.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        {NavigationLinks.result}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] items-start">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href={result_links[0].href}>
                                        <Image
                                            src={result_logo.src}
                                            alt="result"
                                            // className="w-[calc(14rem*.8)] h-56 m-auto block"
                                        />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Result
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Our college&apos;s results are a
                                            testament to the dedication and hard
                                            work of our students, showcasing a
                                            remarkable achievement in academic
                                            excellence.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {result_links.map((link, i) => (
                                <ListItem
                                    key={i}
                                    title={link.title}
                                    href={link.href}>
                                    {link.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/campus" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>
                            {NavigationLinks.campus}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/routine" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>
                            {NavigationLinks.routine}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>
                            {NavigationLinks.contact}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <ThemeButton />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, children, ...props }, ref) => {
    return (
        <div>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={href!}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}>
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </div>
    );
});
ListItem.displayName = "ListItem";
