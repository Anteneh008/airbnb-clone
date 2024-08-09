"use server"
export interface ExploreData {
    img: string;
    location: string;
    distance: string;
  }
  
  export async function fetchExploreData(): Promise<ExploreData[]> {
    const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const exploreData: ExploreData[] = await res.json();
    return exploreData;
  }
  