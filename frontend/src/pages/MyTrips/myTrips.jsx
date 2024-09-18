import { Header } from '../../components/Header/header';
import { Button } from '../../components/Button/button';

import auroraHotel from '../../assets/aurora-hotel.svg';

export function MyTrips() {
  return (
    <div>
      <Header />

      <main className="flex flex-col gap-5 px-5 py-5">
        <h1 className="text-xl font-semibold mb-5">Minhas Viagens</h1>

        <div className="flex flex-col gap-5 p-5 border border-light_gray rounded-xl shadow-[0_6px_16px_0_rgba(0,0,0,0.12)] ">
          <div className="flex gap-5 items-center">
            <img
              src={auroraHotel}
              alt="Hotel Aurora"
              className="w-32 rounded-xl"
            />
            <div>
              <h2 className="font-semibold">Hotel Aurora</h2>
              <p className="text-xs text-gray font-medium">
                Rio de Janeiro, Brasil
              </p>
            </div>
          </div>

          <div className="h-[1px] w-full bg-light_gray"></div>

          <div className="flex flex-col gap-5">
            <h2 className="text-sm font-semibold">Sobre a viagem</h2>

            <div className="text-sm font-normal">
              <p>Data</p>
              <p>19-27 de julho.</p>
            </div>

            <div className="text-sm font-normal">
              <p>Hóspedes</p>
              <p>8 hóspedes</p>
            </div>
          </div>

          <div className="h-[1px] w-full bg-light_gray"></div>

          <div>
            <h2 className="text-sm font-semibold">Informações do pagamento</h2>

            <div className="flex justify-between mt-4 text-sm">
              <p>Total</p>
              <p className="font-semibold">R$3.390</p>
            </div>
          </div>

          <Button
            title="Cancelar"
            className="border border-red rounded-lg p-2 text-red text-sm font-semibold hover:bg-red hover:text-white"
          />
        </div>
      </main>
    </div>
  );
}
