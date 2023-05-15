import React from 'react'
import Link from 'next/link'

function Footer(props) {
	return (
		<footer className={'mx-auto max-w-7xl px-8 py-12'}>
			<p className={'mx-auto text-sm text-slate-600'}>
				Tous droits réservés - Developed with ❤️ by{' '}
				<Link
					className={'text-sm text-slate-600 underline'}
					href={'https://andy-cinquin.fr'}
					target={'_blank'}
				>
					Andy Cinquin
				</Link>
				&nbsp; - &nbsp;
				<Link
					className={'text-sm text-slate-600 underline'}
					href={'https://infotel.com'}
					target={'_blank'}
				>
					Infotel
				</Link>
			</p>
		</footer>
	)
}

export default Footer
