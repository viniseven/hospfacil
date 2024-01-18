import { Header } from "../../components/Header/header";

import auroraHotel from "../../assets/aurora-hotel.svg";

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
        <div className=" flex flex-col gap-4 mt-4">
          <img src={auroraHotel} alt="Aurora Hotel" className="rounded-lg" />
          <div>
            <p className="text-black">Hotel Aurora</p>
            <p className="text-xs text-gray font-normal">
              Rio de Janeiro, Brasil
            </p>
            <p className="text-xs text-gray font-normal">
              Pŕoxima data: 13 de julho
            </p>
            <p className="text-xs text-gray font-normal">
              <span className="text-purple font-semibold">R$250</span> por noite
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
