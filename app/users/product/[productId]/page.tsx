import React from 'react'

export default async function page({params}:{params:Promise<{productId:string}>}) 
{
  const product = (await params).productId
  return (
    <div>page {product}</div>
  )
}
