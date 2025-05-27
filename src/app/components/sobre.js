export function Sobre() {
  return (
    <section id="sobre">
      <div className="container min-h-screen px-6 py-12">
        <div className="flex justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold">SOBRE</h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-28 mt-10">
          <p className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left max-w-xl">
            Que bom ter você aqui!
            <br /> <br />
            Tenho 20 anos, sou um pernambucano crescido no Ceará, hoje graduando
            em Sistemas para Internet pela Universidade Católica de Pernambuco
            (UNICAP).
            <br />
            <br />
            Sou apaixonado por tecnologia, atualmente atuo como Desenvolvedor
            Front-End.
            <br />
            Conheça alguns de meus projetos clicando{" "}
            <a className="text-blue-500 hover:text-blue-700" href="#projects">
              aqui
            </a>
            .
          </p>

          <div className="relative w-[250px] sm:w-[300px] h-[400px] sm:h-[500px] flex flex-col">
            {/* Efeito da borda */}
            <div className="absolute inset-7 rounded-3xl border-10 border-transparent bg-gradient-to-r from-blue-500 via-white to-blue-700 animate-spin-slow blur-sm"></div>

            {/* Foto */}
            <div className="relative rounded-3xl overflow-hidden bg-white border-4 border-blue-500 shadow-lg">
              <img
                src="/minhafoto.jpg"
                alt="Imagem de Wesley Filho"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
