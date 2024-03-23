import { useState, useEffect } from "react";

export default function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const documentChangeHandler = () => setMatches(mediaQueryList.matches);

        mediaQueryList.addListener(documentChangeHandler);
        documentChangeHandler();

        return () => {
            mediaQueryList.removeListener(documentChangeHandler);
        };
    }, [query]);

    return matches;
}
