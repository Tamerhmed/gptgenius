
import Link from 'next/link'

export default function Home() {
  return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content lg:max-w-2xl text-left'>
				<div className='max-w-2xl'>
					<h1 className='text-6xl font-semibold text-primary mb-2'>
						Explore <span className='block mt-2'>Tours with GPT</span>
					</h1>
					<p className='py-8 text-xl leading-8'>
						Set off on an exploration journey with GPT, plunging into an array
						of captivating tours customized to your preferences. Discover hidden
						treasures, immerse yourself in diverse cultures, and craft
						unforgettable memories as you journey alongside GPT, your steadfast
						companion.
					</p>
					<Link
						href='/chat'
						className='btn btn-secondary px-10 text-lg tracking-wide capitalize'
					>
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
}
