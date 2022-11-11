import './style.scss'

export function CheckpointCard(props) {

    return (
        <div className="checkpoint-card-component" style={{
            backgroundColor: props.colorData.colorCode
        }}>
            <div className="card-body">
                <h1>{props.colorData.colorCode}</h1>
            </div>
        </div>
    )
}