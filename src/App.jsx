import "./app.css";
import Apropos from "./Pages/About/Apropos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Reservations from "./Pages/Reservations/Reservations";
import Activity from "./Pages/Activity/Activity";
import Localisation from "./Pages/Localisation/Localisation";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="apropos">
          <Apropos />
        </section>
        <section id="localisation">
          <Localisation />
        </section>
        <section id="activity">
          <Activity />
        </section>
        <section id="reservation">
          <Reservations />
        </section>
      </main>
      <Footer />
    </>
  );
}
