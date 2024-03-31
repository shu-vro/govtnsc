import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import HoverWrapper from "../HoverWrapper";

export default function PrincipleComment({
    name,
    position,
    message,
    link,
    imageSrc,
}: {
    name: string;
    position: string;
    message: string;
    link: string;
    imageSrc: string;
}) {
    return (
        <HoverWrapper
            style={{
                gridArea: "principal",
            }}>
            <Card className="py-4 rounded-[inherit]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl m-auto block"
                        width={350}
                        src={imageSrc}
                    />
                </CardHeader>
                <CardBody className="overflow-visible px-6">
                    <h4 className="font-bold text-large">{name}</h4>
                    <small className="text-default-500">{position}</small>
                    <p className="text-foreground-600 line-clamp-5 mb-4 max-w-[350px]">
                        {message}
                    </p>
                    <Button as={Link} href={link} color="danger">
                        বিস্তারিত
                    </Button>
                </CardBody>
            </Card>
        </HoverWrapper>
    );
}
