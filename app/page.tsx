import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <Link href='/users'>users </Link><br />
      <Link href='/users/new'>product </Link><br />
      <Link href='/users/category'>category </Link>

    </div>
  )
}
