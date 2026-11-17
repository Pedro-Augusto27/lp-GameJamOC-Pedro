function CartaoMentor({ nome, area, descricao }) {
    return (
        <article className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-100 hover:-translate-y-1 text-gray-800">
            <div>
                {/* Nome do Mentor */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {nome}
                </h3>

                 {/* Badge da Área de atuação */}
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
                    {area}
                </span>

                {/* Descrição */}
                <p className="text-sm text-gray-600 leading-relaxed">
                    {descricao}
                </p>
            </div>
        </article>
    );
}

export default CartaoMentor;
