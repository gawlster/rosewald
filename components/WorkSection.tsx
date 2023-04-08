import Carousel from "./Carousel";
import Image from "next/image";

const NUM_IMAGES_TOTAL = 31;

export const getHeightOfSampleFromWidth = (w: number) => {
    return Math.round(w * (880 / 658));
}

export default function WorkSection() {
    const allImages = new Array(NUM_IMAGES_TOTAL).fill(0).map((item, i) => (
        <div key={i} className={`w-80 h-[${getHeightOfSampleFromWidth(320)}px] overflow-hidden relative`}>
            <Image src={`/sampleImages/sample${i + 1}.jpg`} alt="" width="320px" height={`${getHeightOfSampleFromWidth(320)}px`} />
        </div>
    ));

    return (
        <div className="w-full bg-bg-dark py-20 px-10 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center max-w-3xl w-full">
                <h4 className="text-2xl font-semibold mb-6">My featured works</h4>
                <Carousel gap="12px">
                    {allImages}
                </Carousel>
            </div>
        </div>
    )
}