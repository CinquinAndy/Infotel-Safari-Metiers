import PocketBase from 'pocketbase'
import { getAlbumIdList, getAlbumsDetails } from '../../../lib/albums'
import { useQuery } from '@tanstack/react-query'
import { initPocketBase } from '../../../lib/pocketbase'
import Head from 'next/head'
import Nav from '@components/Global/Nav'
import Image from 'next/image'
import Router from 'next/router'
import React from 'react'
import Footer from '@components/Global/Footer'

export default function Album({ albumData }) {
	return (
		<>
			<Head>
				<title>{albumData.title}</title>
				<meta
					name="description"
					content={`${albumData.title} - Safari des métiers`}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<>
				<Nav />
				<div className={'relative min-h-screen w-screen'}>
					<main
						className={'mx-auto min-h-screen max-w-7xl px-8 pt-12 lg:pb-24 '}
					>
						<section
							className={
								'flex h-full w-full flex-wrap items-center justify-start'
							}
						>
							<div
								className={
									'flex h-full w-full flex-col items-start justify-start gap-8'
								}
							>
								<h1 className={'flex w-full flex-col gap-2'}>
									<span className={'text-2xl text-teal-500 lg:text-5xl'}>
										{albumData.title}
									</span>
								</h1>
								<div
									className={
										'relative flex w-full flex-wrap gap-16 lg:flex-nowrap'
									}
								>
									<div className={'flex w-full flex-col gap-8 lg:w-1/2'}>
										{
											// dangerous html from albumData.description
										}
										<div
											className={'flex flex-col gap-4 text-base text-slate-500'}
											dangerouslySetInnerHTML={{
												__html: albumData.description,
											}}
										/>
									</div>
									<div
										className={
											'relative hidden h-full lg:block lg:h-auto lg:w-1/2'
										}
									>
										<Image
											src={`http://infotel-safari-api.beta.andy-cinquin.fr/api/files/${albumData.collectionId}/${albumData.id}/${albumData.photos[0]}`}
											alt="Photo Album"
											fill={true}
											className="pointer-events-none rounded-lg object-cover object-center shadow-md"
										/>
									</div>
								</div>
							</div>
						</section>
						<ul
							role="list"
							className="my-8 grid grid-cols-1 gap-x-4 gap-y-8 pb-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:pt-8 xl:gap-x-8"
						>
							{albumData.photos.map(photo => (
								<li
									key={photo}
									className={
										'relative ' +
										(photo !== albumData.photos[0] ? 'block' : 'lg:hidden')
									}
								>
									<div
										className={
											'group aspect-h-10 aspect-w-10 block w-full overflow-hidden rounded-lg bg-slate-100 transition hover:ring-2 hover:ring-teal-500 hover:ring-offset-2 hover:ring-offset-slate-100'
										}
									>
										<Image
											src={`http://infotel-safari-api.beta.andy-cinquin.fr/api/files/${albumData.collectionId}/${albumData.id}/${photo}`}
											alt="Photo Album"
											width={500}
											height={500}
											className="pointer-events-none object-cover object-center transition-all duration-300 group-hover:scale-105 group-hover:opacity-75"
										/>
									</div>
								</li>
							))}
						</ul>
					</main>
				</div>
				<Footer />
			</>
		</>
	)
}

export async function getStaticPaths() {
	const pb = initPocketBase()
	const res = await pb.collection('albums_ids').getFullList()
	/**
	 * format the data for getStaticPaths
	 * @type {{params: {id: *}}[]}
	 */
	const paths = res.map(record => ({
		params: {
			id: record.id,
		},
	}))
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const pb = initPocketBase()
	const record = await pb.collection('albums').getOne(params.id)
	const albumData = await getAlbumsDetails(params.id)
	if (!albumData) {
		return {
			props: { hasError: true },
		}
	}
	return {
		props: {
			albumData,
		},
	}
}
