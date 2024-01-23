import Image from "next/image";
import { packages } from "../data";

export default function PackagesSection() {
  return (
    <div className="w-full px-10 py-20 bg-bg-mid flex flex-col justify-center items-center">
      <h1 className="mb-6 text-2xl font-semibold text-shadow">Packages</h1>
      <div className="flex gap-2 flex-col justify-center items-center sm:flex-row w-full">
        <div className="flex flex-col gap-2 w-full sm:w-auto sm:justify-end sm:items-end justify-center items-center">
          <Package {...packages[0]} />
          <Package {...packages[1]} />
        </div>
        <div className="flex flex-col gap-2 w-full sm:w-auto sm:justify-start sm:items-start justify-center items-center">
          <Package {...packages[2]} />
          <Package {...packages[3]} />
        </div>
      </div>
    </div>
  );
}

function Package({
  size,
  title,
  description,
  imagePath,
}: {
  size: "lg" | "sm";
  title: string;
  description: string;
  imagePath: string;
}) {
  return (
    <div
      className={`booking-square ${size === "lg" ? "md:w-80 md:h-80 sm:w-60 sm:h-60" : "md:w-56 md:h-56 sm:w-44 sm:h-44"} w-11/12 aspect-square rounded-md relative overflow-hidden transition-all`}
    >
      <div className="booking-square--image absolute inset-0 transition-all">
        <div className="w-full h-full relative">
          <Image src={imagePath} alt="" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="booking-square--overlay absolute inset-0 flex flex-col justify-end px-2 py-4 gap-2 opacity-0 transition-all pointer-events-none backdrop-blur-sm bg-bg-dark bg-opacity-40">
        <h3 className="text-xl font-semibold text-shadow">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
