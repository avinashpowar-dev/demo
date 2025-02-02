/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState, useEffect } from 'react';

export default function Products(){
    const [productsData, setProductsData] = useState([]);
    const [loc, setLoc] = useState('');
    useEffect(() => {
      const proto = window.location.protocol + '//';
      const host = window.location.hostname;
      setLoc(proto + host +':3001/products');
        fetch('http://localhost:3001/products')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            //const products: Product[] = data;
            setProductsData(data);
          });
          
          
          //const pathname = window.location.pathname;
          
      }, []);
   
    return <><h1>href {loc} </h1>
    <p>http://localhost:3001/products</p>
    <ul>
    {productsData.map((product:any) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p>{product.price}</p>
          <p className="text-lg font-medium">${product.name}</p>
        </li>
      ))}
    </ul>
    
    </>
}
