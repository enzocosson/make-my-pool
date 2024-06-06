import Header from "@/components/Header/Header";
import Couverture from "./Couverture/Couverture";
import Spec from "./Spec/Spec";
import { Footer } from "@/components/Footer/Footer";

export default async function Home() {
  return (
    <div>
      <Header />
      <Couverture />
      <Spec />
      <Footer />
    </div>
  );
}
