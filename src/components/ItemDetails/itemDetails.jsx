import { Input } from "../Input/input";
import { Button } from "../Button/button";
import { AboutTrip } from "../AboutTrip/aboutTrip";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import auroraHotel from "../../assets/aurora-hotel.svg";

export function ItemDetails() {
  return (
    <div>
      <div>
        <img src={auroraHotel} alt="Hotel Aurora" className="w-full mb-4" />

        <main className="px-5">
          <div>
            <h1 className="text-xl font-semibold">Hotel Aurora</h1>
            <p className="text-xs text-gray font-medium">
              Rio de Janeiro, Brasil
            </p>
            <p className="text-xs text-gray">
              <span className="text-purple text-xs font-medium">R$250</span> por
              noite
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <div className="flex gap-2">
              <DatePicker
                placeholderText="Data de Início"
                className="border-light_gray rounded-lg border p-2 w-full"
              />
              <DatePicker
                placeholderText="Data Final"
                className="border-light_gray rounded-lg border p-2 w-full"
              />
            </div>
            <Input type="number" placeholder="Hóspedes" />
            <div className="flex justify-between text-sm">
              <p>Total (7 noites)</p>
              <p>R$2.660</p>
            </div>
            <Button
              title="Reservar agora"
              className="bg-purple p-2 rounded-lg text-white text-sm font-semibold"
            />
          </div>

          <div className="h-[1px] bg-light_gray w-full my-10"></div>
          <AboutTrip />
        </main>
      </div>
    </div>
  );
}
