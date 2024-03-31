import { TableHead, TableRow, TableHeader, Table } from "@/components/ui/table";
import { Input } from "@nextui-org/react";
import { NoticeType } from "@/lib/constants";
import SelectedPageContext from "./SelectedPageContext";
import NoticeBody from "./NoticeBody";
import Paginate from "./Paginate";

export default function Notice_Page({
    params: { notice_type },
}: {
    params: { notice_type: NoticeType };
}) {
    return (
        <div className="flex flex-col gap-4 min-h-1/2 my-6">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold">
                    Notice:{" "}
                    {decodeURIComponent(
                        notice_type?.[0].replace("-", " ") || ""
                    )}
                </h1>
            </div>
            <SelectedPageContext>
                <Input type="search" label="Search" />
                <div className="border border-foreground-300 rounded-lg shadow overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-8 sm:w-24">
                                    Index
                                </TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Release</TableHead>
                                <TableHead className="w-16 sm:w-[150px] text-center">
                                    Link
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <NoticeBody />
                    </Table>

                    <Paginate />
                </div>
            </SelectedPageContext>
        </div>
    );
}

export const allNotice = [
    {
        index: 1,
        name: "New Features Added",
        date: "2023-08-15",
        link: "#",
    },
    {
        index: 2,
        name: "Security Updates Available",
        date: "2023-08-10",
        link: "#",
    },
    {
        index: 3,
        name: "Productivity Enhancements Released",
        date: "2023-08-05",
        link: "#",
    },
    {
        index: 4,
        name: "Performance Improvements Available",
        date: "2023-08-01",
        link: "#",
    },
    {
        index: 5,
        name: "Bug Fixes and Enhancements Added",
        date: "2023-07-25",
        link: "#",
    },
    // Additional 10 notice cells
    {
        index: 6,
        name: "Feature Enhancements",
        date: "2023-07-20",
        link: "#",
    },
    {
        index: 7,
        name: "Security Patches",
        date: "2023-07-15",
        link: "#",
    },
    {
        index: 8,
        name: "Performance Optimizations",
        date: "2023-07-10",
        link: "#",
    },
    {
        index: 9,
        name: "Bug Fixes",
        date: "2023-07-05",
        link: "#",
    },
    {
        index: 10,
        name: "New Features Introduced",
        date: "2023-07-01",
        link: "#",
    },
    {
        index: 11,
        name: "Security Updates",
        date: "2023-06-25",
        link: "#",
    },
    {
        index: 12,
        name: "Productivity Enhancements",
        date: "2023-06-20",
        link: "#",
    },
    {
        index: 13,
        name: "Performance Improvements",
        date: "2023-06-15",
        link: "#",
    },
    {
        index: 14,
        name: "Bug Fixes and Enhancements",
        date: "2023-06-10",
        link: "#",
    },
    {
        index: 15,
        name: "Feature Enhancements",
        date: "2023-06-05",
        link: "#",
    },
    {
        index: 16,
        name: "Security Patches",
        date: "2023-06-01",
        link: "#",
    },
    {
        index: 17,
        name: "Performance Optimizations",
        date: "2023-05-25",
        link: "#",
    },
    {
        index: 18,
        name: "Bug Fixes",
        date: "2023-05-20",
        link: "#",
    },
    {
        index: 19,
        name: "New Features Introduced",
        date: "2023-05-15",
        link: "#",
    },
    {
        index: 20,
        name: "Security Updates",
        date: "2023-05-10",
        link: "#",
    },
    {
        index: 21,
        name: "Productivity Enhancements",
        date: "2023-05-05",
        link: "#",
    },
    {
        index: 22,
        name: "Performance Improvements",
        date: "2023-05-01",
        link: "#",
    },
    {
        index: 23,
        name: "Bug Fixes and Enhancements",
        date: "2023-04-25",
        link: "#",
    },
    {
        index: 24,
        name: "Feature Enhancements",
        date: "2023-04-20",
        link: "#",
    },
    {
        index: 25,
        name: "Security Patches",
        date: "2023-04-15",
        link: "#",
    },
];

export const noticeCells = allNotice;
