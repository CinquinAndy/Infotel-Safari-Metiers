import Head from 'next/head'

import React from 'react'
import Image from 'next/image'
import Nav from '@components/Global/nav'
import PocketBase from 'pocketbase'
import {useQuery} from '@tanstack/react-query'
import Loader from '@components/Global/Loader'

export default function Albums() {
    const pb = new PocketBase('http://infotel-safari-api.beta.andy-cinquin.fr')

    const {isLoading, isError, data, error} = useQuery({
        queryKey: ['albums'],
        queryFn: async () => {
            return pb.collection('albums').getFullList({
                sort: '-created',
            })
        },
    })

    console.log(isLoading, isError, data, error)

    if (isLoading) return <Loader/>

    if (error) return 'An error has occurred: ' + error.message
    const albums = data

    console.log(albums)

    return (
        <>
            <Head>
                <title>Safari des métiers</title>
                <meta name="description" content="Safari des métiers"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <>
                <Nav/>
                <div className={'relative h-screen w-screen'}>
                    <main
                        className={'mx-auto h-screen min-h-screen max-w-7xl px-8 pt-28'}
                    >
                        <section className={'flex w-full items-center justify-start'}>
                            <div
                                className={
                                    'flex h-full w-1/2 flex-col items-start justify-start'
                                }
                            >
                                <h1 className={'flex flex-col gap-2'}>
									<span className={'text-2xl text-teal-500 sm:text-5xl'}>
										Mes albums !
									</span>
                                </h1>
                            </div>
                        </section>
                        <ul
                            role="list"
                            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 mt-8"
                        >
                            {albums.map(album => (
                                <li key={album.id} className="relative">
                                    <div
                                        className={"transition aspect-h-10 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-slate-100 hover:ring-2 hover:ring-teal-500 hover:ring-offset-2 hover:ring-offset-slate-100"}>
                                        <Image
                                            src={`http://infotel-safari-api.beta.andy-cinquin.fr/api/files/${album.collectionId}/${album.id}/${album.photos[0]}`}
                                            alt="Photo Album"
                                            width={500}
                                            height={500}
                                            className="pointer-events-none object-cover object-center group-hover:opacity-75"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-0 focus:outline-none"
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
                        {/*<section className={'grid-custom'}>*/}
                        {/*	{albums[4].photos.map(photo => {*/}
                        {/*		return (*/}
                        {/*			<div className={'relative h-[300px] w-[300px]'} key={photo}>*/}
                        {/*				<Image*/}
                        {/*					alt={'Albums'}*/}
                        {/*					src={`http://infotel-safari-api.beta.andy-cinquin.fr/api/files/${albums[4].collectionId}/${albums[4].id}/${photo}`}*/}
                        {/*					quality={75}*/}
                        {/*					width={500}*/}
                        {/*					height={500}*/}
                        {/*					className={'h-full w-full object-cover object-center'}*/}
                        {/*				/>*/}
                        {/*			</div>*/}
                        {/*		)*/}
                        {/*	})}*/}
                        {/*</section>*/}
                    </main>
                </div>
            </>
        </>
    )
}
