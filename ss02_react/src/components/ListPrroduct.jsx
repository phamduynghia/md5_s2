import React from 'react'

export default function ListPrroduct() {
    const products = [
        {
            id: 1,
            productName: "Iphone 14",
            price: 2000000,
            quantity: 20,
        },
        {
            id: 2,
            productName: "Iphone 15",
            price: 3000000,
            quantity: 15,
        },
        {
            id: 3,
            productName: "Iphone 16",
            price: 5000000,
            quantity: 30,
        },
    ];
    return (
        <>
        <h3>ListProduct</h3>
        <ul>
            {products.map((product,index) => (
                <li key={product.id}>
                     <div>{product.id}</div>
                     <div>{product.productName}</div>
                     <div>{product.price}</div>
                     <div>{product.quantity}</div>
                </li>
            ))}
        </ul>
        </>
    )
}
