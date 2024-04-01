import HoverWrapper from "@/components/HoverWrapper";
import { Image, Chip, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ITeacher {
    name: string;
    nameEn: string;
    post: string;
    subject: string;
    birthday: string;
    id: string;
    phone_no: string;
    photoURL: string;
    uid: number;
}

export default function TeacherTile({ teacher }: { teacher: ITeacher }) {
    const { push } = useRouter();
    return (
        <HoverWrapper
            classNameInner="!bg-background border-1"
            className="rounded-2xl">
            <Card
                className="bg-inherit w-full"
                isPressable
                onPress={() => {
                    push(`/teachers-list/${teacher.nameEn}`);
                }}
                shadow="lg">
                <CardBody>
                    <div className="m-auto mb-4">
                        <Image
                            src={teacher.photoURL}
                            alt={teacher.name}
                            className="rounded-full w-48 h-48 object-cover"
                        />
                    </div>
                    <h1 className="text-xl font-bold">{teacher.name}</h1>
                    <h3 className="text-sm font-light">{teacher.post}</h3>
                    <div>
                        Phone:{" "}
                        <Chip color="primary">
                            <Link href={`tel:${teacher.phone_no}`}>
                                {teacher.phone_no}
                            </Link>
                        </Chip>
                    </div>
                </CardBody>
            </Card>
        </HoverWrapper>
    );
}
