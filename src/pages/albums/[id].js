import PocketBase from "pocketbase";
import {getAlbumIdList, getAlbumsDetails} from "../../../lib/albums";
import {useQuery} from "@tanstack/react-query";
import {initPocketBase} from "../../../lib/pocketbase";
import Head from "next/head";
import Nav from "@components/Global/nav";
import Image from "next/image";
import Router from "next/router";
import React from "react";


export default function Album({albumData}) {
    return (
        <>
            <Head>
                <title>{albumData.title}</title>
                <meta name="description" content={`${albumData.title} - Safari des métiers`}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <>
                <Nav/>
                <div className={'relative min-h-screen w-screen'}>
                    <main
                        className={'mx-auto h-screen min-h-screen max-w-7xl px-8 py-28 '}
                    >
                        <section className={'flex w-full items-center justify-start'}>
                            <div
                                className={
                                    'flex h-full w-1/2 flex-col items-start justify-start'
                                }
                            >
                                <h1 className={'flex flex-col gap-2'}>
									<span className={'text-2xl text-teal-500 sm:text-5xl'}>
										{albumData.title}
									</span>
                                </h1>
                            </div>
                        </section>
                        <ul
                            role="list"
                            className="my-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 pb-20"
                        >
                            {albumData.photos.map(photo => (
                                <li key={photo} className="relative">
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
                                            className="pointer-events-none object-cover object-center group-hover:opacity-75 group-hover:scale-105 transition-all duration-300"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </main>
                </div>
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
            id: record.id
        }
    }));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const pb = initPocketBase()
    const record = await pb.collection('albums').getOne(params.id)
    const albumData = await getAlbumsDetails(params.id)
    if (!albumData) {
        return {
            props: {hasError: true},
        }
    }
    return {
        props: {
            albumData
        },
    }
}
