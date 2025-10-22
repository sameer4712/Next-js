import React from 'react'
import Link from 'next/link'


export default async function page({ params, searchParams }: {
    params: Promise<{ articleid: string }>,
    searchParams: Promise<{ lang?: "eng" | "fren" | "mal" }>
}) {
    const { articleid } = await params;
    const { lang  } = await searchParams;
    return (
        <div>
            <h1 className='font-bold'>Article Today {articleid}</h1>
            <h1> reading language: {lang}</h1>
            <div >
            <Link href={`/articles/${articleid}?lang=eng`}>English</Link>
            <Link href={`/articles/${articleid}?lang=fren`}>French</Link>
            <Link href={`/articles/${articleid}?lang=mal`}>Malayalam</Link>

            </div>
        </div>
    )
}
