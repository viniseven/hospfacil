import hotelIcon from "../../assets/hotel-icon.png";
import cottageIcon from "../../assets/cottage-icon.png";
import innIcon from "../../assets/inn-icon.png";
import farmIcon from "../../assets/farm-icon.png";

export function SearchTypes() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="h-[1px] w-full bg-light_gray"></div>
        <h1 className="text-gray whitespace-nowrap">Tente pesquisar por</h1>
        <div className="h-[1px] w-full bg-light_gray"></div>
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex flex-col items-center gap-1">
          <img src={hotelIcon} alt="Icon hotel" width={30} height={30} />
          <p className="text-sm text-gray">Hotéis</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img src={cottageIcon} alt="Icon cottage" width={30} height={30} />
          <p className="text-sm text-gray">Chalés</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img src={innIcon} alt="Icon inn" width={30} height={30} />
          <p className="text-sm text-gray">Pousadas</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img src={farmIcon} alt="Icon farm" width={30} height={30} />
          <p className="text-sm text-gray">Fazendas</p>
        </div>
      </div>
    </div>
  );
}
