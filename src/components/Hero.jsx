import imagemHero from '../assets/gamejam.jpg';
import { evento } from '../data/evento';
import BotaoLembrete from './BotaoLembrete';

function Hero() {
    return (
        <section
            id="hero"
            className="relative bg-gray-900 bg-cover bg-top bg-no-repeat mx-auto px-4 py-24 md:py-40 text-white min-h-[500px] flex items-center"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.85)), url(${imagemHero})`
            }}
        >
            <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-md">
                    {evento.nome}
                </h1>
                <p className="mt-2 text-lg md:text-2xl text-gray-100 drop-shadow-sm">
                    Em 48 horas, um tema surpresa e o seu primeiro jogo publicado.
                </p>
                <p className="mt-5 text-lg md:text-xl text-gray-100 drop-shadow-sm">
                    {evento.local} nos dias {evento.data}.
                </p>

                <div className="mt-8">
                    <a
                        href="#inscricao"
                        className="inline-block px-8 py-4 bg-destaque hover:bg-destaque-hover text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300"
                    >
                        Quero me inscrever
                    </a>
                    
                    <BotaoLembrete />
                </div>
            </div>
        </section>
    );
}

export default Hero;


