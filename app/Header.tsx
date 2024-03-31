import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import React from "react";
import logo from "@/assets/logo.png";
import NavigationLinks from "./NavigationLinks";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <Navbar shouldHideOnScroll maxWidth="xl">
            <NavbarContent justify="start" as={Link} href={"/"}>
                <NavbarBrand>
                    <Image
                        src={logo}
                        alt="logo"
                        width={60}
                        height={60}
                        // style={{
                        //     width: "60px",
                        // }}
                    />
                    <div className="name-section">
                        <div>সরকারি নাজমুল স্মৃতি মহাবিদ্যালয়</div>
                        <div>নালিতাবাড়ী, শেরপুর। EIIN No- 113826</div>
                    </div>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavigationLinks />
            </NavbarContent>
        </Navbar>
    );
}

/*
<div className="flex justify-between items-center min-h-20 w-full sticky top-0 backdrop-filter backdrop-blur-[20px] z-50 bg-zinc-800 bg-opacity-20">
            <div className="logo-section flex flex-row justify-center items-center gap-3 ml-9">
                <Image src={logo.src} alt="logo" width={60} height={60} />
                <div className="name-section">
                    <div>সরকারি নাজমুল স্মৃতি মহাবিদ্যালয়</div>
                    <div>নালিতাবাড়ী, শেরপুর। EIIN No- 113826</div>
                </div>
            </div>
            <NavigationLinks />
        </div>
*/
