import auroraHotel from "../../assets/aurora-hotel.svg";

export function RecomendedDestinations() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="h-[1px] w-full bg-light_gray"></div>
        <h1 className="text-gray whitespace-nowrap">Destinos Recomendados</h1>
        <div className="h-[1px] w-full bg-light_gray"></div>
      </div>

      <div className="flex flex-col mt-4">
        <img src={auroraHotel} alt="Aurora Hotel" className="rounded-lg mb-2" />
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
    </div>
  );
}
