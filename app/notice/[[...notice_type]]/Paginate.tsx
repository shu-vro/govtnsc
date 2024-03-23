/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Pagination } from "@nextui-org/react";
import React, { useEffect } from "react";
import { noticeCells } from "./page";
import { useSelectedPage } from "./SelectedPageContext";
import { NUMBER_OF_ROWS } from "@/lib/constants";

export default function Paginate() {
    const { page, setPage } = useSelectedPage();
    useEffect(() => {
        setPage(Number(location.hash.slice(1) || 1));
    }, []);

    return (
        <div className="grid place-items-center">
            <Pagination
                page={page}
                total={Math.ceil(noticeCells.length / NUMBER_OF_ROWS)}
                onChange={value => {
                    setPage(value);
                    location.hash = value.toString();
                }}
            />
        </div>
    );
}
