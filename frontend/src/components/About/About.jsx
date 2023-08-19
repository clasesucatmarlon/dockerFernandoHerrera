import AboutImage1 from '../../assets/images/AboutImage1.png';
import img1 from '../../assets/images/fondo_01.avif';
import img2 from '../../assets/images/fondo_02.avif';
import img3 from '../../assets/images/fondo_03.avif';
import {
	RiCheckFill,
	RiStarFill,
	RiCheckboxBlankCircleFill,
} from 'react-icons/ri';

RiCheckFill;

const About = () => {
	return (
		<>
			<section
				id='about'
				className='min-h-[50vh] grid grid-cols-1 xl:grid-cols-12 '
			>
				<h2 className='md:col-span-12 flex justify-center mt-9 text-[2rem] font-bold'>
					ABOUT US
				</h2>
				<h3 className='md:col-span-12 flex justify-center text-[.8rem]'>
					FUSCE SED IACULIS ORCI ET VULPUTAT E ARCU. SED NON MAGNA
				</h3>
				<div className='md:col-span-2 flex items-center justify-center mt-11 '></div>

				{/* aqui */}
				<div className='md:col-span-3 flex items-center justify-center relative'>
					{/* Content image */}
					<div>
						<img
							src={AboutImage1}
							className='w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-cover'
						/>
						<div className='relative bg-white shadow-xl rounded-sm p-3 flex flex-col justify-center max-w-[170px] mx-auto -mt-12'>
							<div className='flex items-center'>
								<img
									src='https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg'
									className='w-6 h-6 object-cover rounded-full ring-2 ring-gray-300'
								/>
								<img
									src='https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg'
									className='w-6 h-6 object-cover rounded-full ring-2 ring-gray-300 -ml-3'
								/>
								<img
									src='https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg'
									className='w-6 h-6 object-cover rounded-full ring-2 ring-gray-300 -ml-3'
								/>
								<img
									src='https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg'
									className='w-6 h-6 object-cover rounded-full ring-2 ring-gray-300 -ml-3'
								/>
								<img
									src='https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg'
									className='w-6 h-6 object-cover rounded-full ring-2 ring-gray-300 -ml-4'
								/>
							</div>
							<h2
								className='font-bold text-[.8epale mijo
                                bien
                                rem] text-gray-800'
							>
								125+ Students
							</h2>
							<div className='flex items-center gap-2 text-gray-500'>
								<RiStarFill className='text-primary text-[1rem] ' />{' '}
								<span className='text-[.7rem]'>4.8 (1.1k Reviews)</span>
							</div>
							<div className='absolute -right-10 -bottom-10 -z-10'>
								<div className='relative'>
									<RiCheckboxBlankCircleFill className='text-primary text-7xl' />
									<div className='absolute left-0 top-0 bg-white w-9 h-9'></div>
								</div>
							</div>
						</div>
					</div>
					{/* Circle */}
					<div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[180px] h-[180px] md:w-[220px] md:h-[220px] bg-white border-[10px] border-primary rounded-full -z-10'></div>

					{/* Logos */}
					<img
						src={img1}
						className='w-6 h-6 md:w-10 md:h-10 object-cover rounded-full border-l-8 border-gray-600 absolute top-[12%] right-[20%] xl:right-[10%]'
					/>
					<img
						src={img2}
						className='w-6 h-6 md:w-10 md:h-10 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]'
					/>
					<img
						src={img3}
						className='w-6 h-6 md:w-10 md:h-10 object-cover rounded-full absolute bottom-[5%] left-[15%] xl:left-[3%] -rotate-12'
					/>
				</div>

				{/* aqui */}

				{/* <div className='md:col-span-3 flex items-center justify-center mt-11 '>
					<img src={AboutImage} alt='About imamge' className='w-[60%] shadow-xl' />
				</div> */}

				<div className='flex flex-col md:col-span-7 flex justify-center mt-11 pr-[9.5rem] '>
					<p>
						Lorem ipsum dolor sit amet, con sectetur adipiscing esce sed iaculis
						orci, et vulputate arcu. Sed non magna a tortor tempus rhoncus. In
						ullamcorper magna quis placerat tristi que. Fusce dapibus risus sed
						mauri:
					</p>
					<p>
						<span className='flex items-center gap-4'>
							<RiCheckFill />
							VULPUTATE ARCUED NON MAGNA.
						</span>
						<span className='flex items-center gap-4'>
							<RiCheckFill />
							LOREM IPSUM DOLOR SIT AMET.
						</span>
						<span className='flex items-center gap-4'>
							<RiCheckFill />
							SED NON MAGNA A TORTOR TEMPUS RHONCUS.
						</span>
						<span className='flex items-center gap-4'>
							<RiCheckFill />
							FUSCE DAPIBUS RISUS SED MAURI.
						</span>
					</p>
				</div>
			</section>
		</>
	);
};

export default About;
