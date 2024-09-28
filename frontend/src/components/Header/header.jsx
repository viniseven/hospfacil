import { Button } from "../Button/button";

import { FiUser, FiLogOut } from "react-icons/fi";

import logo from "../../assets/vector.svg";

export function Header() {
  return (
    <div className="p-5 flex justify-between items-center border-b border-light_gray fixed w-full bg-white z-10">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo hospfacil" />
        <p className="text-purple text-xl font-semibold">hospfácil</p>
      </div>

      <div className="flex gap-5">
        <Button icon={FiUser} className="text-purple" />
        <Button icon={FiLogOut} className="text-purple" />
      </div>
    </div>
  );
}
