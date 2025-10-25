import React from 'react'

export default async function Sluged({params}:{params:Promise<{slug:string}>},) {
    const {slug} = await params;
    if(slug?.length ===2){
        return <h1>viewing docs for feauture {slug[0]} and concept {slug[1]}</h1>
    }else if(slug?.length ===1){
      return  <h1>viewing docs for geature {slug[0]}</h1>
    }
  return (
    <div>
        <h1>Docs home page</h1>
    </div>
  )
}
