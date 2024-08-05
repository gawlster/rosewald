import Image from "next/image";
import { useWorkPhotos } from "../hooks/useWorkPhotos";
import Carousel from "./Carousel";

export default function WorkSection() {
    const { photos, fetching } = useWorkPhotos();

    const allImages = (
        <>
            {!fetching &&
                photos.map((photo, i) => (
                    <div key={i} className="w-64 sm:w-80 h-full relative">
                        <Image
                            priority={i <= 4}
                            src={photo}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ))}
        </>
    );

    return (
        <div className="w-full bg-bg-dark py-20 px-10 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center max-w-3xl w-full">
                <h4 className="text-2xl font-semibold mb-6 text-shadow">My featured works</h4>
                <div className="h-[342px] sm:h-[428px] w-full">
                    <Carousel gap="12px">{allImages}</Carousel>
                </div>
            </div>
        </div>
    );
}
