// Imports dos componentes de seção:
import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Programacao from './components/Programacao';
import Mentor from './components/Mentor';
import Inscricao from './components/Inscricao';
import Rodape from './components/Rodape';

function App() {
  return (
    <>
        {/* Cabeçalho */}
        <Cabecalho />
        <main className="bg-fundoMain">
          {/* Hero, Sobre, Programação, Atrações, Inscrições */}
          <Hero />
          <Sobre />
          <Mentor />
          <Programacao />
          <Inscricao />
        </main>
      {/* Rodape */}
      <Rodape />
    </>
  )
}

export default App;
