import { CardsData } from "@/actions/fetchCardsData";
import Image from "next/image";

const MediumCard = ({ img, title }: CardsData) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="cardImage" fill className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
