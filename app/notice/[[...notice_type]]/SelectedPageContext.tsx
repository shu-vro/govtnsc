"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext({} as SelectedPageType);

interface SelectedPageType {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export function useSelectedPage() {
    return useContext(Context);
}

export default function SelectedPageContext({
    children,
}: {
    children: React.ReactNode;
}) {
    const [page, setPage] = useState(1);
    return (
        <Context.Provider
            value={{
                page,
                setPage,
            }}>
            {children}
        </Context.Provider>
    );
}

function deepEqual(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) return true;

    if (typeof obj1 !== typeof obj2) return false;

    if (typeof obj1 === "object" && obj1 !== null && obj2 !== null) {
        const obj1Keys = Object.keys(obj1);
        const obj2Keys = Object.keys(obj2);

        if (obj1Keys.length !== obj2Keys.length) return false;

        for (const key of obj1Keys) {
            if (!obj2.hasOwnProperty(key) || !deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        return true;
    }

    return false;
}
