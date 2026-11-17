import { evento } from '../data/evento';

function Sobre() {
    return (
        <section id="sobre" className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-gray-900">
                Sobre a {evento.nome}:
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                    Na <strong>GameJam OC</strong>, equipes de até quatro pessoas criam um jogo do zero em 48 horas, a
                    partir de um tema revelado na abertura. Não precisa saber programar: artistas, músicos e roteiristas
                    também fazem falta numa equipe. Mentores ficam disponíveis o tempo todo, e os jogos terminados
                    são publicados na página do evento.
                </p>

                <p className="mb-4">
                    48 horas · 30 equipes · 4 mentores
                </p>
            </div>
        </section>
    );
}

export default Sobre;
