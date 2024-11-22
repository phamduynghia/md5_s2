import ShopItem from "./ShopItem";

export default function ListShop() {
    const shops = [
        {
            id: 1,
            name: 'Apple new mac book 2015 March :P',
            image:
                'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp',
            quantity: 5,
            price1: 899.00,
            price2: 999.00,
        },
        {
            id: 2,
            name: 'Apple new mac book 2015 March :P',
            image:
                'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp',
            quantity: 5,
            price: 899.00,
            price2: 999.00,
        },
        {
            id: 3,
            name: 'Apple new mac book 2015 March :P',
            image:
                'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp',
            quantity: 5,
            price: 899.00,
            price2: 999.00,
        },
        {
            id: 4,
            name: 'Apple new mac book 2015 March :P',
            image:
                'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp',
            quantity: 5,
            price: 899.00,
            price2: 999.00,
        },
        {
            id: 5,
            name: 'Apple new mac book 2015 March :P',
            image:
                'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp',
            quantity: 5,
            price: 899.00,
            price2: 999.00,
        },
        {
            id: 6,
            name: 'Apple new mac book 2015 March :P',
            image:
                'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp',
            quantity: 5,
            price: 899.00,
            price2: 999.00,
        },
        {
            id: 7,
            name: 'Apple new mac book 2015 March :P',
            image:
                'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp',
            quantity: 5,
            price: 899.00,
            price2: 999.00,
        },
    ]
  return (
    <>
    {shops.map((item) => (
                <ShopItem key={item.id} item={item} />
            ))}
  </>
   );
}
