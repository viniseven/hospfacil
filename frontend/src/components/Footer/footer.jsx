import logo from "../../assets/vector.svg";

export function Footer() {
  return (
    <div className="bg-walter_white p-5">
      <div className="flex items-center justify-center gap-1">
        <img src={logo} alt="Logo hospifacil" width={21} />
        <p className="text-purple text-sm font-semibold">hospfácil</p>
      </div>
      <p className="text-center text-xs font-medium">
        Todos os direitos reservados
      </p>
    </div>
  );
}
