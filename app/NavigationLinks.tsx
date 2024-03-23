"use client";

import useMediaQuery from "@/lib/hooks/useMediaQuery";
import React from "react";
import NavigationLinksDesktop from "./NavigationLinksDesktop";
import NavigationLinksMobile from "./NavigationLinksMobile";

export default function NavigationLinks() {
    const mobile = useMediaQuery(`(max-width: 1024px)`);
    return (
        <>{mobile ? <NavigationLinksMobile /> : <NavigationLinksDesktop />}</>
    );
}
