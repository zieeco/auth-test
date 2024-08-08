import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/auth/Navbar';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Authorization Code Flow with Next.js and NextAuth.js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
