import React from "react";
import { Image } from "@nextui-org/react";
import { college_name, principle_speech_json } from "@/lib/constants";

export default function PrincipleSpeech() {
    return (
        <div className="mx-10">
            <Image
                src={principle_speech_json.imageSrc}
                alt={principle_speech_json.name}
                className="object-cover float-left m-4 mt-0 ml-0"
                width={400}
            />
            <h2 className="text-3xl">{principle_speech_json.name}</h2>
            <small>অধ্যক্ষ, {college_name}</small>
            <p className="text-xl mt-4">{principle_speech_json.message}</p>
        </div>
    );
}
