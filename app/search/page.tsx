import fetchSearchData, { SearchData } from "@/actions/fetchSearchData";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import Maps from "@/components/Maps";
import { format } from "date-fns";

interface SearchProps {
  searchParams: {
    location: string;
    startDate: string;
    endDate: string;
    noOfGuests: string;
  };
}

const Search = async ({ searchParams }: SearchProps) => {
  const { location, startDate, endDate, noOfGuests } = searchParams;

  const searchResults: SearchData[] = await fetchSearchData();

  // Safely handle potential null values
  const formattedStartDate = startDate
    ? format(new Date(startDate), "dd MMMM yy")
    : "Unknown Start Date";

  const formattedEndDate = endDate
    ? format(new Date(endDate), "dd MMMM yy")
    : "Unknown End Date";

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-6 mb-6">
            Satys in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text=gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button ">Price</p>
            <p className="button ">Rooms and Beds</p>
            <p className="button ">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Maps searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
