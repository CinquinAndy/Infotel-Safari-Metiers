import Head from 'next/head'

import React from 'react'
import Image from 'next/image'
import Nav from '@components/Global/Nav'
import { useQuery } from '@tanstack/react-query'
import Loader from '@components/Global/Loader'
import Router from 'next/router'
import { initPocketBase } from '../../lib/pocketbase'
import Footer from '@components/Global/Footer'

export default function Albums(props) {
	const pb = initPocketBase()

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['albums'],
		queryFn: async () => {
			return pb.collection('albums').getFullList({
				sort: '-created',
			})
		},
	})

	if (isLoading) return <Loader />

	if (error) return 'An error has occurred: ' + error.message
	return (
		<>
			<Head>
				<title>Safari des métiers</title>
				<meta name="description" content="Safari des métiers" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<>
				<Nav />
				<div className={'relative min-h-screen w-screen'}>
					<main className={'mx-auto min-h-screen max-w-7xl px-8 pb-24 pt-12 '}>
						<section className={'flex w-full items-center justify-start'}>
							<div
								className={
									'flex h-full w-1/2 flex-col items-start justify-start'
								}
							>
								<h1 className={'flex flex-col gap-2'}>
									<span className={'text-2xl text-teal-500 lg:text-5xl'}>
										Mes albums&nbsp;!
									</span>
								</h1>
							</div>
						</section>
						<ul
							role="list"
							className="my-8 grid grid-cols-1 gap-x-4 gap-y-8 pb-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 xl:gap-x-8"
						>
							{data.map(album => (
								<li key={album.id} className="relative">
									<div
										className={
											'group aspect-h-10 aspect-w-10 block w-full overflow-hidden rounded-lg bg-slate-100 transition hover:ring-2 hover:ring-teal-500 hover:ring-offset-2 hover:ring-offset-slate-100'
										}
									>
										<Image
											src={`http://infotel-safari-api.beta.andy-cinquin.fr/api/files/${album.collectionId}/${album.id}/${album.photos[0]}`}
											alt="Photo Album"
											width={500}
											height={500}
											className="pointer-events-none object-cover object-center transition-all duration-300 group-hover:scale-105 group-hover:opacity-75"
										/>
										<button
											type="button"
											className="absolute inset-0 focus:outline-none"
											onClick={() => {
												Router.push(`/albums/${album.id}`)
											}}
										>
											<span className="sr-only">
												View details for {album.title}
											</span>
										</button>
									</div>
									<p className="pointer-events-none mt-2 block truncate text-sm font-medium text-slate-900">
										{album.title}
									</p>
								</li>
							))}
						</ul>
					</main>
					<Footer />
				</div>
			</>
		</>
	)
}
