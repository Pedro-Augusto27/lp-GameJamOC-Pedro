# PWA e Canvas — guia e atividade

**PEND — Programação Front-End · Individual, na sua landing page**

Hoje são dois assuntos em uma aula só. A ideia é **conhecer e ver funcionando**: três exercícios curtos, na landing page que você fez. Leia cada parte com calma antes de escrever o código.

---

## Parte 1 — PWA (Progressive Web App)

### O que é

Um **PWA** é um site comum que ganha três poderes de aplicativo:

| Poder                      | O que acontece                                                                                                                             | Quem faz                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| **Instalar**               | Aparece um botão "Instalar"; o site ganha ícone na área de trabalho ou na tela do celular e abre em janela própria, sem barra do navegador | **Manifest**                                    |
| **Funcionar sem internet** | A página abre mesmo offline, com o que ficou guardado                                                                                      | **Service Worker** + **Cache**                  |
| **Mandar notificação**     | Aviso que aparece fora do navegador, no sistema operacional                                                                                | **Notification API** (e Push API, com servidor) |

Exemplos que vocês usam: Twitter/X, Spotify Web, Google Maps no navegador, Starbucks.

### As duas peças

- **Manifest** (`manifest.webmanifest`): um arquivo JSON com o nome, as cores e o ícone do aplicativo.
- **Service Worker** (`sw.js`): um JavaScript que roda **por trás** da página, no meio do caminho entre a página e a internet. Ele decide: buscar na rede ou entregar do cache?

> PWA só funciona em **`https`** ou em **`localhost`**. Por isso, em servidor de verdade, precisa de certificado.

### Exercício 1 — sua landing page instalável e offline

**1. Ícones.** Copie `icone-192.png` e `icone-512.png` (o professor distribui) para a pasta `public/` do seu projeto.

**2. Manifest.** Crie `public/manifest.webmanifest`. Troque o nome e as cores pelos do seu evento:

```json
{
  "name": "Nome do seu evento",
  "short_name": "Nome curto",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1d4ed8",
  "icons": [
    { "src": "/icone-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icone-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

`"display": "standalone"` é o que faz abrir em janela própria, sem a barra do navegador.

**3. Ligar o manifest à página.** No `index.html`, dentro do `<head>`:

```html
<link rel="manifest" href="/manifest.webmanifest" />
<meta name="theme-color" content="#1d4ed8" />
```

**4. Service Worker.** Crie `public/sw.js`:

```js
const CACHE = "lp-v1";

// Instalação: guarda a página inicial no cache
self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(["/", "/index.html"])),
  );
});

// Toda requisição: tenta a rede; se não tiver internet, usa o cache
self.addEventListener("fetch", (evento) => {
  if (evento.request.method !== "GET") return;
  evento.respondWith(
    fetch(evento.request)
      .then((resposta) => {
        const copia = resposta.clone();
        caches.open(CACHE).then((cache) => cache.put(evento.request, copia));
        return resposta;
      })
      .catch(() => caches.match(evento.request)),
  );
});
```

Leia os comentários: **com internet**, ele busca na rede e guarda uma cópia; **sem internet**, entrega a cópia guardada.

**5. Registrar o Service Worker.** No final do `src/main.jsx`:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}
```

**6. Testar na versão de produção.** O Service Worker se comporta melhor no build do que no `npm run dev`:

```bash
npm run build
npm run preview
```

Abra o endereço que aparecer (normalmente `http://localhost:4173`) e confira:

- [ ] `F12` → **Application** → **Manifest**: aparece o nome e o ícone, sem erros
- [ ] `F12` → **Application** → **Service Workers**: o `sw.js` aparece como _activated_
- [ ] Aparece o ícone de **instalar** na barra de endereço. Instale e veja abrir em janela própria
- [ ] `F12` → **Network** → marque **Offline** → recarregue (`F5`): a página continua abrindo

### Exercício 2 — botão "Me lembre do evento" com notificação

Agora a sua landing page vai mandar uma **notificação de verdade**, que aparece no canto da tela do Windows (ou na barra do celular), fora do navegador.

São três passos no código:

1. **Pedir permissão** ao usuário: `Notification.requestPermission()` devolve `'granted'` (permitiu), `'denied'` (negou) ou `'default'` (fechou sem responder).
2. **Esperar o Service Worker ficar pronto**: `navigator.serviceWorker.ready`.
3. **Mostrar a notificação pelo Service Worker**: `registro.showNotification(titulo, { body, icon })`.

> Por que pelo Service Worker, e não com `new Notification(...)`? Porque no celular só funciona assim, e é o mesmo caminho que um servidor usaria para mandar avisos com o site fechado (a Push API).

Crie `src/components/BotaoLembrete.jsx` e complete os comentários:

```jsx
import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    // 1. Se o navegador não tiver 'Notification' em window,
    //    mostre a mensagem "Este navegador não aceita notificações." e pare (return)
    // 2. Peça a permissão e guarde a resposta numa constante
    //    (lembre: requestPermission devolve uma Promise, use await)
    // 3. Se a resposta for diferente de 'granted',
    //    mostre "Você não permitiu as notificações." e pare
    // 4. Espere o Service Worker ficar pronto e guarde em 'registro'
    // 5. Mostre a notificação com registro.showNotification(...)
    //    título: nome do seu evento
    //    body: uma frase de lembrete
    //    icon: '/icone-192.png'
    // 6. Mostre na tela a mensagem "Lembrete ativado!"
  }

  return (
    <div className="mt-6">
      <button type="button" onClick={ativarLembrete} className="...">
        Me lembre do evento
      </button>
      {mensagem && (
        <p role="status" className="mt-2">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
```

Coloque o `<BotaoLembrete />` no seu `Hero`, logo abaixo do botão de ingresso, e estilize com Tailwind.

Teste com `npm run build` e `npm run preview`:

- [ ] Ao clicar, o navegador pergunta se você permite notificações
- [ ] Permitindo, a notificação aparece **fora** do navegador, com o ícone
- [ ] A mensagem "Lembrete ativado!" aparece na página
- [ ] Negando (clique no cadeado da barra de endereço → Notificações → Bloquear, e recarregue), aparece a mensagem de que você não permitiu

> Não apareceu nada? Confira se as notificações do Chrome estão liberadas no Windows (Configurações → Sistema → Notificações) e se o modo "Não perturbe" está desligado.

---

## Parte 2 — Canvas

### O que é

O `<canvas>` é uma **área de desenho** dentro da página. Em vez de montar a tela com tags, você desenha com JavaScript: retângulos, linhas, círculos, texto. É assim que funcionam gráficos, jogos de navegador e editores de imagem.

```
(0,0) ──────────► x
  │
  │      O ponto (0,0) fica no canto
  │      superior ESQUERDO.
  ▼      y cresce para BAIXO.
  y
```

Os comandos principais do contexto 2D:

| Comando                               | O que faz                      |
| ------------------------------------- | ------------------------------ |
| `ctx.fillStyle = '#cor'`              | escolhe a cor do preenchimento |
| `ctx.fillRect(x, y, largura, altura)` | desenha um retângulo cheio     |
| `ctx.font = '14px sans-serif'`        | escolhe a fonte                |
| `ctx.fillText('texto', x, y)`         | escreve um texto               |
| `ctx.clearRect(0, 0, w, h)`           | apaga tudo                     |

### Canvas no React

O React não "desenha" no canvas; quem desenha é o JavaScript. Por isso usamos dois recursos:

- **`useRef`** para pegar o elemento `<canvas>` de verdade;
- **`useEffect`** para desenhar **depois** que o canvas já apareceu na tela.

### Exercício 3 — gráfico de barras na landing page

Crie `src/components/Grafico.jsx` com este esqueleto e **complete o desenho**:

```jsx
import { useEffect, useRef } from "react";

const dados = [
  // 3 itens do seu evento, ex.: ingressos vendidos por tipo, inscritos por percurso...
  { rotulo: "Item A", valor: 120 },
  { rotulo: "Item B", valor: 80 },
  { rotulo: "Item C", valor: 45 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const maior = Math.max(...dados.map((d) => d.valor));

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220; // a maior barra tem 220px
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior

      // 1. escolha a cor da barra (use a cor do seu evento)
      // 2. desenhe a barra com fillRect, começando em x = 110
      // 3. troque a cor para escuro e escreva o rótulo em x = 10
      // 4. escreva o valor logo depois do fim da barra
    });
  }, []);

  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl font-bold">Título do gráfico</h2>
      <canvas
        ref={canvasRef}
        width={380}
        height={170}
        role="img"
        aria-label="Descreva aqui o que o gráfico mostra, com os números"
        className="mt-6 max-w-full"
      />
    </section>
  );
}

export default Grafico;
```

Importe o componente no `App.jsx`, antes da seção de inscrição.

- [ ] As três barras aparecem, com tamanhos proporcionais aos valores
- [ ] Rótulo à esquerda e valor depois de cada barra
- [ ] `aria-label` descrevendo o gráfico (o leitor de tela não enxerga o desenho — lembra da aula de acessibilidade?)

**Desafio:** mude um valor no array e veja o gráfico se redesenhar com novas proporções.

---

## Entrega

- [ ] Commit `"PWA: manifest e service worker"`
- [ ] Commit `"PWA: notificação de lembrete"`
- [ ] Commit `"Canvas: gráfico de barras"`
- [ ] `push` para o seu GitHub

## Ticket de saída

1. Quais são as duas peças que transformam um site em PWA, e o que cada uma faz?
2. O que acontece no seu botão de lembrete se o usuário negar a permissão?
3. Por que o desenho do canvas fica dentro de um `useEffect`?
