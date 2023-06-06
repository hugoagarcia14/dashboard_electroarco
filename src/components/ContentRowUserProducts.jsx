import SmallCard from './SmallCard'

const cards = [
    {
        title: 'Total de Productos',
        color: 'primary',
        quantity: 21,
        icon: 'fa-film'
    },
    {
        title: 'Total Usuarios',
        color: 'success',
        quantity: 90,
        icon: 'fa-users'
    }
]

function ContentRowUserProducts() {
    return (
        <div className="row">
            {cards.map((card, key) =>
                <SmallCard key={key} color={card.color} title={card.title} quantity={card.quantity} icon={card.icon} />
            )}
        </div>
    )
}

export default ContentRowUserProducts