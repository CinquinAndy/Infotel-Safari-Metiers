import Head from 'next/head'

import React from 'react'
import Image from 'next/image'
import Nav from '@components/Global/nav'

export default function Home() {
	return (
		<>
			<Head>
				<title>Safari des métiers</title>
				<meta name="description" content="Safari des métiers" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<>
				<Nav />
				<main className={'h-screen min-h-screen w-screen'}>
					<section className={'flex h-full w-full items-center justify-center'}>
						<div
							className={
								'flex h-full w-1/2 flex-col items-center justify-center'
							}
						>
							<h1 className={'flex flex-col gap-2'}>
								<span className={'text-5xl text-teal-500'}>
									Safari des métiers !
								</span>
								<span className={'text-3xl text-slate-700'}>
									{"L'album de voyage"}
								</span>
							</h1>
						</div>
						<div className={'relative h-full w-1/2'}>
							<Image
								src="/images/background_2.webp"
								alt="Safari des métiers"
								fill={true}
								className={'clip-me h-full w-full object-cover object-right'}
							/>
						</div>
					</section>
				</main>
				<svg height="0" width="0">
					<defs>
						<clipPath id="svgPath">
							<path
								className="st0"
								d="M1920,0H215.1c-5.3,57.5,42.6,113.2,7.4,181.5c-24.9,48.4-58.7,39.4-99,102c-33.1,51.5-15.7,66.1-53,144
		c-36.2,75.6-59.2,75.6-62,117c-4,60.2,43.7,73.6,38,133c-4.9,50.8-41.4,57.3-46,112c-3.5,41.9,14.7,74.9,28,99
		c41.3,74.9,88.5,72.3,124,133c12.8,21.9,17.7,41,19.4,58.5H1920V0z"
							/>
						</clipPath>
					</defs>
				</svg>
			</>
		</>
	)
}
