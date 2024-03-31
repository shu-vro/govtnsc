import { Button, Card, CardBody, Image } from "@nextui-org/react";
import React from "react";
import { college_history_json, college_name } from "@/lib/constants";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import Slides from "./Slides";

export default function History() {
    return (
        <Card
            style={{
                gridArea: "history",
            }}>
            {/* <Image
                src={college_history_json.imageSrc}
                alt={college_history_json.name}
                className="aspect-video float-left"
            /> */}
            <Slides />
            <div className="mx-4 my-2">
                <h1 className="text-3xl my-3">{college_name} কলেজের ইতিহাস</h1>
                <p className="line-clamp-5 text-xl">
                    {college_history_json.message}
                </p>
                <Button
                    className="float-right"
                    as={Link}
                    href={college_history_json.link}
                    color="danger">
                    বিস্তারিত
                </Button>
            </div>
        </Card>
    );
}
