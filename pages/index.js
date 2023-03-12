import Link from "next/link";
//Header - Firs Content
import Header from "../components/Header-component";

//CTA: Call to action
import Welcome from "../components/Welcome-component";
import AboutMe from "../components/AboutMe-component";

//Contenido
import Services from "../components/Services-component";
import Clients from "../components/Clients-component";
import Certifications from "../components/Certifications-component";
import Career from "../components/Career-component";
import Values from "../components/Values-component";

//Footer de sitio (ultimos en cargar)
import Footer from "../components/Foooter-component";

export default function IndexPage() {
  return (
    /**Importamos el componente welcome */

    <div>
      <div>
        <Header />
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <AboutMe />
      </div>

      <div>
        <Services />
      </div>

      <div>
        <Clients />
      </div>

      <div>
        <Certifications />
      </div>

      <div>
        <Career />
      </div>

      <div>
        <Values />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
