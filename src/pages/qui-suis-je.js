import Head from 'next/head'

import React from 'react'
import Image from 'next/image'
import Nav from '@components/Global/nav'
import Link from 'next/link'
import {
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
} from '@components/Global/SocialIcons'
import clsx from 'clsx'

export default function Home() {
	return (
		<>
			<Head>
				<title>Andy Cinquin - Safari des métiers</title>
				<meta name="description" content="Safari des métiers" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<Nav />
				<div className={'relative min-h-screen w-screen'}>
					<main
						className={
							'mx-auto min-h-screen max-w-7xl px-8 pb-24 pt-12'
						}
					>
						<div className={'lg:flex lg:h-full w-full lg:items-center lg:justify-center'}>
							<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
								<div className="lg:pl-20">
									<div className="flex max-w-xs px-2.5 lg:max-w-none">
										<div
											className={
												'w-auto rotate-3 rounded-2xl bg-slate-50 p-10 shadow-2xl'
											}
										>
											<Image
												src={'/images/LogoCinquinAndy.svg'}
												alt="Logo Andy"
												width={250}
												height={250}
												className="aspect-square object-cover"
											/>
										</div>
									</div>
								</div>
								<div className="flex h-full flex-col items-start justify-center lg:order-first lg:row-span-2">
									<h1 className="text-4xl font-bold tracking-tight text-slate-800 lg:text-5xl">
										{"Hey ! Moi c'est Andy !"}
									</h1>
									<div className="mt-6 space-y-7 text-base text-slate-600">
										<p>
											{'→ CEO de la start-up ForMenu, '}
											<br />
											{
												'→ Co-fondateur de la plateforme de mise en relation entre particuliers et maquilleuses professionnelles My-Makeup,'
											}
											<br />
											{
												'→ Co-fondateur de la plateforme e-commerce Artriste.cc,'
											}
											<br />
											{'→ Développeur Freelance.'}
										</p>
										<p>
											{
												'Je donne parfois des cours et accompagne des étudiants dans leurs projets et ambitions.'
											}
										</p>
										<p>
											{
												'Je souhaite partager mes connaissances et mon expérience dans le domaine exceptionnel du développement et le monde de la tech.'
											}
										</p>
										<p>
											{
												"À côté de tout cela, je suis également en alternance chez Infotel et encore en études à l'EPSI."
											}
										</p>
									</div>
								</div>
								<div className="lg:pl-20">
									<ul role="list">
										<SocialLink
											href={'https://www.instagram.com/cinquin.andy/'}
											icon={InstagramIcon}
											className="mt-4"
										>
											Contactez-moi sur Instagram
										</SocialLink>
										<SocialLink
											href={'https://github.com/CinquinAndy/'}
											icon={GitHubIcon}
											className="mt-4"
										>
											Contactez-moi sur GitHub
										</SocialLink>
										<SocialLink
											href={'https://www.linkedin.com/in/andy-cinquin/'}
											icon={LinkedInIcon}
											className="mt-4"
										>
											Contactez-moi sur LinkedIn
										</SocialLink>
										<SocialLink
											href="mailto:contact@andy-cinquin.fr"
											icon={MailIcon}
											className="mt-8 border-t border-slate-100 pt-8 "
										>
											contact@andy-cinquin.fr
										</SocialLink>
									</ul>
								</div>
							</div>
						</div>
					</main>
				</div>
			</>
		</>
	)
}

function SocialLink({ className, href, children, icon: Icon }) {
	return (
		<li className={clsx(className, 'flex')}>
			<Link
				href={href}
				className="group flex text-sm font-medium text-slate-800 transition hover:text-teal-700 "
			>
				<Icon className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-teal-700" />
				<span className="ml-4 flex items-center">{children}</span>
			</Link>
		</li>
	)
}

function MailIcon(props) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				fillRule="evenodd"
				d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
			/>
		</svg>
	)
}
