import './style.scss'
import { useState } from 'react'
import { CheckpointCard } from '../../components/CheckpointCard'

export function Checkpoint() {

    const [allColors, setAllColors] = useState([])
    const [colorCode, setColorCode] = useState('')
    const [verifyInput, setVerifyInput] = useState(false)

    function addNewColor(event) {
        event.preventDefault()
        const newColor = {
            colorCode: colorCode
        }
        
        if(colorCode === '') {
            setVerifyInput(true)
        } else {
            setAllColors([...allColors, newColor])
            setColorCode('')
            setVerifyInput(false)
        }
        
        
    }

    return (
        <main className="checkpoint-component">
            <div className="tittle-wrapper">
                <h1>Cores Hexadecimais</h1>
            </div>

            <form>
                <div>
                    <label htmlFor="">Cor</label>
                    <input className={verifyInput ? "input-error": ""} placeholder={verifyInput ? "Coloque uma cor válida" : ""} 
                    id="nomeCor" type="text" value={colorCode} onChange={event => setColorCode(event.target.value)}></input>
                </div>

                <button type="submit" onClick={event => addNewColor(event)}>Inserir nova cor</button>
            </form>

            <section className="checkpoint">
                {allColors.map(
                    color => {
                        return (
                            <CheckpointCard
                                colorData={color}
                            />
                        )
                    }
                )}
            </section>
        </main>
    )
}