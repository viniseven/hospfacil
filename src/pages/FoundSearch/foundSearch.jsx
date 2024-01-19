import { Header } from "../../components/Header/header";
import { ItemLocation } from "../../components/ItemLocation/itemlocation";

export function FoundeSearch() {
  return (
    <div>
      <Header />

      <main className="p-5">
        <h1 className="text-black font-semibold text-xl text-center">
          Hospedagens Encontradas
        </h1>
        <p className="text-gray font-medium text-center">
          Listamos os melhores locais para você!
        </p>
        <div className="flex flex-col items-center gap-4 mt-4 w-full max-h-[500px] overflow-y-auto">
          <ItemLocation />
          <ItemLocation />
          <ItemLocation />
          <ItemLocation />
        </div>
      </main>
    </div>
  );
}
