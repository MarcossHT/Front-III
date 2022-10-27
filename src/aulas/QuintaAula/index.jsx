import './style.scss';
import image from './../../assets/images/geforce-ada-4090-web-og-1200x630@2x.jpg'
import image2 from './../../assets/images/Untitled1044.jpg'
import { QuintaAulaItem } from '../../components/QuintaAula';

export function QuintaAula() {
    
    const componentsFinded = [
        {
            id: 1,
            title: 'RTX 4090',
            image: image,
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, commodi?'
        },
        {
            id: 2,
            title: 'RTX 3080',
            image: image2,
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, id.'
        }
    ];
    
    
    return (
        <div className="quinta-aula-component">
            
            <h1 className="main-title">Componentes Identificados</h1>

            {/* <QuintaAulaItem 
                title="Primeiro Componente" 
            /> */}

            <ul className="components-finded">

                {
                    componentsFinded.map(c => {
                        return (
                            <QuintaAulaItem
                                key={c.id} 
                                item={c}
                            />
                        )
                        
                    })
                }

            </ul>
        </div>
    )
}