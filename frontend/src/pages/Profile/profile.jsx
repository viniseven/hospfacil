import { Button } from "../../components/Button/button";
import { Footer } from "../../components/Footer/footer";

import profile from "../../assets/profile.png";
import auroraHotel from "../../assets/aurora.png";

import { FiArrowLeft } from "react-icons/fi";

export function Profile() {
  return (
    <div>
      <main className="flex flex-col gap-5 px-5 py-5">
        <Button icon={FiArrowLeft} className="text-purple" />
        <div className="flex items-center">
          <img
            src={profile}
            alt="Profile Photo"
            className="rounded-full w-20 h-auto"
          />
          <div>
            <h1 className="text-2xl">Fernanda Souza</h1>
            <p className="text-xs text-gray my-1">
              Email: marcusv892@gmail.com
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Última viagem</h1>
          <div className="flex border-light_gray rounded-lg border p-2 w-full">
            <img
              src={auroraHotel}
              alt="Image Location"
              className="w-20 rounded-md"
            />
            <div className="mx-4">
              <h2>Hotel Aurora</h2>
              <p>Rio Maria, Pará</p>
              <p className="text-xs mt-4 text-gray">
                Data da compra: 15/09/2024
              </p>
            </div>
          </div>
        </div>

        <Button
          className="bg-purple hover:bg-dark_purple text-white w-full p-2 rounded-lg font-semibold "
          title="Alterar senha"
        />

        <Button
          className="bg-purple hover:bg-dark_purple text-white w-full p-2 rounded-lg font-semibold "
          title="Sair"
        />
      </main>
      <Footer />
    </div>
  );
}
