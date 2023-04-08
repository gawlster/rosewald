import Image from "next/image"

export default function AboutSection() {
    return <div className="w-full bg-bg-mid px-8 py-20 flex justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center gap-6 w-full max-w-xl">
            <Image src="/kal.jpg" alt="" width="250px" height="388px" />
            <p>
                Hey! My name is{" "}
                <span className="green-glow font-bold">Kaleigh Johnston</span>, I
                am a young adult and I specialize in portrait photography. My work is
                based in Calgary, Alberta. I love the art of photography, so I dabble a
                bit in all areas and enjoy learning more every day.
            </p>
            <p>
                My goal is to help you achieve the look you want while also creating a{" "}
                <span className="pink-glow font-bold">comfortable</span> and{" "}
                <span className="pink-glow font-bold">welcoming</span>{" "}
                environment you&apos;ll love being in. I believe every picture tells a
                million stories and I&apos;d be thrilled to help you write yours! I hope
                to work with you soon!
            </p>
        </div>
    </div>
}