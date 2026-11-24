import { useState, useRef, useEffect } from 'react';

function Inscricao() {
    const [email, setEmail] = useState('');
    const [enviado, setEnviado] = useState(false);
    const confirmacaoRef = useRef(null);

    useEffect(() => {
        if (enviado && confirmacaoRef.current) {
            confirmacaoRef.current.focus();
        }
    }, [enviado]);

    function enviar(e) {
        e.preventDefault();
        setEnviado(true);
    }

    if (enviado) {
        return (
            <section
                id="inscricao"
                ref={confirmacaoRef}
                tabIndex={-1}
                className="max-w-4xl mx-auto my-16 px-6 py-14 bg-indigo-950 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 rounded-3xl shadow-2xl text-white text-center"
            >
                <h2 className="text-2xl font-bold text-green-500 mb-3">
                    Inscrição realizada!
                </h2>
                <p className="text-white text-lg" role="status">
                    Pronto! Vamos avisar {email} sobre a próxima edição da GameJam OC.
                </p>
            </section>
        );
    }

    return (
        <section
            id="inscricao"
            className="max-w-4xl mx-auto my-16 px-6 py-14 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 rounded-3xl shadow-2xl text-white text-center"
        >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
                Inscreva-se para receber novidades!
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-100 max-w-2xl mx-auto">
                Cadastre seu e-mail para receber informações sobre a próxima edição da GameJam OC.
                Não perca nenhuma novidade!
            </p>

            <form onSubmit={enviar} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1 text-left">
                    <label htmlFor="email-inscricao" className="block mb-2 font-semibold text-gray-100">
                        E-mail
                    </label>

                    <input
                        id="email-inscricao"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Digite seu melhor e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl bg-white text-gray-900 border-2 border-transparent focus:border-purple-700 transition"
                    />
                </div>

                <button
                    type="submit"
                    className="sm:self-end px-8 py-4 bg-destaque hover:bg-destaque-hover text-white font-bold rounded-xl shadow-lg transition duration-300 cursor-pointer"
                >
                    Quero receber
                </button>
            </form>

            <p className="mt-6 text-sm text-gray-200">
                Fique por dentro de todas as novidades da GameJam OC!
            </p>
        </section>
    );
}

export default Inscricao;