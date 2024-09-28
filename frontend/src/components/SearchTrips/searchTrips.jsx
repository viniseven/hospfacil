import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button/button';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { NumericFormat } from 'react-number-format';

export function SearchTrips() {
  return (
    <div className="text-center">
      <h1 className="text-lg font-semibold">
        Encontre sua próxima <span className="text-purple">viagem!</span>
      </h1>

      <div className="flex justify-center flex-wrap gap-3.5 mt-4 md:flex-nowrap">
        <Input type="text" placeholder="Onde você quer ir?" />

        <div className="flex gap-4 md:w-3/4">
          <DatePicker
            placeholderText="Data"
            className="border-light_gray rounded-lg border p-2 w-full"
          />
          <NumericFormat
            className="border-light_gray rounded-lg border p-2 w-full"
            placeholder="Orçamento?"
            allowNegative={false}
            decimalScale={2}
            decimalSeparator=","
            fixedDecimalScale={true}
            prefix="R$ "
            thousandsGroupStyle="mil"
            thousandSeparator="."
          />
        </div>

        <Button
          className="bg-purple hover:bg-dark_purple text-white w-40 p-2 rounded-lg font-semibold "
          title="Pesquisar"
        />
      </div>
    </div>
  );
}
