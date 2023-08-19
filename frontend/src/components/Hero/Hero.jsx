// Icons
import { RiCheckboxBlankCircleLine, RiPlayFill } from 'react-icons/ri';

const Hero = () => {
	return (
		<section
			id='home'
			className='min-h-[90vh] grid grid-cols-1 ml:grid-cols-8 imageBanner p-9 '
		>
			<div className=' md:col-span-8 flex items-center m-8'>
				<div className='flex flex-col gap-4'>
					<h1 className='text-2xl text-white md:text-4xl md:font-bold md:text-black md:ml-6 '>
						Preparing Students For
						<span className='font-bold underline p-2 md:no-underline md:border-8 md:ml-5 md:text-primary md:border-primary md:relative'>
							Successful Future
							<RiCheckboxBlankCircleLine className='hidden md:block text-gray-400 text-4xl absolute -left-6 -top-6 p-3 bg-primary rounded-full box-border' />
							<RiCheckboxBlankCircleLine className='hidden md:block text-gray-400 text-4xl absolute -right-6 -top-6 p-3 bg-primary rounded-full box-border' />
							<RiCheckboxBlankCircleLine className='hidden md:block md:text-gray-400 text-4xl absolute -left-6 -bottom-6 p-3 bg-primary rounded-full box-border' />
							<RiCheckboxBlankCircleLine className='hidden md:block text-gray-400 text-4xl absolute -right-6 -bottom-6 p-3 bg-primary rounded-full box-border' />
						</span>
					</h1>
					<p className='text-black md:ml-6 md:pt-9 md:text-2xl md:text-white md:w-8/12'>
						Open your doors to the world with us: Learn, Grow, Shine in Two
						Languages.!
					</p>
					<p className='md:ml-6 pt-9 flex flex-col md:flex-row items-center gap-9 justify-end'>
						<button className='w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl'>
							Contact Us
						</button>
						<button className='bw-full xl:w-auto flex items-center justify-start text-left gap-3 px-2 text-xl'>
							<RiPlayFill className='text-primary p-1 bg-white rounded-full box-content' />
							<p className='text-white'>
								Watch our <br /> introduction video
							</p>
						</button>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
