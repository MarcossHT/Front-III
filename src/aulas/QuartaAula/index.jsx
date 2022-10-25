import './style.scss';
import image from './../../assets/images/geforce-ada-4090-web-og-1200x630@2x.jpg'
import image2 from './../../assets/images/Untitled1044.jpg'

export function QuartaAula() {

    const componentsFinded = [
        {
            title: 'RTX 4090',
            image: image,
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, commodi?'
        },
        {
            title: 'RTX 3080',
            image: image2,
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, id.'
        }
    ];

    return (
        <div className="quarta-aula-component">
            <h1 className="main-title">Componentes Identificados</h1>

            <ul className="components-finded">

                {
                    componentsFinded.map(c => {
                        return (
                            <li>
                                <img src= {c.image} alt=""></img>
                                <h1>{c.title}</h1>
                                <p>{c.text}</p>
                            </li>
                        )
                        
                    })
                }

            </ul>
        </div>
    )
}