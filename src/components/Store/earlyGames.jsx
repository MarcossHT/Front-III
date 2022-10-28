export function Store(props) {
    return (
        <li>
            <img src= {props.gameInfo.picture} alt=""/>
            <h2>{props.gameInfo.name}  {props.gameInfo.price} </h2>
            <p>{props.gameInfo.categories.map(i => {
                return (<p>{i}</p>)
            })}
            {props.gameInfo.plataforms.map(p => {
                return(<p>{p}</p>)
            })} </p>
        </li>
    )
}