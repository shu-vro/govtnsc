"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { noticeCells } from "./page";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { useSelectedPage } from "./SelectedPageContext";
import { NUMBER_OF_ROWS } from "@/lib/constants";

function NoticeCell({
    name,
    date,
    link,
    index,
}: {
    name: string;
    date: string;
    link: string;
    index: number | string;
}) {
    return (
        <TableRow>
            <TableCell className="font-medium">{index}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell className="text-center">
                <Button size="sm" color="primary" as={Link} href={link}>
                    Download
                </Button>
            </TableCell>
        </TableRow>
    );
}

function paginate(
    pageNumber: number = 1,
    array = noticeCells,
    pageSize: number = NUMBER_OF_ROWS
) {
    --pageNumber; // Adjust to 0-based index
    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}

export default function NoticeBody() {
    const { page } = useSelectedPage();
    return (
        <TableBody>
            {paginate(page).map(row => (
                <NoticeCell
                    key={row.index}
                    index={row.index}
                    name={row.name}
                    date={row.date}
                    link={row.link}
                />
            ))}
        </TableBody>
    );
}
