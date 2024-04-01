"use client";

import { Pagination } from "@nextui-org/react";
import React, { useEffect } from "react";
import { noticeCells } from "./page";
import { useSelectedPage } from "./SelectedPageContext";
import { NUMBER_OF_ROWS } from "@/lib/constants";

export default function Paginate() {
    const { page, setPage } = useSelectedPage();
    return (
        <ReusablePagination
            page={page}
            setPage={setPage}
            total={Math.ceil(noticeCells.length / NUMBER_OF_ROWS)}
        />
    );
}

export function ReusablePagination({
    page,
    setPage,
    total,
}: {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    total: number;
}) {
    useEffect(() => {
        setPage(Number(location.hash.slice(1) || 1));
    }, []);

    return (
        <div className="grid place-items-center my-3">
            <Pagination
                page={page}
                total={total}
                onChange={value => {
                    setPage(value);
                    location.hash = value.toString();
                }}
            />
        </div>
    );
}
