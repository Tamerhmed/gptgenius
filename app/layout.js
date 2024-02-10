import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Tours with GPT',
	description:
		'Set off on an exploration journey with GPT, plunging into an array of captivating tours customized to your preferences.',
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html
				lang='en'
				data-theme='winter'
			>
				<body className={inter.className}>
					<Providers>{children}</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
