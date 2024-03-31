import React from "react";
import teacher_bg from "@/assets/teacher.png";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { LinkComponent } from "./StudentsLink";
import HoverWrapper from "@/components/HoverWrapper";
// import FillCardWrapper from "@/components/FillCardWrapper";

export default function TeachersLink() {
    return (
        <HoverWrapper
            style={{
                gridArea: "teachers",
            }}>
            <Card className="rounded-3xl  bg-background">
                <CardHeader className="flex-col items-center">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full block"
                        src={teacher_bg.src}
                        width={375}
                    />
                </CardHeader>
                <CardBody className="overflow-visible py-4 px-6">
                    <ul className="list-disc ml-6">
                        <LinkComponent href={"/শিক্ষকগণের-নামের-তালিকা"}>
                            শিক্ষকগণের নামের তালিকা
                        </LinkComponent>
                        <LinkComponent
                            href={
                                "/কর্মরত-শিক্ষক-কর্মকর্তা-ও-কর্মচারীদের-নামের-তালিকা"
                            }>
                            কর্মরত শিক্ষক কর্মকর্তা ও কর্মচারীদের নামের তালিকা
                        </LinkComponent>
                        <LinkComponent href={"/শিক্ষক-সংসদ"}>
                            শিক্ষক সংসদ
                        </LinkComponent>
                        <LinkComponent href={"/অধ্যক্ষগণের তালিকা"}>
                            অধ্যক্ষগণের তালিকা
                        </LinkComponent>
                    </ul>
                </CardBody>
            </Card>
        </HoverWrapper>
    );
}
