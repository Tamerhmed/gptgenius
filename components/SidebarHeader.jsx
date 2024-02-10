import { SiOpenaigym } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';

const SidebarHeader = () => {
	return (
		<div className='flex flex-col items-start justify-center mb-4 gap-8 px-4'>
			<div className='flex justify-center items-center gap-4'>
			<SiOpenaigym className='w-10 h-10 text-primary' />
			<h2 className='text-2xl  font-semibold text-primary mr-auto'>
				Tours with GPT
			</h2>
			</div>
			<ThemeToggle />
		</div>
	);
};

export default SidebarHeader;
