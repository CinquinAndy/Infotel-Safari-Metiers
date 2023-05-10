import Head from 'next/head'

import React from 'react'
import Image from 'next/image'
import Nav from '@components/Global/nav'

export default function Albums() {
	return (
		<>
			<Head>
				<title>Safari des métiers</title>
				<meta name="description" content="Safari des métiers" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<>
				<Nav />
				<div className={'relative h-screen w-screen'}>
					<main className={'mx-auto h-screen min-h-screen max-w-7xl px-8'}>
						<section
							className={'flex h-full w-full items-center justify-start'}
						>
							<div
								className={
									'flex h-full w-1/2 flex-col items-start justify-center'
								}
							>
								<h1 className={'flex flex-col gap-2'}>
									<span className={'text-2xl text-teal-500 sm:text-5xl'}>
										Mes albums !
									</span>
								</h1>
							</div>
						</section>
					</main>
				</div>
			</>
		</>
	)
}
