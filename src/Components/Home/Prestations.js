import React from 'react'

const data = {
	title: 'Prestations',
	description: 'Prestations',
	image: '/images/background_2.webp',
	alt: 'Safari des métiers',
}

function Prestations(props) {
	return (
		<main className={'mx-auto max-w-7xl px-8 text-white'}>
			<article>
				<div className={'custom-tag relative text-xl text-teal-100'}>
					Mes histoires
				</div>
				<h1>{"A la recherche de l'hippo"}</h1>
				<p>
					{
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?'
					}
				</p>
				<button
					className={
						'flex items-center justify-center rounded-lg border-2 border-teal-400 px-3 py-2 text-center text-sm text-white ' +
						'bg-transparent hover:bg-teal-400 hover:text-teal-950'
					}
				>
					Contactez moi
				</button>
			</article>
		</main>
	)
}

export default Prestations
