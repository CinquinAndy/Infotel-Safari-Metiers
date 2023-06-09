import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
	{ name: 'Albums', href: '/albums', current: false },
	{ name: 'Qui suis-je ?', href: '/qui-suis-je', current: false },
	{ name: 'Contact', href: 'mailto:contact@andy-cinquin.fr', current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Nav() {
	// get the current page from the url, and set the current page to true
	// in the navigation array

	const [currentPath, setCurrentPath] = useState('')
	const [navigationWithCurrent, setNavigationWithCurrent] = useState([])

	useEffect(() => {
		setCurrentPath(window.location.pathname)
		setNavigationWithCurrent(
			navigation.map(item => {
				if (item.href === currentPath) {
					item.current = true
				}
				return item
			})
		)
	}, [])

	return (
		<Disclosure
			as="nav"
			className={
				'z-20 w-screen bg-slate-900 lg:bg-transparent' +
				(currentPath === '/' ? ' absolute' : ' sticky')
			}
		>
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-8">
						<div className="relative flex h-16 items-center justify-between ">
							<div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-50 hover:text-slate-100 focus:outline-none">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex w-full items-center justify-end lg:justify-start">
								<div
									className={
										'flex w-full items-center justify-end lg:w-1/2 lg:justify-between'
									}
								>
									<div className="flex items-center">
										<Link href={'/'}>
											<Image
												className="block h-8 w-auto"
												src="/images/hat.svg"
												alt="Logo Safari des métiers"
												width={30}
												height={30}
											/>
										</Link>
									</div>
									<div className="hidden lg:block">
										<div className="flex space-x-16">
											{navigationWithCurrent.map(item => (
												<Link
													key={item.name}
													href={item.href}
													className={classNames(
														item.current
															? 'text-teal-950'
															: 'text-teal-700 hover:text-teal-900',
														'text-sm font-semibold'
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</Link>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="bg-slate-900 lg:hidden">
						<div className="space-y-1 px-8 py-4">
							{navigationWithCurrent.map(item => (
								<Link
									key={item.name}
									as="Link"
									href={item.href}
									className={classNames(
										item.current
											? 'bg-slate-900 text-white'
											: 'text-slate-300 hover:bg-slate-700 hover:text-teal-900',
										'block rounded-md px-3 py-2 font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
