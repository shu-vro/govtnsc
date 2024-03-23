import { Button } from "@nextui-org/react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
    NavigationLinks as ENavigationLinks,
    about_us_links,
    notice_links,
    result_links,
} from "@/lib/constants";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ThemeButton } from "@/components/ThemeButton";

const commonLinkClasses =
    "text-lg rounded-md hover:bg-zinc-600/70 px-2 py-1.5 transition-all cursor-pointer block";

export default function NavigationLinksMobile() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button isIconOnly className="mr-8">
                    <HamburgerMenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <ul>
                    {Object.values(ENavigationLinks).map((link, i) => (
                        <li key={i}>
                            {link === ENavigationLinks.about ||
                            link === ENavigationLinks.notice ||
                            link === ENavigationLinks.result ? (
                                <ExpandableLinks
                                    linkName={link}
                                    insides={determineSection(link)}
                                />
                            ) : (
                                <Link
                                    href={link.toLowerCase()}
                                    className={commonLinkClasses}>
                                    {link}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="float-right">
                    <ThemeButton />
                </div>
            </SheetContent>
        </Sheet>
    );
}

function ExpandableLinks({
    linkName,
    insides,
}: {
    linkName: string;
    insides: typeof about_us_links;
}) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="text-lg rounded-md hover:bg-slate-800/70 px-2 py-1.5 transition-all cursor-pointer flex flex-row items-center gap-2">
                    <span>{linkName}</span> <ChevronRightIcon />
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="mb-6">
                    <SheetTitle>{linkName}</SheetTitle>
                </SheetHeader>
                <ul>
                    {insides.map((link, i) => (
                        <li key={i}>
                            <Link
                                href={link.href}
                                className={commonLinkClasses}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </SheetContent>
        </Sheet>
    );
}

function determineSection(name: ENavigationLinks) {
    if (name == ENavigationLinks.about) {
        return about_us_links;
    } else if (name == ENavigationLinks.notice) {
        return notice_links;
    } else {
        return result_links;
    }
}
