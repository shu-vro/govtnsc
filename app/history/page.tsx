import { college_history_json, college_name } from "@/lib/constants";
import { Image } from "@nextui-org/react";
import React from "react";

export default function Page() {
    return (
        <div className="mx-10">
            <Image
                src={college_history_json.imageSrc}
                alt={college_history_json.name}
                className="object-cover float-left m-3 ml-0"
                width={700}
            />
            <h1 className="text-3xl my-2">{college_name}</h1>
            <h2 className="text-2xl">{college_history_json.name}</h2>
            <p className="text-xl mt-4">{college_history_json.message}</p>
        </div>
    );
}
