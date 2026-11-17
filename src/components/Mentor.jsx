import { mentores } from "../data/evento";
import CartaoMentor from "./CartaoMentor";

function Mentores() {
    return (
        <section id="mentores" className="bg-mentores px-4 py-16 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Mentores do Evento
                    </h2>
                    <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
                        Especialistas do mercado prontos para guiar e apoiar as equipes durante as 48 horas da maratona.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mentores.map((mentor) => (
                        <CartaoMentor
                            key={mentor.nome}
                            nome={mentor.nome}
                            area={mentor.area}
                            descricao={mentor.descricao}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Mentores;
