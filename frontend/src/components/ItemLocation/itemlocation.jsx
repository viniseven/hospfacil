import auroraHotel from "../../assets/aurora-hotel.svg";

export function ItemLocation() {
  return (
    <div className="flex flex-col w-full">
      <img src={auroraHotel} alt="Aurora Hotel" className="rounded-lg mb-2" />
      <div>
        <p className="text-black">Hotel Aurora</p>
        <p className="text-xs text-gray font-normal">Rio de Janeiro, Brasil</p>
        <p className="text-xs text-gray font-normal">
          Pŕoxima data: 13 de julho
        </p>
        <p className="text-xs text-gray font-normal">
          <span className="text-purple font-semibold">R$250</span> por noite
        </p>
      </div>
    </div>
  );
}
