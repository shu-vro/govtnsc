import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import { about_us_links, notice_links } from "@/lib/constants";

export enum NavigationLinks {
    home = "হোম পেজ",
    about = "আমাদের সম্পর্কে",
    notice = "Notice",
    result = "রেজাল্ট",
    campus = "Campus",
    routine = "Routine",
    contact = "Contact",
}

export default function Footer() {
    return (
        <>
            <Card className="w-[calc(100%-4rem)] m-8 p-2">
                <CardBody className="grid grid-cols-3 items-center max-lg:grid-rows-3 max-lg:grid-cols-1 gap-4">
                    <ul>
                        {Object.values(NavigationLinks).map((link, i) => (
                            <li key={i}>
                                {link === NavigationLinks.about ||
                                link === NavigationLinks.notice ||
                                link === NavigationLinks.result ? (
                                    ""
                                ) : (
                                    <Link
                                        href={link.toLowerCase()}
                                        className={
                                            "hover:text-blue-600 transition-all"
                                        }>
                                        {link}
                                    </Link>
                                )}
                            </li>
                        ))}
                        {about_us_links.map((link, i) => (
                            <li key={i}>
                                <Link
                                    href={link.href}
                                    className={
                                        "hover:text-blue-600 transition-all"
                                    }>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                        {notice_links.map((link, i) => (
                            <li key={i}>
                                <Link
                                    href={link.href}
                                    className={
                                        "hover:text-blue-600 transition-all"
                                    }>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="border-x-1 max-lg:border-x-0 max-lg:border-y-1 border-zinc-600 px-8">
                        <Image
                            alt="nextui logo"
                            height={400}
                            className={"rounded-sm"}
                            src={logo}
                            width={400}
                        />
                    </div>
                    <ul className="text-xl max-lg:text-sm leading-8">
                        <li className="mb-4">
                            <b>যোগাযোগের ঠিকানা:</b>
                            <ul className="ml-2">
                                <li>নালিতাবাড়ী, শেরপুর।</li>

                                <li>INS. No - 380 3013 201</li>

                                <li>EIIN - 113826</li>

                                <li>জাতীয় বিশ্ববিদ্যালয় : ৫১০২</li>

                                <li>উচ্চ মাধ্যমিক : ৯৩২৫</li>

                                <li>বাংলাদেশ কারিগরি : ৫৬০২৩</li>

                                <li>Email : govnsc@gmail.com</li>

                                <li>Website : govtnsc.edu.bd</li>
                            </ul>
                        </li>
                    </ul>
                </CardBody>
            </Card>
            <div className="bottom">
                &copy;All rights reserved © 2022 govnsc.edu.bd
            </div>
        </>
    );
}
