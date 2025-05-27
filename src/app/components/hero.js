import Image from "next/image";

export function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-60 min-h-screen px-6">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center lg:text-left">
            Olá, prazer,
          </h1>

          <p className="text-2xl sm:text-3xl lg:text-4xl mt-4 text-center lg:text-left">
            Me chamo Wesley Filho e atuo como Desenvolvedor Front End.
          </p>

          <div className="flex flex-row justify-center lg:justify-start gap-6 lg:gap-9 mt-6">
            <a
              href="https://github.com/WesleyFilhoDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white p-2 rounded-2xl hover:scale-110 transition">
                <Image
                  src="/github.png"
                  alt="Logo do GitHub"
                  width={40}
                  height={40}
                />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/wesley-filho-26b8452a6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white p-2 rounded-2xl hover:scale-110 transition">
                <Image
                  src="/linkedin.png"
                  alt="Logo do LinkedIn"
                  width={40}
                  height={40}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
