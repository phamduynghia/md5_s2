
import CartItem from './CartItem'

export default function ListCart() {
    const carts = [
        {
            id: 1,
            name: 'Iphone 16 pro max desert titan',
            description: '256GB, Desert titan new seal',
            image:
                'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp',
            quantity: 5,
            price: 100,
        },
        {
            id: 2,
            name: 'Iphone 15 pro max titan',
            description: '256GB, titan new seal',
            image:
                'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp'   ,     
            quantity: 2,
            price: 90,
        },
        {
            id: 3,
            name: 'Iphone 16 pro max desert titan',
            description: '256GB, Desert titan new seal',
            image:
            'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp',
            quantity: 5,
            price: 100,
        },
        {
            id: 4,
            name: 'Iphone 16 pro max desert titan',
            description: '256GB, Desert titan new seal',
            image:
            'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp',
            quantity: 5,
            price: 100,
        },
        {
            id: 5,
            name: 'Iphone 16 pro max desert titan',
            description: '256GB, Desert titan new seal',
            image:
            'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp',
            quantity: 5,
            price: 100,
        },
    ];

    return (
        <>
            {carts.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </>
    );
}
