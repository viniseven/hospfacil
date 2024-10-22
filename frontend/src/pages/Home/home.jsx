import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';

import { SearchTypes } from '../../components/SearchTypes/searchtypes';
import { RecomendedDestinations } from '../../components/RecommendedDestinations/recommendedDestinations';
import { SearchTrips } from '../../components/SearchTrips/searchTrips';

export function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="flex flex-col items-center m-auto gap-5 py-20 px-5 max-w-[1360px]">
        <SearchTrips />
        <SearchTypes />

        <RecomendedDestinations />
      </main>
      <Footer />
    </div>
  );
}
