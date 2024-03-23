"use client";

import React, { useEffect } from "react";

export default function ConfigComponent() {
    useEffect(() => {
        for (const card of document.getElementsByClassName(
            "fillCardWrapper"
        ) as HTMLCollectionOf<HTMLDivElement>) {
            const rect = card.getBoundingClientRect();
            const size = Math.hypot(rect.width, rect.height) * 2;

            card.style.setProperty("--size", `${size}px`);
        }

        document.body.onmousemove = e => {
            for (const card of document.getElementsByClassName(
                "hover-card"
            ) as HTMLCollectionOf<HTMLDivElement>) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
            for (const card of document.getElementsByClassName(
                "fillCardWrapper"
            ) as HTMLCollectionOf<HTMLDivElement>) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };
    }, []);

    return <></>;
}
