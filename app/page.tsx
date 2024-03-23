import { NoticePanel } from "@/components/notice-panel";
import PrincipleComment from "@/components/ui/principle-comment";
import { principle_speech_json } from "@/lib/constants";
import TeachersLink from "./TeachersLink";
import StudentsLink from "./StudentsLink";
import LocationTab from "./LocationTab";
import ImportantLinks from "./ImportantLinks";

export default function Home() {
    return (
        <div className="grid justify-stretch items-start gap-4 layout-grid">
            <NoticePanel />
            <PrincipleComment {...principle_speech_json} />
            <TeachersLink />
            <StudentsLink />
            <LocationTab />
            <ImportantLinks />
        </div>
    );
}
