// Imports 
import { evento } from '../data/evento'

function Rodape() {
    return (
        <footer className="bg-cabecalho px-4 py-10 text-white">
            <p className="mt-4 text-lg text-white ">
                {evento.nome} · {evento.local}
            </p>
            <p className="mt-4 text-lg text-white ">
                Evento fictício criado para fins didáticos.
            </p>
        </footer>
    )
}

export default Rodape;