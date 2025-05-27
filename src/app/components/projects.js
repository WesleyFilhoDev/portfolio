import { ProjectCard } from "./projectcard";

export function Projects() {
  return (
    <section id="projects">
      <div className="container min-h-screen px-6 py-12">
        <div className="flex justify-center mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold">PROJETOS</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <ProjectCard
            link="https://www.qualicontcariri.com.br/"
            image="/qualicont.png"
            title="QUALICONT CARIRI"
            description="Site da empresa de contabilidade QualiCont Cariri, feito com NextJS."
          />

          <ProjectCard
            link="https://site-fanta-blond.vercel.app/"
            image="/fanta.png"
            title="SITE DA FANTA"
            description="Projeto de página do refrigerante Fanta, feito com HTML, CSS e JavaScript."
          />

          <ProjectCard
            link="https://pet-dev-three.vercel.app/"
            image="/petdev.png"
            title="PET DEV"
            description="Projeto de página de um pet shop fictício, feito com NextJS."
          />
        </div>
      </div>
    </section>
  );
}
