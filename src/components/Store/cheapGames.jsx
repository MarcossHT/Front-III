export function StoreCheap(props) {
    return (
        <li>
            <img src= {props.gameInfo.picture} alt=""/>
            <h2>{props.gameInfo.name} {props.gameInfo.oldPrice} {props.gameInfo.newPrice}</h2>
            <p>{props.gameInfo.categories.map(i => {
                return (<p>{i}</p>)
            })}
           </p>
        </li>
    )
}