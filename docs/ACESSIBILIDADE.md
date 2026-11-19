# Relatório de acessibilidade

## Antes
- Nota do Lighthouse (mobile): 95

- Problemas apontados pelo Lighthouse:
    - As cores de plano de fundo e de primeiro plano não têm uma taxa de contraste suficiente.

- Problemas apontados pelo axe:
    - Os elementos devem atender a um limite mínimo de proporção de contraste de cores.
    - Garanta que o contraste entre as cores de primeiro plano e de fundo atenda aos limites mínimos de proporção de contraste estabelecidos pelas diretrizes WCAG 2, nível AA.

- Problemas encontrados no teste do teclado:
    - Com o `Tab`: Funciona perfeitamente, mas não seleciona apenas as coisas do site, mas fora dele.
    - Com `Shift + Tab`: Funciona igual ao Tab.
    - Com `Enter`: Nada aconteceu.

## Depois
- Nota do Lighthouse (mobile): 78
- O que foi corrigido: 
    1. Foi alterado alguns arquivos que foram alterados como:
        - Cabeçalho.jsx
        - Hero.jsx
        - Inscricao.jsx

    2. O que foi corrigido:
        - Paleta de contraste no `@theme`;
        - Foco visível global;
        - Preferência de movimento e rolagem;
        - Pular para o conteúdo;
        - Link para dúvidas e contraste;
        - Contraste sobre imagem;
        - Botão e zoom de 200%
        - Validação estrutural;

- O que ainda não está bom (e por quê):
    1. Alterar o contraste entre as cores para que fique melhor para visualização, pois sinto que ainda tem que melhorar.
    
    2. O tamanho dos botões dentro de palavras, pois ao mesmo tempo que está visivel, parece ainda pequeno.

## Um problema que a ferramenta NÃO apontou e eu encontrei
 - A ferramenta me falou todos os erros.