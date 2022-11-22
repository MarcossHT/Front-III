import { useState } from 'react'
import { DecimaQuintaAulaItem } from '../../components/DecimaQuintaAulaItem'
import './style.scss'

export function DecimaQuintaAula() {

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')
    const [cepError, setCepError] = useState(false)

    
    
    function searchCep(event) {
        event.preventDefault();

        if(cep.length > 7 && cep.length < 9) {
            setCepError(false)
            setCep('')
            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
                response => {
                    response.json().then(
                        address => {
                            console.log(address)
                            if(address.error !== undefined) {
                                console.log('deu erro')
                            } else {
                                console.log('sucesso')
                                setLocations([...locations, address])
                            }
                        }
                    )
                    
                }
            )
        } else {
            setCepError(true)
        }
    }
        


        function deleteLocation(currentLocation) {
            console.log(currentLocation)

            locations.map((location) => {
                if (location.cep === currentLocation.cep) {
                    setLocations(locations.filter((currentLocation) => location.cep !== currentLocation.cep))
                }
            })
        }
    
        return(
    
            <div className="decima-quarta-aula-component">
    
                <form onSubmit={event => searchCep(event)}>
    
                    <h1>Cadastrar endereços</h1>
    
                    <div>
                        <label>Cep</label>
                        <input
                            type="number"
                            value={cep.trim()}
                            onChange={event => setCep(event.target.value)}
                        />
                        {cepError ? <span>Cep inválido</span> : <span> </span>}
                    <button type="submit">Cadastrar</button>
                    </div>
    
    
                </form>
    
                <section className="locations">
    
                    {
                        locations.map(
                            (location, index) => {
                                return (
                                    <DecimaQuintaAulaItem
                                        key={index}
                                        data={location}
                                        onDeleteLocation={currentLocation => deleteLocation(currentLocation)}
                                    />
                                )
                            }
                        )
                    }
    
                </section>
    
            </div>
    
        )
    }


    
        

    

