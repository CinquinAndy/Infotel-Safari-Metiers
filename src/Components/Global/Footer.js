import React from 'react'
import Link from 'next/link'

function Footer(props) {
	return (
		<div
			className={
				'w-full' + +(props.alt === true) ? 'bg-teal-950' : 'bg-transparent'
			}
		>
			<footer className={'relative mx-auto max-w-7xl px-8 py-24'}>
				<div
					className={
						'absolute left-1/2 top-0 h-[1px] w-1/3 -translate-x-1/2 transform bg-white/30'
					}
				></div>
				<p
					className={
						'mx-auto text-sm ' + (props.alt === true)
							? 'text-slate-50'
							: 'text-slate-600'
					}
				>
					Tous droits réservés - Developed with ❤️ by{' '}
					<Link
						className={
							'text-sm underline ' + (props.alt === true)
								? 'text-slate-50'
								: 'text-slate-600'
						}
						href={'https://andy-cinquin.fr'}
						target={'_blank'}
					>
						Andy Cinquin
					</Link>
					&nbsp; - &nbsp;
					<Link
						className={
							'text-sm underline ' + +(props.alt === true)
								? 'text-slate-50'
								: 'text-slate-600'
						}
						href={'https://infotel.com'}
						target={'_blank'}
					>
						Infotel
					</Link>
				</p>
			</footer>
		</div>
	)
}

export default Footer
