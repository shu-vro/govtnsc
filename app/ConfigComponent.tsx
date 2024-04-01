"use client";

import React, { useEffect } from "react";

function mouseOrTouch(e: MouseEvent | TouchEvent) {
    if (e.type.includes("mouse") && e instanceof MouseEvent) {
        return e;
    } else if (e instanceof TouchEvent) {
        return e.touches[0];
    }
    return e;
}

function hoverCard(e: MouseEvent | TouchEvent) {
    for (const card of document.getElementsByClassName(
        "hover-card"
    ) as HTMLCollectionOf<HTMLDivElement>) {
        const rect = card.getBoundingClientRect(),
            x = mouseOrTouch(e).clientX - rect.left,
            y = mouseOrTouch(e).clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
    for (const card of document.getElementsByClassName(
        "fillCardWrapper"
    ) as HTMLCollectionOf<HTMLDivElement>) {
        const rect = card.getBoundingClientRect(),
            x = mouseOrTouch(e).clientX - rect.left,
            y = mouseOrTouch(e).clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
}

export default function ConfigComponent() {
    useEffect(() => {
        for (const card of document.getElementsByClassName(
            "fillCardWrapper"
        ) as HTMLCollectionOf<HTMLDivElement>) {
            const rect = card.getBoundingClientRect();
            const size = Math.hypot(rect.width, rect.height) * 2;

            card.style.setProperty("--size", `${size}px`);
        }

        document.body.onmousemove = hoverCard;
        document.body.ontouchmove = hoverCard;
    }, []);

    return <></>;
}
