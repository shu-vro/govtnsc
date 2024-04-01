import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    Card,
} from "@/components/ui/card";
import {
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TableBody,
    Table,
} from "@/components/ui/table";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export function NoticePanel() {
    return (
        <Card
            className="border-teal-100/70 w-full"
            style={{
                gridArea: "notice",
            }}>
            <CardHeader className="pb-0">
                <CardTitle>Notice Board</CardTitle>
                <CardDescription>Quick links for notice.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-12">Index</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Release Date</TableHead>
                                <TableHead className="text-right">
                                    Link
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <NoticeCell
                                index={1}
                                name="New Features Added"
                                date="2023-08-15"
                                link="#"
                            />
                            <NoticeCell
                                index={2}
                                name="Security Updates Available"
                                date="2023-08-10"
                                link="#"
                            />
                            <NoticeCell
                                index={3}
                                name="Productivity Enhancements Released"
                                date="2023-08-05"
                                link="#"
                            />
                            <NoticeCell
                                index={4}
                                name="Performance Improvements Available"
                                date="2023-08-01"
                                link="#"
                            />
                            <NoticeCell
                                index={5}
                                name="Bug Fixes and Enhancements Added"
                                date="2023-07-25"
                                link="#"
                            />
                        </TableBody>
                    </Table>
                </div>
                <div className="grid place-items-center">
                    <Button
                        as={Link}
                        href="/notice"
                        color="primary"
                        className="my-4">
                        View All
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

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
        <TableRow className="text-sm">
            <TableCell className="w-12">{index}</TableCell>
            <TableCell className="font-medium">{name}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell className="text-right">
                <Button color="primary" size="sm" as={Link} href={link}>
                    Download
                </Button>
            </TableCell>
        </TableRow>
    );
}
