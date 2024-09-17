import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";

import { SearchTypes } from "../../components/SearchTypes/searchtypes";
import { RecomendedDestinations } from "../../components/RecommendedDestinations/recommendedDestinations";
import { SearchTrips } from "../../components/SearchTrips/searchTrips";

export function Home() {
  return (
    <div>
      <Header />

      <main className=" flex flex-col gap-5 p-5">
        <SearchTrips />
        <SearchTypes />
        <RecomendedDestinations />s
      </main>
      <Footer />
    </div>
  );
}
