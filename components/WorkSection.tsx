import Carousel from "./Carousel";
import Image from "next/image";

const NUM_IMAGES_TOTAL = 30;

export default function WorkSection() {
    const allImages = new Array(NUM_IMAGES_TOTAL).fill(0).map((item, i) => (
        <div key={i} className="w-64 h-[342px] sm:w-80 sm:h-[428px] relative">
            <Image priority src={`/sampleImages/sample${i + 1}.jpg`} alt="" layout="fill" objectFit="cover" />
        </div>
    ));

    return (
        <div className="w-full bg-bg-dark py-20 px-10 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center max-w-3xl w-full">
                <h4 className="text-2xl font-semibold mb-6 text-shadow">My featured works</h4>
                <Carousel gap="12px">
                    {allImages}
                </Carousel>
            </div>
        </div>
    )
}