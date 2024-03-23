import principal_image from "@/assets/principal.jpg";

export enum NavigationLinks {
    home = "হোম পেজ",
    about = "আমাদের সম্পর্কে",
    notice = "Notice",
    result = "রেজাল্ট",
    campus = "Campus",
    routine = "Routine",
    contact = "Contact",
}

export const about_us_links = [
    {
        title: "আমাদের প্রত্যাশা ও পদক্ষেপ",
        href: "/আমাদের-প্রত্যাশা-ও-পদক্ষেপ",
        description: "",
    },
    {
        title: "অবকাঠামো",
        href: "/অবকাঠামো",
        description: "",
    },
    {
        title: "কর্মরত শিক্ষক কর্মকর্তা ও কর্মচারীদের নামের তালিকা",
        href: "/কর্মরত-শিক্ষক-কর্মকর্তা-ও-কর্মচারীদের-নামের-তালিকা",
        description: "",
    },
    {
        title: "শিক্ষার্থীদের জন্য নিয়ম-কানুন",
        href: "/শিক্ষার্থীদের-জন্য-নিয়ম-কানুন",
        description: "",
    },
    {
        title: "শিক্ষক সংসদ",
        href: "/শিক্ষক-সংসদ",
        description: "",
    },
    {
        title: "কলেজের ইতিহাস",
        href: "/কলেজের-ইতিহাস",
        description: "",
    },
    {
        title: "সুবিধা",
        href: "/সুবিধা",
        description: "",
    },
];

export const notice_links = [
    {
        title: "কলেজ নোটিশ",
        href: "/notice/কলেজ-নোটিশ",
        description:
            "Stay updated with the latest announcements and notices from colleges.",
    },
    {
        title: "এইচ এস সি নোটিশ",
        href: "/notice/এইচ-এস-সি-নোটিশ",
        description:
            "Receive notifications regarding HSC (Higher Secondary Certificate) information, results, seat plans, and more.",
    },
    {
        title: "NU নোটিশ",
        href: "/notice/NU-নোটিশ",
        description:
            "Access National University notices and announcements through this platform.",
    },
];

export type NoticeType = "কলেজ-নোটিশ" | "এইচ-এস-সি-নোটিশ" | "NU-নোটিশ";

export const result_links = [
    {
        title: "কলেজ রেজাল্ট",
        href: "/কলেজ-রেজাল্ট",
        description: "কলেজের সেমিস্টার রেজাল্ট পোর্টাল",
    },
    {
        title: "এইচ এস সি রেজাল্ট",
        href: "/এইচ-এস-সি-রেজাল্ট",
        description: "অত্র বৎসরের এইচ এস সি রেজাল্ট",
    },
    {
        title: "ডিগ্রি / অনার্স রেজাল্ট",
        href: "/ডিগ্রি-রেজাল্ট",
        description: "National University result page",
    },
];

export const principle_speech_json = {
    name: "প্রফেসর মোঃ আবদুর রউফ",
    position: "অধ্যক্ষ",
    imageSrc: principal_image.src,
    message:
        "অধ্যক্ষের পরিচিতি,প্রফেসর মোঃ আবদুর রউফ (আইডি নং-০০০০৭৬৯৮) অধ্যক্ষ,সরকারি নাজমুল স্মৃতি কলেজ, শিক্ষাগত যোগ্যতাঃ আলিম-১ম বিভাগ-১৯৮৩ (এসএসসি সমমান), ফাজিল-১ম বিভাগ-১৯৮৫ (এইচএসসি সমমান), বিবিএস সম্মান-২য় শ্রেণি-১৯৮৮, এমবিএস (ব্যবস্থাপনা)-২য় শ্রেণি-১৯৮৯, ইসলামী বিশ্ববিদ্যালয়। ১৪’শ বিসিএস (সাধারণ শিক্ষা) এর মাধ্যমে ২০/১১/১৯৯৩ইং তারিখে সরকারি কিয়ামত উল্লাহ কলেজ, বকশীগঞ্জ, জামালপুর এ তাঁর কর্ম জীবন শুরু হয়। পরবর্তীতে পদোন্নতি পেয়ে সরকারি আযিযুল হক কলেজ, বগুড়া ও সরকারি আনন্দ মোহন কলেজ, ময়মনসিংহ এবং শেরপুর সরকারি কলেজে ব্যবস্থপনা বিভাগে কর্মরত ছিলেন। তিনি বিগত ০১/০১/২০২০ইং তারিখ থেকে সরকারি নাজমুল স্মৃতি কলেজে অধ্যক্ষ হিসেবে কর্মরত আছেন। নায়েমে বুনিয়াদী প্রশিক্ষণ ও এ সি ই এম কোর্স, চট্টগ্রাম বিশ্ববিদ্যালয়ে সামার সায়েন্স কোর্স, জাতীয় বিশ্ববিদ্যালয়ে উচ্চতর প্রশিক্ষণ কোর্স, ঢাকা টিটি কলেজে সৃজনশীল মাস্টার ট্রেইনার কোর্সের প্রশিক্ষণ গ্রহণ করেন। তিনি ব্যবসায় সংগঠন ও ব্যবস্থাপনা ১ম ও ২য় পত্র বইয়ের একজন প্রণেতা। জাতীয় শিক্ষাসপ্তাহ-২০২২ এ উপজেলা ও জেলা পর্যায়ে শ্রেষ্ঠ অধ্যক্ষ (কলেজ) নির্বাচিত হন। জাতীয় শিক্ষাসপ্তাহ-২০২৩ এ উপজেলা পর্যায়ে, জেলা পর্যায়ে এবং ময়মনসিংহ বিভাগে শ্রেষ্ঠ অধ্যক্ষ (কলেজ) নির্বাচিত হন।",
    link: "/speech/principal",
};

export const NUMBER_OF_ROWS = 10;
