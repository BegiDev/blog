import type { Metadata } from 'next'
import { Poppins, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { ChildProps } from '@/types'
import { ThemeProvider } from '@/components/providers/theme-provider'

const poppins = Poppins({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-poppins',
})

const sourceSans = Source_Sans_3({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-source-sans-3',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://begidev.uz'),
	title: "Begzod's blog",
	description: 'BegiDev - Dasturlashga oid maqolalar.',
	authors: [{ name: 'Begzod Abduhamidov', url: 'https://begidev.uz' }],
	icons: { icon: '/favicon.png' },
	keywords:
		"begzod abduhamidov, begzod, abduhamidov, dasturlash haqida bloglar, begidev, dev, begi, bloglar, o'zbekcha bloglar, IT loyhalar, dasturlashni o'rganish, Begzod Abduhamidov, rezume yozish, portfolio, Begi raqamli avlod, Front-end haqida, Back-end haqida o'zbekcha videolar, Dasturlashni qanday o'rganish kerak, Dasturlash nima ?, Dasturchi kim, Yaxshi code yozish, begzod.",
	openGraph: {
		title: 'Begzod`s blog',
		description: 'BegiDev - Dasturlashga oid maqolalar.',
		type: 'website',
		url: 'https://begidev.uz',
		locale: 'en-EN',
		images: '',
		countryName: 'Uzbekistan',
		siteName: 'BegiDev',
		emails: 'abdukhamidov0904@gmail.com',
	},
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${poppins.variable} ${sourceSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
