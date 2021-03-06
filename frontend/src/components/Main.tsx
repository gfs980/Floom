import React from 'react'
import ProductDetails from './ProductDetails'

interface MainProps{
    products: Product[]
}

interface Merchant{
    id: number,
    title: string,
    location: [],
    radius_meters: number,
    prods: Product[]
}

interface Product {
    id: number,
    merchant_id: number,
    description: string,
    title: string,
    price: number,
    currency: string,
    tags: []
    image_urls: []
    shop: Merchant
}

const Main: React.FunctionComponent<MainProps> = React.memo(({products}) => {

    return (
        <main>
            {products.map((product, i) => <ProductDetails key={i} product={product} /> )}
        </main>
    )
})


export default Main