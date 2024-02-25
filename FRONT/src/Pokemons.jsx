import { useEffect, useState } from "react"

export default () => {


    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('/api/pokemon')
        .then(e => e.json())
        .then(data => setItems(data.data))
        .catch(err => console.log(err))
    }, []) 


    return (
        <>
            <h1>Pokemons</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Caracter</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => <tr key={item.id}><td>{item.nombre}</td><td>{item.caracter}</td></tr>)}
                </tbody>
            </table>

        </>
    )

}