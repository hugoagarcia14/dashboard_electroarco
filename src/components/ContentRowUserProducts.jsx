import { useEffect, useState } from 'react'
import SmallCard from './SmallCard'



function ContentRowUserProducts() {
const [cards, setCard]=useState([ {
    title: 'Total de Productos',
    color: 'primary',
    quantity: 0,
    icon: 'fa-regular fa-box-open'
},
{
    title: 'Total Usuarios',
    color: 'success',
    quantity: 0,
    icon: 'fa-users'
}])

    useEffect(()=> {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(data => { 
                cards[0].quantity = data.meta.total;
                setCard([...cards])
            })
            .catch(err => {
                console.log(err)
            })
            fetch('http://localhost:3001/api/users')
            .then(res => res.json())
            .then(data => {
                cards[1].quantity = data.meta.total;
                setCard([...cards])
            })
            .catch(err => {
                console.log(err)
            })   
    },[])
    
    return (
        <div className="row">
            {cards.map((card, key) =>
                <SmallCard key={key} color={card.color} title={card.title} quantity={card.quantity} icon={card.icon} />
            )}
        </div>
    )
}

export default ContentRowUserProducts