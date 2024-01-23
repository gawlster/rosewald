import { useCallback, useState } from "react";
import { packages } from "../data";

type ZeroTo3 = 0 | 1 | 2 | 3;

export default function BookingSection() {
  const [activeIndex, setActiveIndex] = useState<ZeroTo3>(0);

  const handleClick = useCallback((i: ZeroTo3) => {
    setActiveIndex(i);
  }, []);

  return (
    <div className="w-full px-10 py-20 bg-bg-dark flex flex-col justify-center items-center">
      <h1 className="mb-6 text-2xl font-semibold text-shadow">Book a time</h1>
      <div className="flex gap-2 flex-col justify-center items-center sm:flex-row w-full">
        {Object.keys(packages).map((i) => (
          <div onClick={() => handleClick(Number(i) as ZeroTo3)}>
            <PackageOption key={i} active={Number(i) === activeIndex} />
          </div>
        ))}
      </div>
    </div>
  );
}

const PackageOption: React.FC<{
  active?: boolean;
}> = ({ active }) => {
  return (
    <div className={`border h-80 ${active ? "w-80" : "w-10"}`}>
      <p className={`${active ? "" : "-rotate-90"}`}>Option</p>
    </div>
  );
};
