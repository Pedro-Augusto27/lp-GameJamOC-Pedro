import imagemHero from '../assets/gamejam.jpg';
import { evento } from '../data/evento';

function Hero() {
    return (
        <section id="hero" className="relative bg-cover bg-top bg-no-repeat mx-auto px-4 py-64 text-white min-h-[500px] flex items-center"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${imagemHero})`
            }}
        >
            {/* Container para alinhar o texto e garantir que ele fique legível */}
            <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-md">
                    {evento.nome}
                </h1>
                <p className="mt-2 text-lg md:text-2xl text-gray-200 drop-shadow-sm">
                    Em 48 horas, um tema surpresa e o seu primeiro jogo publicado.
                </p>
                <p className="mt-5 text-lg md:text-xl text-gray-200 drop-shadow-sm">
                    {evento.local} nos dias {evento.data}.
                </p>

                {/* Botão para rolar até a seção de Inscrição */}
                <div className="mt-8">
                    <a
                        href="#inscricao"
                        className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg rounded-xl shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300"
                    >
                        Quero me inscrever
                    </a>
                </div>
            </div>
            
        </section>
    );
}

export default Hero;


