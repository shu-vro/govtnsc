"use client";

import { NUMBER_OF_TEACHER_TILES } from "@/lib/constants";
import { ReusablePagination } from "../notice/[[...notice_type]]/Paginate";
import { useSelectedPage } from "../notice/[[...notice_type]]/SelectedPageContext";
import { teachers } from "./teachers";

export default function Paginate() {
    const { page, setPage } = useSelectedPage();
    return (
        <ReusablePagination
            page={page}
            setPage={setPage}
            total={Math.ceil(teachers.length / NUMBER_OF_TEACHER_TILES)}
        />
    );
}
