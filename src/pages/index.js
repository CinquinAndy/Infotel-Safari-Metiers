import Head from 'next/head'

import React from 'react'
import Image from 'next/image'
import Nav from '@components/Global/Nav'
import Router from 'next/router'
import Footer from '@components/Global/Footer'
import Prestations from '@components/Home/Prestations'

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
				<Nav />
				<div className={'relative min-h-screen w-screen'}>
					<div
						className={
							'absolute left-0 top-0 z-10 flex h-full w-full items-center justify-end'
						}
					>
						<div className={'relative h-full w-1/3 lg:w-1/2'}>
							<Image
								src="/images/background_2.webp"
								alt="Safari des métiers"
								fill={true}
								className={'clip-me h-full w-full object-cover object-right'}
							/>
							<button
								onClick={handleClickGo}
								className={
									'absolute left-0 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-teal-500/30 ' +
									'shadow-2xl lg:h-28 lg:w-28'
								}
							>
								<div
									className={
										'flex h-12 w-12 items-center justify-center rounded-full bg-slate-400/50 lg:h-20 lg:w-20'
									}
								>
									<div className={'relative h-4 w-4 lg:h-6 lg:w-6'}>
										<Image
											src={'/right-chevron.svg'}
											alt={'go to'}
											fill={true}
											className={'object-cover object-center'}
										/>
									</div>
								</div>
							</button>
						</div>
					</div>
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
									<span className={'text-2xl text-teal-500 lg:text-5xl'}>
										Safari des métiers !
									</span>
									<span className={'text-lg text-slate-700 lg:text-3xl'}>
										{"L'album de voyage"}
									</span>
								</h1>
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
				</div>
				<section className={'min-h-screen w-full bg-teal-950'}>
					<Prestations />
				</section>
				<Footer alt={true} />
			</>
		</>
	)
}
