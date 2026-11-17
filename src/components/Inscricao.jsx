import { useState } from 'react'

function Inscricao() {
    const [email, setEmail] = useState('')
    const [enviado, setEnviado] = useState(false)

    function enviar(e) {
        e.preventDefault()
        setEnviado(true)
    }

    if (enviado) {
        return (
            <section id="inscricao" className="max-w-4xl mx-auto my-16 px-6 py-12 bg-green-50 border border-green-200 rounded-2xl text-center shadow-lg">
                <h2 className="text-2xl font-bold text-green-700 mb-3">
                    Inscrição realizada!
                </h2>
                <p className="text-gray-700 text-lg" role="status">
                    Pronto! Vamos avisar {email} sobre a próxima feira.
                </p>
            </section>
        )
    }

    return (
        <section id="inscricao" className="max-w-4xl mx-auto my-16 px-6 py-14 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 rounded-3xl shadow-2xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
                Inscreva-se para receber novidades!
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-200 max-w-2xl mx-auto">
                Cadastre seu e-mail para receber informações sobre a próxima edição da GameJam OC.
                Não perca nenhuma novidade!
            </p>

            <form onSubmit={enviar} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">

                <label className="flex-1 text-left">
                    <span className="block mb-2 font-semibold text-gray-200">
                        E-mail
                    </span>

                    <input
                        type="email"
                        required
                        placeholder="Digite seu melhor e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl bg-white text-gray-900 border-2 border-transparent outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/30 transition"
                    />
                </label>

                <button
                    type="submit"
                    className="sm:self-end px-8 py-4 bg-purple-500 hover:bg-purple-400 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition duration-300"
                >
                    Quero receber
                </button>
            </form>

            <p className="mt-6 text-sm text-gray-300">
                Fique por dentro de todas as novidades da GameJam OC!
            </p>
        </section>
    )
}

export default Inscricao
