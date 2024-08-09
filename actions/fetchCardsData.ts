"use server";

export interface CardsData {
  img: string;
  title: string;
}

const fetchCardsData = async (): Promise<CardsData[]> => {
  const res = await fetch("https://www.jsonkeeper.com/b/VHHT");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const cardsData: CardsData[] = await res.json();
  return cardsData;
};

export default fetchCardsData;
