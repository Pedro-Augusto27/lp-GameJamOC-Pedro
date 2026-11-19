import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Programacao from './components/Programacao';
import Mentor from './components/Mentor';
import PerguntasFrequentes from './components/PerguntasFrequentes';
import Inscricao from './components/Inscricao';
import Rodape from './components/Rodape';

function App() {
  return (
    <>
      <Cabecalho />
      <main id="conteudo-principal" tabIndex={-1} className="bg-fundoMain outline-none">
        <Hero />
        <Sobre />
        <Mentor />
        <Programacao />
        <Inscricao />
        <PerguntasFrequentes />
      </main>
      <Rodape />
    </>
  );
}

export default App;