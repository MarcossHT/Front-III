export function TerceiraAula() {
    
    const components = [
        {
            name: 'Component Card',
            description: 'Lorem Ipsum',
            image: 'https://picsum.photos/200/300'
        },
        {
            name: 'Component Card',
            description: 'Lorem Ipsum',
            image: 'https://picsum.photos/200/300'
        },
        {
            name: 'Component Card',
            description: 'Lorem Ipsum',
            image: 'https://picsum.photos/200/300'
        }
    ]

    return (
        <main>
            <h1>Lista de componentes encontrados em um sistema</h1>
            <ul>
                {components.map(e => (
                    <li>
                    <img src={e.image}/>
                    <h1>{e.name}</h1>
                    <p>{e.description}</p>
                </li>
                ))}
            </ul>
        </main>
    )
}
