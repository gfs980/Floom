import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {distanceCalculator, ifFloat} from './HOC/helpers'
import './sass/main.scss'

interface IAppProps{}

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

interface Location { 
  long:number 
  lat:number 
} 

const App: React.FC<IAppProps> = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [tags, setTags] = useState<string[]>([])

  const [filter, setFilter] =  useState<string>('')
  const [search, setSearch] = useState<Location>()

  useEffect(()=>{
    getData()
  }, [])

  const getData = async () =>{
    // console.log('getting data')
    let fetchMer = await fetch('http://localhost:8888/merchants')
    let merchant = await fetchMer.json()
    
    let fetProd = await fetch('http://localhost:8888/products')
    let product = await fetProd.json()

    let newProducts:Product[] = product.map((p:Product) => {
      let shop:Merchant = merchant.find((m:Merchant) => m.id === p.merchant_id)
      return {...p, shop}
    })
    
    setProducts(newProducts)

    const unsortedTags = product.map((p:Product)=> p.tags).reduce((g:string, n:string) => g.concat(n))
    const sortedTags:string[] = unsortedTags.reduce((prev:string, n:string)=>prev.includes(n) ? prev : prev.concat(n), [])
    setTags(sortedTags)
  }

  const handleSearch = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) =>{
    const input = event.target.value
    const long:number = parseFloat(input.split(',')[0])
    const lat:number = parseFloat(input.split(',')[1])
    if((Number.isInteger(lat) || ifFloat(lat)) && (Number.isInteger(long) || ifFloat(long))){
      const location:Location = {
        'long' : long,
        'lat': lat
      }
      setSearch(location)
    }
    else{
      setSearch(undefined)
    }
  }, [setSearch])
  
  const handleSelect = React.useCallback((event: React.FormEvent<HTMLSelectElement>) => {
    setFilter(event.currentTarget.value)
  }, [setFilter])

  const productFilter = (prod:Product) => {
    if(search){
      if(filter){
        return prod.shop.radius_meters >= distanceCalculator(prod.shop.location[1 as number], prod.shop.location[0 as number], search.lat, search.long) * 1000 && (prod.tags as string[]).includes(filter)
      }
      else{
        return prod.shop.radius_meters >= distanceCalculator(prod.shop.location[1 as number], prod.shop.location[0 as number], search.lat, search.long) * 1000
      }
    }
    else if(filter){
      return (prod.tags as string[]).includes(filter)
    }
    else{
      return products
    }
  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch} handleSelect={handleSelect} tags={tags} />
      { products.filter(productFilter).length ? <Main products={products.filter(productFilter)} /> : null }
    </div>
  );
}

export default App;