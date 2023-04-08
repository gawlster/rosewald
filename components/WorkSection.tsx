import Carousel from "./Carousel";
import Image from "next/image";

export default function WorkSection() {
    return (
        <div className="w-full bg-bg-dark py-20 px-10 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-8 max-w-3xl w-full">
                <div className="w-full">
                    <h4 className="text-2xl font-semibold mb-3 pl-2">My featured works</h4>
                    <Carousel gap="12px">
                        <div className="w-56 bg-white h-56 border border-solid border-red" />
                        <div className="w-56 bg-white h-56 border border-solid border-red" />
                        <div className="w-56 bg-white h-56 border border-solid border-red" />
                        <div className="w-56 bg-white h-56 border border-solid border-red" />
                        <div className="w-56 bg-white h-56 border border-solid border-red" />
                        <div className="w-56 bg-white h-56 border border-solid border-red" />
                        <div className="w-56 bg-white h-56 border border-solid border-red" />
                        <div className="w-56 bg-white h-56 border border-solid border-red" />
                        <div className="w-56 bg-white h-56 border border-solid border-red" />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}