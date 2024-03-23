import { cn } from "@/lib/utils";
import React from "react";

export type HoverWrapperProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

export default function FillCardWrapper({
    children,
    className = "",
    style = {},
}: HoverWrapperProps) {
    return (
        <div className="fillCardWrapper" style={style}>
            {children}
        </div>
    );
}
