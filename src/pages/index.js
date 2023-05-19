import Head from 'next/head'

import React from 'react'
import Router from 'next/router'

export default function Home() {
	const handleClickGo = () => {
		typeof window !== 'undefined' && Router.push('/albums')
	}
	return (
		<>
			<Head>
				<title>Safari des métiers</title>
				<meta name="description" content="Safari des métiers" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<>
				<div
					className={
						'relative flex min-h-screen w-screen items-center justify-center'
					}
				>
					<h1>Landing</h1>
				</div>
			</>
		</>
	)
}
