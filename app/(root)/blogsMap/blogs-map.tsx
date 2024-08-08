import { IBlog } from '@/types'
import { CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { getReadingTime } from '@/lib/utils'

function BlogsMap(blog: IBlog) {
	return (
		<div className='container max-w-full md:max-w-[1000px] mx-auto'>
			<Link
				href={`blog/${blog.slug}`}
				className='grid gap-4 group grid-cols-1 md:grid-cols-2 items-center'
			>
				<div className='relative rounded-md flex items-center justify-center'>
					<Image
						width={600}
						height={300}
						src={blog.image.url}
						alt={blog.title}
						className='rounded-md bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-75 w-full h-full object-cover'
					/>
				</div>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-4 font-poppins'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='w-5 h-5' />
							<p>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<Clock className='w-5 h-4' />
							<p>{getReadingTime(blog.content.html)} min o`qidi</p>
						</div>
					</div>

					<h2 className='text-[28px] leading-9 max-md:text-2xl font-poppins font-medium group-hover:opacity-75 pb-1 md:pb-[13.5px] break-words'>
						{blog.title}
					</h2>

					<p className='text-muted-foreground line-clamp-3 font-sourceSans font-normal'>
						{blog.description}
					</p>
				</div>
			</Link>
		</div>
	)
}

export default BlogsMap
