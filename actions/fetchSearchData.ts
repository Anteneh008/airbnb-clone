"use server";

export interface SearchData {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long?: number;
  lat?: number;
}

const fetchSearchData = async (): Promise<SearchData[]> => {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");


  if (!res.ok) {
    throw new Error("Failed to fetch search data");
  }

  const searchData: SearchData[] = await res.json();
  return searchData;
};

export default fetchSearchData;
