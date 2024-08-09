'use client'

import { useEffect, useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import {
	CalendarDays,
	Clock,
	Facebook,
	Link2,
	Linkedin,
	Minus,
	Send,
	Twitter,
} from 'lucide-react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { getDetailedBlog } from '@/service/blog.service'
import { getReadingTime } from '@/lib/utils'
import { format } from 'date-fns'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

function SlugPage({ params }: { params: { slug: string } }) {
	const [blog, setBlog] = useState<any>(null)
	const [loading, setLoading] = useState(true)
	const [showAlert, setShowAlert] = useState(false)

	const handleCopyLink = useCallback(() => {
		const siteUrl = window.location.href
		navigator.clipboard.writeText(siteUrl)
		setShowAlert(true)
		setTimeout(() => setShowAlert(false), 3000) // Hide alert after 3 seconds
	}, [])

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const data = await getDetailedBlog(params.slug)
				setBlog(data)
			} catch (error) {
				console.error('Error fetching blog:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchBlog()
	}, [params.slug])

	if (loading) {
		return <p>Loading...</p>
	}

	if (!blog) {
		return <p>No blog found.</p>
	}

	return (
		<div className='pt-[15vh] max-w-5xl mx-auto container'>
			<h1 className='text-3xl md:text-4xl font-poppins font-medium'>
				{blog.title}
			</h1>

			<Image
				src={blog.image.url}
				alt='author'
				width={1000}
				height={100}
				className='mt-4 rounded-md'
			/>
			<div className='flex flex-wrap justify-start gap-3 mt-4'>
				<div className='flex items-center gap-2'>
					<Clock className='w-5 h-5' />
					<p>{getReadingTime(blog.content.html)} min read</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-5 h-5' />
					<p>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</p>
				</div>
			</div>

			<div className='flex md:gap-12 max-md:flex-col-reverse relative mt-6'>
				<div className='flex flex-col space-y-3'>
					<div className='sticky top-36 mt-4 md:mt-0'>
						<p className='text-lg uppercase text-muted-foreground font-poppins'>
							Ulashish
						</p>
						<div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
							<Button size={'icon'} variant={'outline'}>
								<Twitter />
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Facebook />
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Linkedin />
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Send />
							</Button>
							<Button
								size={'icon'}
								variant={'outline'}
								onClick={handleCopyLink}
							>
								<Link2 />
							</Button>
						</div>
					</div>
				</div>
				<div className='flex-1 prose max-w-none dark:prose-invert'>
					{parse(blog.content.html)}
				</div>
			</div>

			{showAlert && (
				<div className='fixed bottom-4 right-4 p-4 text-white rounded-md shadow-lg'>
					<Alert>
						<Link2 className='h-4 w-4' />
						<AlertTitle>Link Nushalandi</AlertTitle>
					</Alert>
				</div>
			)}
		</div>
	)
}

export default SlugPage
