import { useEffect, useRef } from "react";

const dados = [
  // 3 itens do seu evento, ex.: ingressos vendidos por tipo, inscritos por percurso...
  { rotulo: "Ingressos vendidos", valor: 120 },
  { rotulo: "Inscritos", valor: 80 },
  { rotulo: "Participantes", valor: 45 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Limpa o canvas para evitar sobreposição em re-renderizações
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maior = Math.max(...dados.map((d) => d.valor));
    ctx.textBaseline = "middle";

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 200; // a maior barra tem 200px
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior

      // 1. Cor da barra (roxo do tema da GameJam)
      ctx.fillStyle = "#7c3aed";

      // 2. Desenha a barra com cantos arredondados (ou retângulo normal)
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(125, y, largura, 28, 6);
        ctx.fill();
      } else {
        ctx.fillRect(125, y, largura, 28);
      }

      // 3. Escreve o rótulo à esquerda
      ctx.fillStyle = "#374151";
      ctx.font = "500 13px system-ui, sans-serif";
      ctx.fillText(item.rotulo, 10, y + 14);

      // 4. Escreve o valor logo depois do fim da barra
      ctx.fillStyle = "#111827";
      ctx.font = "bold 13px system-ui, sans-serif";
      ctx.fillText(item.valor.toString(), 125 + largura + 8, y + 14);
    });
  }, []);

  return (
    <section className="px-4 py-16 max-w-4xl mx-auto flex flex-col items-center">
      {/* Título e descrição centralizados no topo */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Estatísticas do Evento
        </h2>
        <p className="mt-2 text-gray-600 text-base md:text-lg">
          Acompanhe os números de engajamento da GameJam OC.
        </p>
      </div>

      {/* Card com o canvas centralizado */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 flex justify-center max-w-full overflow-x-auto">
        <canvas
          ref={canvasRef}
          width={400}
          height={170}
          role="img"
          aria-label="Gráfico de estatísticas: 120 ingressos vendidos, 80 inscritos e 45 participantes."
          className="max-w-full"
        />
      </div>
    </section>
  );
}

export default Grafico;
