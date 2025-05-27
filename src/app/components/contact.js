import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ContactCard } from "./contactcard";

export function Contact() {
  return (
    <section id="contact">
      <div className="container min-h-screen px-6 py-12">
        {/* Título */}
        <div className="flex justify-center mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            VAMOS CONVERSAR?
          </h1>
        </div>

        {/* Subtítulo */}
        <div className="flex justify-center mt-4">
          <p className="text-lg sm:text-xl lg:text-2xl text-center max-w-2xl text-white">
            Bora tirar aquela ideia do papel, trocar conhecimento ou só bater um
            papo mesmo. 😉
          </p>
        </div>

        {/* Cards de contato */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
          <ContactCard
            icon={FaWhatsapp}
            iconColor="text-green-500"
            title="WhatsApp"
            description="Me chama no WhatsApp! Respondo rapidinho."
            link="https://wa.me/5588994947226"
            linkLabel="Abrir WhatsApp"
          />
          <ContactCard
            icon={FaInstagram}
            iconColor="text-pink-500"
            title="Instagram"
            description="Crio conteúdo para o Instagram, me segue lá!."
            link="https://instagram.com/wesleyfilho.dev"
            linkLabel="Acessar Instagram"
          />
          <ContactCard
            icon={FaEnvelope}
            iconColor="text-blue-500"
            title="Email"
            description="Prefere email? Me manda sua ideia ou dúvida."
            link="mailto:wesleyfilho221204@gmail.com"
            linkLabel="Enviar Email"
          />
        </div>

        {/* Rodapé */}
        <div className="flex justify-center mt-20">
          <p className="text-1xl text-white text-center">
            Valeu por chegar até aqui! 💙 Bora construir algo incrível juntos.
          </p>
        </div>
      </div>
    </section>
  );
}
