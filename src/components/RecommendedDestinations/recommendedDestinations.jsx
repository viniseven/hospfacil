import { ItemLocation } from "../ItemLocation/itemlocation";

export function RecomendedDestinations() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="h-[1px] w-full bg-light_gray"></div>
        <h1 className="text-gray whitespace-nowrap">Destinos Recomendados</h1>
        <div className="h-[1px] w-full bg-light_gray"></div>
      </div>

      <div className="flex flex-col mt-4 gap-4">
        <ItemLocation />
        <ItemLocation />
      </div>
    </div>
  );
}
