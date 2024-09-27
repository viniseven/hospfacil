import { ItemLocation } from "../ItemLocation/itemlocation";

export function RecomendedDestinations() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center gap-2 w-full">
        <div className="h-[1px] w-full bg-light_gray"></div>
        <h1 className="text-gray whitespace-nowrap">Destinos Recomendados</h1>
        <div className="h-[1px] w-full bg-light_gray"></div>
      </div>

      <div className="flex flex-col items-center mt-4 gap-4 w-full">
        <ItemLocation />
        <ItemLocation />
        <ItemLocation />
        <ItemLocation />
      </div>
    </div>
  );
}
