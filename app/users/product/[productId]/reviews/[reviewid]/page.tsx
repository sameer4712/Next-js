import React from 'react'
import { notFound } from 'next/navigation'
export default async function page({params}:{params:Promise<{reviewid:string,productId:string}>}) {
    const {productId,reviewid} =  await params
    if(parseInt(reviewid)>10){
        notFound();
    }
  return (
    <div>
      product {productId}  review {reviewid}
    </div>
  )
}
