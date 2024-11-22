import React from 'react'

export default function CartProduct(props) {
    const {productProps,indexProps} = props;

  return (
    <>
    <li>
        <div>Index: {indexProps}</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </li>
    </>
  )
}
