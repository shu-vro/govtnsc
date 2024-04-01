import { Card, CardBody, Chip, Image } from "@nextui-org/react";
import React from "react";
import { teachers } from "../teachers";
import NotFound from "@/app/not-found";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Page({ params }: { params: { teacher: string } }) {
    const teacher = teachers.find(
        t => t.nameEn === decodeURIComponent(params.teacher)
    );

    return !teacher ? (
        <NotFound />
    ) : (
        <Card className="bg-inherit w-96 m-auto" shadow="lg">
            <CardBody>
                <div className="m-auto mb-4">
                    <Image
                        src={teacher.photoURL}
                        alt={teacher.name}
                        className="w-96 h-96 object-cover"
                    />
                </div>
                <h1 className="text-xl font-bold">{teacher.name}</h1>
                <div>
                    <FieldKey>Position:</FieldKey> {teacher.post}
                </div>
                <div>
                    <FieldKey>Phone:</FieldKey>{" "}
                    <Chip color="primary">
                        <Link href={`tel:${teacher.phone_no}`}>
                            {teacher.phone_no}
                        </Link>
                    </Chip>
                </div>
                <div>
                    <FieldKey>Subject:</FieldKey> {teacher.subject}
                </div>
                <div>
                    <FieldKey>Date of Birth:</FieldKey>{" "}
                    <Chip
                        color="primary"
                        as={Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://www.born-today.com/Today/${bornTodayFormat(
                            teacher.birthday
                        )}.htm`}>
                        {teacher.birthday}
                    </Chip>
                </div>
                <div>
                    <FieldKey>Id:</FieldKey> {teacher.id}
                </div>
            </CardBody>
        </Card>
    );
}

function FieldKey({
    className = "",
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return <span className={cn("font-bold", className)}>{children}</span>;
}

function bornTodayFormat(day: string) {
    const arr = day.split("-");
    return `${arr[1]}-${arr[2]}`;
}
