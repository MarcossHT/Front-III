import { useState } from 'react'
import { SetimaAulaCardProduto } from '../../components/SetimaAulaCardProduto'
import './style.scss'

export function OitavaAula() {
    
    const [nomeProduto, setNomeProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState('')
    const [fotoProduto, setFotoProduto] = useState('')
    const [verificaProduto, setVerificaProduto] = useState(false)
    const [allProducts, setAllProducts] = useState([
        {
            id: 1,
            name: 'Xbox',
            price: '3.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
        },
        {
            id: 2,
            name: 'Playstation 5',
            price: '5.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
        },
        {
            id: 3,
            name: 'Switch',
            price: '2.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
        }
    ])

    const newProduct = {
        name: 'Playstation 4',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

    function addNewProduct() {
        setAllProducts([...allProducts, newProduct])
    }

    function cadastrarProduto(event) {
        event.preventDefault()
        const novoProdutoCadastrado = {
            name: nomeProduto,
            price: precoProduto,
            picture: fotoProduto
        }
        
        if(nomeProduto === '' || precoProduto === '' || fotoProduto === '') {
            setVerificaProduto(true)
        } else {
            setAllProducts([...allProducts, novoProdutoCadastrado])
            setNomeProduto('')
            setPrecoProduto('')
            setFotoProduto('')
            setVerificaProduto(false)
        }
    }

    return (
        <main className="setima-aula-component">

        <div className="tittle-wrapper">
            <h1>Produtos</h1>
            <button onClick={addNewProduct}>Adicionar novo produto</button>
        </div>

        <form className={verificaProduto ? "form-error": ""}>
            <div>
                <label htmlFor="">Nome</label>
                <input id="nomeProduto" type="text" value={nomeProduto} onChange={event => setNomeProduto(event.target.value)}></input>
                <label htmlFor="">Preço</label>
                <input id="precoProduto" type="text" value={precoProduto} onChange={event => setPrecoProduto(event.target.value)}></input>
                <label htmlFor="">Foto</label>
                <input id="fotoProduto" type="text" value={fotoProduto} onChange={event => setFotoProduto(event.target.value)}></input>
            </div>

            <button type="submit" onClick={event => cadastrarProduto(event)}>Cadastrar Produto</button>
        </form>

        {verificaProduto ? <span>Algum campo não foi preenchido, verifique as informações</span> : ''}
        
        <section className='products'>
            {
                allProducts.map(
                    product => {
                        return (
                            <SetimaAulaCardProduto
                                productData={product}
                            />
                        )
                    }
                )
            }
        </section>

    </main>
    )
}