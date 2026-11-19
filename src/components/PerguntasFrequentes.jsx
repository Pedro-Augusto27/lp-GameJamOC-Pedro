import { useState } from 'react';

const perguntas = [
    {
        id: 'faq-programar',
        pergunta: 'Preciso saber programar para participar da GameJam OC?',
        resposta:
            'Não! As equipes precisam de artistas visuais, músicos, designers de som, roteiristas e game designers. Você pode contribuir na área em que tiver mais afinidade.',
    },
    {
        id: 'faq-equipe',
        pergunta: 'Quantas pessoas podem formar uma equipe?',
        resposta:
            'As equipes podem ter de 1 até 4 participantes. Se você ainda não tem grupo, ajudamos a formar times na abertura do evento.',
    },
    {
        id: 'faq-tema',
        pergunta: 'Quando o tema dos jogos será revelado?',
        resposta:
            'O tema é surpresa e será revelado oficialmente na cerimônia de abertura, marcando o início das 48 horas de desenvolvimento.',
    },
    {
        id: 'faq-mentoria',
        pergunta: 'Haverá ajuda durante as 48 horas?',
        resposta:
            'Sim. Contamos com 4 mentores disponíveis durante todo o evento para tirar dúvidas técnicas, de design e de escopo do projeto.',
    },
];

function ItemFaq({ item }) {
    const [aberta, setAberta] = useState(false);
    const idResposta = `resposta-${item.id}`;

    return (
        <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
            <h3>
                <button
                    type="button"
                    aria-expanded={aberta}
                    aria-controls={idResposta}
                    onClick={() => setAberta((estadoAnterior) => !estadoAnterior)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-lg font-bold text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    <span>{item.pergunta}</span>
                    <span aria-hidden="true" className="text-purple-700 text-2xl leading-none">
                        {aberta ? '−' : '+'}
                    </span>
                </button>
            </h3>

            <div
                id={idResposta}
                hidden={!aberta}
                className="px-6 pb-5 pt-1 text-base leading-relaxed text-gray-700 border-t border-gray-100"
            >
                <p>{item.resposta}</p>
            </div>
        </div>
    );
}

function PerguntasFrequentes() {
    return (
        <section id="duvidas" className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-gray-900">
                Perguntas frequentes
            </h2>
            <p className="text-center text-lg text-gray-700 mb-10">
                Tire suas principais dúvidas sobre como funciona a maratona.
            </p>

            <div className="space-y-4">
                {perguntas.map((item) => (
                    <ItemFaq key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}

export default PerguntasFrequentes;