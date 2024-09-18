import { Header } from '../../components/Header/header';
import { ItemLocation } from '../../components/ItemLocation/itemlocation';
import { Footer } from '../../components/Footer/footer';

export function FoundSearch() {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pb-20">
        <h1 className="text-black font-semibold text-xl text-center">
          Hospedagens Encontradas
        </h1>
        <p className="text-gray font-medium text-center">
          Listamos os melhores locais para você!
        </p>
        <div className="flex flex-col items-center gap-4 mt-4 w-full">
          <ItemLocation />
          <ItemLocation />
          <ItemLocation />
          <ItemLocation />
        </div>
      </main>
      <Footer />
    </div>
  );
}
