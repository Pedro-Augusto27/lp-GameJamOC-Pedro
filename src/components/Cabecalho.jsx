function Cabecalho() {
    const links = [
        { nome: 'Hero', href: '#hero' },
        { nome: 'Sobre', href: '#sobre' },
        { nome: 'Mentores', href: '#mentores' },
        { nome: 'Programação', href: '#programacao' },
        { nome: 'Dúvidas', href: '#duvidas' },
    ];

    return (
        <>
            {/*
            <a
                href="#conteudo-principal"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:bg-destaque focus:text-white focus:font-bold focus:rounded-lg focus:shadow-lg"
            >
                Pular para o conteúdo
            </a>
            */}

            <header className="sticky top-0 z-50 bg-cabecalho/95 backdrop-blur-sm border-b border-gray-800 px-4 py-4 text-white">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <a
                        href="#"
                        className="text-2xl md:text-3xl font-extrabold tracking-tight hover:text-emerald-400 transition-colors"
                    >
                        GameJam OC
                    </a>

                    <nav aria-label="Navegação principal" className="flex flex-wrap items-center justify-center gap-6">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-base md:text-lg font-medium text-gray-200 hover:text-emerald-400 transition-colors"
                            >
                                {link.nome}
                            </a>
                        ))}

                        <a
                            href="#inscricao"
                            className="px-5 py-2.5 rounded-lg bg-destaque hover:bg-destaque-hover text-white font-bold text-base md:text-lg transition-colors"
                        >
                            Inscreva-se
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Cabecalho;