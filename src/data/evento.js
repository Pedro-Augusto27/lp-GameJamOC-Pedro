// Evento.js - dados do evento e os arrays (programação, atrações, ingressos)

// 1. const do evento(Nome, data, local)
export const evento = {
    nome: 'GameJam de Osvaldo Cruz',
    local: 'Espaço Maker Municipal - Osvaldo Cruz/SP',
    data: '6 a 8 de agosto de 2027 de sexta as 19h a domingo as 19h',
}

// 2. const de lista da programação e de atrações
export const lista = [
    { dia: 'Sex', horario: '19h', atividade: 'Abertura e revelação do tema.' },
    { dia: 'Sex', horario: '20h', atividade: 'Formação das equipes.' },
    { dia: 'Sáb', horario: '10h', atividade: 'Oficina relâmpago de Godot.' },
    { dia: 'Sáb', horario: '15h', atividade: 'Rodada de mentoria com todas as equipes.' },
    { dia: 'Dom', horario: '17h', atividade: 'Entrega dos jogos.' },
    { dia: 'Dom', horario: '18h', atividade: 'Apresentações e premiações.' },
]
    
// 3. const de mentores(Nome, área e descrição)
export const mentores = [
    { nome: 'Ana Ribeiro', area: 'Programação', descricao: 'Desenvolvedora de jogos para celular há oito anos.' },
    { nome: 'Caio Matsuda', area: 'Arte 2D', descricao: 'Ilustrador especializado em pixel art e animação.' },
    { nome: 'Lia Fontes', area: 'Áudio', descricao: 'Compositora de trilhas sonoras para jogos independentes.' },
    { nome: 'Rafael Dias', area: 'Game Design', descricao: 'Criador de jogos de tabuleiro e professor de game design.' },
]