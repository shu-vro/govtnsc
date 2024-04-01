"use client";

import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import HoverWrapper from "@/components/HoverWrapper";

export default function ImportantLinks() {
    return (
        <HoverWrapper
            style={{
                gridArea: "links",
            }}>
            <Card className="rounded-[inherit]">
                <Accordion
                    selectionMode="multiple"
                    variant="shadow"
                    defaultExpandedKeys={["1", "2"]}>
                    <AccordionItem
                        key="1"
                        aria-label="অফিসিয়াল লিঙ্ক"
                        title="অফিসিয়াল লিঙ্ক">
                        <ul className="list-disc list-inside">
                            <ListBoxField
                                title="শিক্ষা মন্ত্রণালয়"
                                href="https://moedu.gov.bd/"
                            />
                            <ListBoxField
                                title="ঢাকা শিক্ষা বোর্ড"
                                href="https://dhakaeducationboard.gov.bd/"
                            />
                            <ListBoxField
                                title="ময়মনসিংহ শিক্ষা বোর্ড"
                                href="https://www.mymensingheducationboard.gov.bd/"
                            />
                            <ListBoxField
                                title="জাতীয় বিশ্ববিদ্যালয়"
                                href="https://www.nu.ac.bd/"
                            />
                        </ul>
                    </AccordionItem>
                    <AccordionItem
                        key="2"
                        aria-label="গুরুত্বপূর্ণ লিংক"
                        title="গুরুত্বপূর্ণ লিংক">
                        <ul className="list-disc list-inside">
                            <ListBoxField
                                title="a2i (Access to Information)"
                                href="https://a2i.gov.bd/"
                            />
                            <ListBoxField
                                title="মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর"
                                href="http://www.dshe.gov.bd/"
                            />
                            <ListBoxField
                                title="শিক্ষা মন্ত্রণালয়"
                                href="https://moedu.gov.bd/"
                            />
                            <ListBoxField
                                title="মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ"
                                href="http://www.shed.gov.bd/"
                            />
                            <ListBoxField
                                title="শেরপুর জেলা"
                                href="http://www.sherpur.gov.bd/"
                            />
                            <ListBoxField
                                title="ময়মনসিংহ বিভাগ"
                                href="http://www.mymensingh.gov.bd/"
                            />
                        </ul>
                    </AccordionItem>
                </Accordion>
            </Card>
        </HoverWrapper>
    );
}

function ListBoxField({ title, href }: { title: string; href: string }) {
    return (
        <li>
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md text-blue-400 hover:text-foreground-900 active:text-foreground-900 py-1.5 transition-all cursor-pointer">
                {title}
                <ExternalLinkIcon className="inline ml-3" />
            </Link>
        </li>
    );
}
