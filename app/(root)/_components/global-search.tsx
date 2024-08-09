'use client'

import ModeToggle from '@/components/shared/mode-toggle'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks, popularCategories, popularTags } from '@/constant'
import { cn } from '@/lib/utils'
import { getSearchBlogs } from '@/service/blog.service'
import { IBlog } from '@/types'
import { AlignRight, Loader2, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { debounce } from 'lodash'
import SearchCard from '@/components/cards/search'

function GlobalSearch() {
	const [isLoading, setIsLoading] = useState(false)
	const [blogs, setBlogs] = useState<IBlog[]>([])
	const pathName = usePathname()

	const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value.toLowerCase()

		if (text && text.length > 2) {
			setIsLoading(true)
			const data = await getSearchBlogs(text)
			setBlogs(data)
			setIsLoading(false)
		} else {
			setBlogs([])
			setIsLoading(false)
		}
	}

	const debunseSearch = debounce(handleSearch, 500)

	return (
		<Sheet>
			<SheetTrigger>
				<AlignRight />
			</SheetTrigger>
			<SheetContent className='pt-[42px]'>
				<SheetHeader>
					<div className='flex gap-3 md:hidden border-b pb-4'>
						{navLinks.map(nav => (
							<Link
								href={nav.route}
								key={nav.id}
								className={cn(
									`hover:bg-blue-300/20 py-1 px-[4px] md:px-3 cursor-pointer rounded-sm transition-colors font-medium text-[13.5px]`,
									pathName === nav.route && 'bg-blue-300/20'
								)}
							>
								{nav.name}
							</Link>
						))}
					</div>
					<div className='flex items-center justify-between py-2 gap-2'>
						<div className='relative'>
							<div className='grid w-full max-w-sm items-center gap-2'>
								<Input
									type='search'
									className='pl-10 w-full md:w-[250px]'
									id='search'
									placeholder='Search'
									onChange={debunseSearch}
									disabled={isLoading}
								/>
							</div>
							<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
								<Search className='w-5 h-5' />
							</div>
						</div>
						<ModeToggle />
					</div>
					{isLoading && <Loader2 className='animate-spin mt-4 mx-auto' />}
					{blogs.length ? (
						<div className='text-base font-sourceSans mt-7'>
							{blogs.length} Results Found.
						</div>
					) : null}
				</SheetHeader>
				<div className='flex flex-col space-y-2'>
					<div className='flex flex-wrap gap-2'>
						{blogs &&
							blogs.map(blog => <SearchCard key={blog.slug} {...blog} />)}
					</div>
				</div>
				<div className='flex flex-col space-y-2 mt-4'>
					<p className='font-poppins text-base md:text-lg'>
						Kategoriya orqali qidirish.
					</p>
					<div className='flex flex-wrap gap-2'>
						{popularCategories.map(item => (
							<Badge key={item.slug} variant={'secondary'}>
								{item.name}
							</Badge>
						))}
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default GlobalSearch
