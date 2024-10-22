import hotelIcon from '../../assets/hotel-icon.png';
import cottageIcon from '../../assets/cottage-icon.png';
import innIcon from '../../assets/inn-icon.png';
import farmIcon from '../../assets/farm-icon.png';
import resortIcon from '../../assets/resort.png';

export function SearchTypes() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 w-full">
        <div className="h-[1px] w-full bg-light_gray"></div>
        <h1 className="text-gray whitespace-nowrap">Tente pesquisar por</h1>
        <div className="h-[1px] w-full bg-light_gray"></div>
      </div>

      <div className="flex justify-around gap-8 mt-5 overflow-auto">
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

        <div className="flex flex-col items-center gap-1">
          <img src={resortIcon} alt="Icon farm" width={30} height={30} />
          <p className="text-sm text-gray">Resorts</p>
        </div>
      </div>
    </div>
  );
}
