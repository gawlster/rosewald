import { useEffect, useState } from "react";

export const useWorkPhotos = () => {
    const [fetching, setFetching] = useState(true);
    const [photos, setPhotos] = useState<string[]>([]);
    useEffect(() => {
        fetch("/api/getWorkSectionImages")
            .then((res) => res.json())
            .then((data: { photos: string[] }) => {
                setPhotos(data.photos);
                setFetching(false);
            });
    }, []);
    return { photos, fetching };
};
