import { lista } from '../data/evento';
import CartaoProgramacao from './CartaoProgramacao';

function Programacao() {
    return (
        <section id="programacao" className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-gray-900">
                Programação do Evento:
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                {lista.map((item, index) => (
                    <CartaoProgramacao
                        key={index}
                        dia={item.dia}
                        horario={item.horario}
                        atividade={item.atividade}
                    />
                ))}
            </div>
        </section>
    )
}

export default Programacao;