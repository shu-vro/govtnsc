"use client";

import React from "react";
import { TeachersList } from "./TeachersList";
import SelectedPageContext from "../notice/[[...notice_type]]/SelectedPageContext";
import Paginate from "./Paginate";

export default function Page() {
    return (
        <div>
            <h1 className="text-center text-2xl my-4">Teacher&apos;s list</h1>
            <SelectedPageContext>
                <TeachersList />
                <Paginate />
            </SelectedPageContext>
        </div>
    );
}
