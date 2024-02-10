
import Link from 'next/link'

export default function Home() {
  return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<h1 className='text-6xl font-bold text-primary'>
						Explore tours with GPT
					</h1>
					<p className='py-6 text-lg leading-loose'>
						Set off on an exploration journey with GPT, plunging into an array
						of captivating tours customized to your preferences. Discover hidden
						treasures, immerse yourself in diverse cultures, and craft
						unforgettable memories as you journey alongside GPT, your steadfast
						companion.
					</p>
					<Link
						href='/chat'
						className='btn btn-secondary'
					>
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
}
