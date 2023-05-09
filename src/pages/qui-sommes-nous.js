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
								src="/images/background.png"
								alt="Safari des métiers"
								fill={true}
								className={'h-full w-full object-cover object-bottom'}
							/>
						</div>
					</section>
				</main>
			</>
		</>
	)
}
