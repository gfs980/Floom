import React from 'react'

interface ProductProps{
    product: Product
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

interface Merchant{
    id: number,
    title: string,
    location: [],
    radius_meters: number,
    prods: Product[]
}

const Product: React.FunctionComponent<ProductProps> = ({product}) => {

    const img = `${product.image_urls.values().next().value}.jpg`

    return (
        <div className="product" key={product.id}>
            <img src={img} alt=""/>
            <div className="grid grid--row-2-min">

                <div className="grid grid--col-2">
                    <div>
                        <h2 className="product__title">{product.title} </h2>
                        <span className="product__title--purple">{product.shop.title} </span>
                    </div>
                    <h2 className="product__price">£{product.price}</h2>
                </div>

                <div className="description">
                    <p>{product.description}</p>
                </div>

                <div className="grid">
                    <button className="btn btn__button btn--success">Buy</button>
                </div>
            </div>
        </div>
    )
}


export default Product