import './style.scss'

export function DecimaQuintaAulaItem(props) {

    return(
        <div className="decima-quinta-aula-item">
            <h1>{props.data.bairro}</h1>
            <address>{props.data.logradouro}, {props.data.bairro} -{props.data.localidade},{props.data.uf}</address>
            <small>Cep: {props.data.cep}</small>
            <button onClick={() => props.onDeleteLocation(props.data)}>Deletar</button>
        </div>
    )

}