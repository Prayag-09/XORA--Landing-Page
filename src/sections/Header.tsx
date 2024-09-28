import clsx from 'clsx';
import { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

type NavLinkProps = {
	title: string;
};

const NavLink: React.FC<NavLinkProps> = ({ title }) => {
	return (
		<LinkScroll
			to={title}
			smooth={true}
			duration={500}
			className='base-bold text-p4 uppercase transition-color cursor-pointer hover:text-p1 duration-500 max-lg:my-4 max-lg:h-5'>
			{title}
		</LinkScroll>
	);
};

const Header = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='fixed top-0 left-0 z-50 w-full py-10'>
			<div className='container flex h-14 items-center max-lg:px-5 '>
				<a className='lg:hidden flex-1 cursor-pointer z-2'>
					<img src='/images/xora.svg' alt='XORA Logo' width={115} height={55} />
				</a>
				<div
					className={clsx(
						'w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0',
						isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none'
					)}>
					<div className='w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebae-before max-md:px-4'>
						<nav className='max-lg:relative max-lg:z max-lg:my-auto'>
							<ul className='flex max-lg:block max-lg:px-12'>
								<li className='nav-li'>
									<NavLink title='feature' />
									<div className='dot' />
									<NavLink title='pricing' />
								</li>

								<li className='nav-logo'>
									<LinkScroll
										to='hero'
										offset={-100}
										smooth={true}
										spy
										className={clsx(
											'max-lg:hidden transition-transform duration-500 cursor-pointer'
										)}>
										<img
											src='/images/xora.svg'
											width={160}
											height={55}
											alt='logo'
										/>
									</LinkScroll>
								</li>

								<li className='nav-li'>
									<NavLink title='faq' />
									<div className='dot' />
									<NavLink title='download' />
								</li>
							</ul>
						</nav>

						<div className='lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90 '>
							<img
								src='/images/bg-outlines.svg'
								width={960}
								height={380}
								alt='outline'
								className='relative z-2'
							/>

							<img
								src='/images/bg-outlines-fill.png'
								width={960}
								height={380}
								alt='outline'
								className=' absolute inset-0 mix-blend-soft-light opacity-5 '
							/>
						</div>
					</div>
				</div>

				{/* Hamburger Icon */}
				<button
					className='lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center'
					onClick={() => setIsOpen((prevState) => !prevState)}>
					<img
						src={`/images/${isOpen ? 'close' : 'magic'}.svg`}
						alt='magic'
						className='size-1/2 object-contain'
					/>
				</button>
			</div>
		</header>
	);
};
export default Header;
