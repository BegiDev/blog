import { IBlog } from '@/types'
import { format } from 'date-fns'
import { CalendarDays } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function SearchCard(blog: IBlog) {
	return (
		<div>
			<Link href={`/blog/${blog.slug}`}>
				<div className='flex flex-col space-y-2 mt-4'>
					<div className='flex flex-wrap gap-2'>
						<Image
							src={blog.image.url}
							width={300}
							height={200}
							alt={blog.description}
							className='w-full'
						/>

						<h1 className='w-full text-[19px] md:text-2xl'>{blog.title}</h1>

						<CalendarDays className='w-4 h-4' />

						<p className='text-sm'>
							{format(new Date(blog.createdAt), 'MMM dd, yyyy')}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default SearchCard
