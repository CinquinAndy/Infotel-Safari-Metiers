import React from 'react'
import Image from 'next/image'
import { initPocketBase } from '../../../lib/pocketbase'
import { useQuery } from '@tanstack/react-query'
import Loader from '@components/Global/Loader'

const data = {
	title: 'Prestations',
	description: 'Prestations',
	image: '/images/background_2.webp',
	alt: 'Safari des métiers',
}

function Prestations(props) {
	const pb = initPocketBase()

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['prestations'],
		queryFn: async () => {
			return pb.collection('prestations').getFullList({
				sort: '-created',
			})
		},
	})

	console.log(isLoading, isError, data, error)

	if (isLoading) return <Loader />

	if (error) return 'An error has occurred: ' + error.message

	console.log(data)
	return (
		<main className={'mx-auto max-w-7xl px-8 py-20 text-white'}>
			<section
				className={
					'flex h-full w-full flex-wrap items-center justify-start gap-80 py-40'
				}
			>
				{data.map((prestation, index) => (
					<div
						key={prestation.id}
						className={
							'flex h-full w-full flex-col items-start justify-start gap-4 '
						}
					>
						<div
							className={
								'relative flex w-full flex-wrap gap-32 lg:flex-nowrap ' +
								(index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row')
							}
						>
							<div className={'flex w-full flex-col gap-4 pb-32 lg:w-1/2'}>
								<p
									className={
										'custom-tag relative flex w-full flex-col items-start justify-center gap-2'
									}
								>
									<span
										className={
											'text-sm uppercase tracking-widest text-teal-400'
										}
									>
										Prestation
									</span>
								</p>
								<p
									className={
										'flex w-full flex-col items-start justify-center gap-2 uppercase'
									}
								>
									<span className={'text-sm font-bold text-white lg:text-5xl'}>
										{prestation.title}.
									</span>
								</p>
								<div
									className={
										'flex w-10/12 flex-col gap-4 text-sm text-white/90'
									}
									dangerouslySetInnerHTML={{
										__html: prestation.description,
									}}
								/>
								<div>
									<button
										className={
											'flex items-center justify-center rounded border border-teal-400 bg-transparent px-8 py-3 text-center text-sm font-semibold text-teal-400'
										}
									>
										Contactez-nous
									</button>
								</div>
							</div>
							<div
								className={'relative hidden h-full lg:block lg:h-auto lg:w-1/2'}
							>
								<Image
									src={`http://infotel-safari-api.beta.andy-cinquin.fr/api/files/${prestation.collectionId}/${prestation.id}/${prestation.image}`}
									alt="Photo Album"
									quality={75}
									fill={true}
									className="pointer-events-none z-20 object-cover object-center"
								/>
								<div className={'relative z-10 h-full w-full'}>
									<div
										className={
											'pointer-events-none z-20  h-full w-full transform select-none bg-white/5 ' +
											(index % 2 !== 0 ? 'translate-x-1/2' : '-translate-x-1/2')
										}
									></div>
									<div
										className={
											'pointer-events-none absolute top-0 z-20  h-1/3 w-[2px] -translate-y-1/2 transform select-none bg-white/50 ' +
											(index % 2 !== 0 ? 'left-0' : 'right-0')
										}
									></div>
								</div>
							</div>
						</div>
					</div>
				))}
			</section>
		</main>
	)
}

export default Prestations
