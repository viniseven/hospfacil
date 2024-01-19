import { Header } from "../../components/Header/header";
import { ItemDetails } from "../../components/ItemDetails/itemDetails";
import { Footer } from "../../components/Footer/footer";

export function Details() {
  return (
    <div>
      <Header />

      <main>
        <ItemDetails />
      </main>
      <Footer />
    </div>
  );
}
