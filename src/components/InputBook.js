function Inputbook () {
    return (
        <div className="divWrapper">
            <h1 className="title">Encontre o seu Livro</h1>
            <div>
            <input className="txtBusca" type="text" placeholder="Autor, Livro..."/>
            <button className="btnBusca">Pesquisar</button>
            </div>
        </div>
    )
}

export default Inputbook;