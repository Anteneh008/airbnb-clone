import { ExploreData } from "@/actions/fetchExploreData";
import Image from "next/image";

const SmallCard = ({ img, location, distance }: ExploreData) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} fill alt="images" className="rounded-lg" />
      </div>
      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
