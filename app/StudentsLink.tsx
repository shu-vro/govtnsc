import React from "react";
import student_bg from "@/assets/student.png";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Link, { LinkProps } from "next/link";
import HoverWrapper from "@/components/HoverWrapper";

export default function StudentsLink() {
    return (
        <>
            <HoverWrapper
                style={{
                    gridArea: "students",
                }}>
                <Card
                    className="grid-flow-row rounded-[inherit]"
                    style={{
                        gridArea: "students",
                    }}>
                    <CardHeader className="flex-col items-center">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl w-full block"
                            src={student_bg.src}
                            width={375}
                        />
                    </CardHeader>
                    <CardBody className="overflow-visible py-4 px-6">
                        <ul className="list-disc ml-6">
                            <LinkComponent href={"/ডিগ্রী-রেজাল্ট"}>
                                ডিগ্রী / অনার্স রেজাল্ট
                            </LinkComponent>
                            <LinkComponent href={"/এইচএসসি-রেজাল্ট"}>
                                এইচএসসি রেজাল্ট
                            </LinkComponent>
                            <LinkComponent href={"/এইচএসসি-বিএমটি-রেজাল্ট"}>
                                এইচএসসি (বিএমটি) রেজাল্ট
                            </LinkComponent>
                            <LinkComponent href={"/কলেজ-রেজাল্ট"}>
                                কলেজ রেজাল্ট
                            </LinkComponent>
                            <LinkComponent
                                href={"/শিক্ষার্থীদের-জন্য-নিয়ম-কানুন"}>
                                শিক্ষার্থীদের জন্য নিয়ম-কানুন
                            </LinkComponent>
                            <LinkComponent href={"https://studentsheba.com/"}>
                                Student Sheba
                            </LinkComponent>
                        </ul>
                    </CardBody>
                </Card>
            </HoverWrapper>
        </>
    );
}
type LinkComponentProps = React.PropsWithChildren<LinkProps>;

// Use React.forwardRef to create a type-safe LinkComponent that can accept a ref.
export const LinkComponent = React.forwardRef<
    HTMLAnchorElement,
    LinkComponentProps
>(({ children, ...props }, ref) => {
    return (
        <li className="hover:text-blue-600 transition-all">
            <Link {...props} passHref legacyBehavior ref={ref}>
                {children}
            </Link>
        </li>
    );
});
LinkComponent.displayName = "LinkComponent";
