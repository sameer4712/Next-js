import Link from "next/link";
import React from "react";
interface address{
    street:string,
    city:string,
    zipcode:number
}
interface User {
    id: number;
    name: string;
    address: address
    website:string
}
const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: User[] = await res.json()
    console.log(data)

    return (
        <div>
            <h1>Time: {new Date().toLocaleTimeString()}</h1>
            {data.map(data =>
                <div key={data.id} className="flex gap-20 justify-center ">
                    <p >{data.name}</p>
                    <p>{data.address.city}</p>
                    <p>{data.address.street}</p>
                    <p>{data.address.zipcode}</p>
                    <p>{data.website}</p>
                </div>

            )}
            <Link href='/users/new'>new</Link>
        </div>
    )
}

export default UserPage