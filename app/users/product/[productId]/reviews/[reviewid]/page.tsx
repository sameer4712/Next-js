import React from 'react'

export default async function page({params}:{params:Promise<{reviewid:string,productId:string}>}) {
    const {productId,reviewid} =  await params
  return (
    <div>
      product {productId}  review {reviewid}
    </div>
  )
}
