import { Header } from '../../components/Header/header';
import { ItemDetails } from '../../components/ItemDetails/itemDetails';
import { Footer } from '../../components/Footer/footer';

export function Details() {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pb-20">
        <ItemDetails />
      </main>
      <Footer />
    </div>
  );
}
