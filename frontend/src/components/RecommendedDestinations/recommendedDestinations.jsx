import { ItemLocation } from '../ItemLocation/itemlocation';

export function RecomendedDestinations() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center gap-2 w-full">
        <div className="h-[1px] w-full bg-light_gray"></div>
        <h1 className="text-gray whitespace-nowrap">Destinos Recomendados</h1>
        <div className="h-[1px] w-full bg-light_gray"></div>
      </div>

<<<<<<< HEAD
      <div className="flex flex-col md:grid grid-cols-3 lg:grid-cols-4 items-center mt-4 gap-4 w-full">
        <ItemLocation />
        <ItemLocation />
        <ItemLocation />
        <ItemLocation />
        <ItemLocation />
        <ItemLocation />
        <ItemLocation />
        <ItemLocation />
        <ItemLocation />
=======
      <div className="grid items-center mt-4 gap-4 w-full md:grid-cols-3">
>>>>>>> dfadf4468b718eb5b213906dd967a84b09b18581
        <ItemLocation />
        <ItemLocation />
        <ItemLocation />
        <ItemLocation />
      </div>
    </div>
  );
}
