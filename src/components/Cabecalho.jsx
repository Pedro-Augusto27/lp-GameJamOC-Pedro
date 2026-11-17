function Cabecalho() {
    const links = [
        { nome: 'Hero', href: '#hero' },
        { nome: 'Sobre', href: '#sobre' },
        { nome: 'Mentores', href: '#mentores' },
        { nome: 'Programação', href: '#programacao' },
    ]

    return (
        <header className="sticky top-0 z-50 bg-cabecalho/95 backdrop-blur-sm border-b border-gray-800 px-4 py-4 text-white">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Logo / Título volta para o topo */}
                <a href="#" className="text-2xl md:text-3xl font-extrabold tracking-tight hover:text-emerald-400 transition-colors">
                    GameJam OC
                </a>

                {/* Links de navegação */}
                <nav aria-label="Navegação principal" className="flex flex-wrap items-center justify-center gap-6">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm md:text-base font-medium text-gray-300 hover:text-emerald-400 transition-colors"
                        >
                            {link.nome}
                        </a>
                    ))}

                    <a
                        href="#inscricao"
                        className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-sm md:text-base transition-colors"
                    >
                        Inscreva-se
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Cabecalho