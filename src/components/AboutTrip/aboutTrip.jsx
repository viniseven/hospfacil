import checkIcon from "../../assets/check.svg";

export function AboutTrip() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2 className="font-semibold">Sobre a Viagem</h2>
        <p className="text-xs font-normal text-justify">
          Venha e fique neste soberbo T2 duplex, no coração do centro histórico
          de Bordéus. Espaçosos e luminosos, num verdadeiro edifício de pedra
          exposta de Bordéus, poderá desfrutar de todos os encantos da cidade
          graças à sua localização ideal. Perto de muitas lojas, bares e
          restaurantes, você pode acessar o apartamento de bonde A e C e linhas
          de ônibus 27 e 44.
        </p>
      </div>

      <div className="mb-5">
        <h2 className="font-semibold">Destaques</h2>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex gap-1 items-center">
            <img src={checkIcon} alt="Icon check" />
            <p className="text-xs text-gray">Café da manhã incluso</p>
          </div>

          <div className="flex gap-1 items-center">
            <img src={checkIcon} alt="Icon check" />
            <p className="text-xs text-gray">Festas ao ar livre</p>
          </div>

          <div className="flex gap-1 items-center">
            <img src={checkIcon} alt="Icon check" />
            <p className="text-xs text-gray">Wi-fi gratuito</p>
          </div>

          <div className="flex gap-1 items-center">
            <img src={checkIcon} alt="Icon check" />
            <p className="text-xs text-gray">Natureza</p>
          </div>
        </div>
      </div>
    </div>
  );
}
