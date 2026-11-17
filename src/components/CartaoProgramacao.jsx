function CartaoProgramacao({dia, horario, atividade}) {
    return (
        <article className="flex flex-col md:flex-row items-start md:items-center mb-4">
            <h3 className="text-xl font-bold">{dia}</h3>
            <p className="ml-4">{horario} - {atividade}</p>
        </article>
    )
}

export default CartaoProgramacao;