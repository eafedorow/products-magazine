import React, {useState} from 'react'
import {IProduct} from "../models";

interface Props {
    product: IProduct
}

export const Product = ({product}: Props) => {

    const [details, setDetails] = useState(false);

    const btnBgClassName = details ? "bg-blue-400" : 'bg-yellow-400'

    const btnClasses = ['m-3 py-2 px-4 border', btnBgClassName];

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2 ">

            <img className="w-1/3 border rounded px-10 py-10 m-5" src={product.image} alt={product.title}/>
            <div className="w[200px] text-center">
                <div className="font-thin">{product.category}</div>
                <h2>{product.title}</h2>
                <div>
                    <div className="font-bold bg-red-400 border rounded py-2 px-2 m-2">$ {product.price}</div>
                </div>
            </div>

            {details &&
                <div className="text-center border rounded px-10 py-10">
                    <div className="py-6 px-10 border-2 rounded m-1 text-left">{product.description}</div>
                    <div className="flex justify-center gap-3 m-4">
                        <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
                        <div>Rate count: <span style={{fontWeight: 'bold'}}>{product?.rating?.count}</span></div>
                    </div>
                </div>
            }
            <button onClick={() => setDetails(!details)} className={btnClasses.join(' ')}>{details ? "Hide Details" : "Show Details"}</button>
        </div>
    )
}