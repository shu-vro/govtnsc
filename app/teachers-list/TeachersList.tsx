"use client";

import { useSelectedPage } from "../notice/[[...notice_type]]/SelectedPageContext";
import { teachers } from "./teachers";
import TeacherTile from "./TeacherTile";
import { NUMBER_OF_TEACHER_TILES } from "@/lib/constants";

export function paginate(
    pageNumber: number = 1,
    array = teachers,
    pageSize: number = NUMBER_OF_TEACHER_TILES
) {
    --pageNumber; // Adjust to 0-based index
    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}

export function TeachersList() {
    const { page } = useSelectedPage();

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
            {paginate(page).map((teacher, i) => (
                <TeacherTile teacher={teacher} key={teacher.uid} />
            ))}
        </div>
    );
}
