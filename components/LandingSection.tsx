import Image from "next/image";
import mail from "./svgs/mail.svg"
import facebook from "./svgs/facebook.svg";
import instagram from "./svgs/instagram.svg";

export default function LandingSection({ contactSectionRef }: { contactSectionRef: React.RefObject<HTMLDivElement> }) {
    return (
        <div
            className="w-full bg-bg-dark px-6 py-20 flex flex-col gap-4 justify-center items-center"
            style={{ height: "calc(100vh * 0.8)", maxHeight: "850px", minHeight: "450px" }}
        >
            <Image src="/logo.png" alt="" height="203px" width="150px" />
            <h1 className="pink-glow text-2xl font-bold uppercase text-center">Rosewald Studios</h1>
            <div>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <hr
                        style={{
                            background: "white",
                            color: "white",
                            height: "1px",
                            width: "40px",
                        }}
                    />
                    <a href="https://m.facebook.com/Calgary.Portrait.Photographer" target="_blank" rel="noreferrer"
                        className="hover:text-c-green transition-all cursor-pointer text-white leading-none">
                        <Image src={facebook} alt="" width="20px" height="20px" />
                    </a>
                    <a
                        href="https://www.instagram.com/rosewald._.studios"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-c-green transition-all cursor-pointer text-white leading-none">
                        <Image src={instagram} alt="" width="20px" height="20px" />
                    </a>
                    <a onClick={() => contactSectionRef.current?.scrollIntoView({ behavior: "smooth" })}
                        className="hover:text-c-green transition-all cursor-pointer text-white leading-none">
                        <Image src={mail} alt="" width="20px" height="20px" />
                    </a>
                    <hr
                        style={{
                            background: "white",
                            color: "white",
                            height: "1px",
                            width: "40px",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}