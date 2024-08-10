import { getDetailedBlog } from '@/service/blog.service'

export async function generateMetadata({
	params,
}: {
	params: { slug: string }
}) {
	try {
		const blog = await getDetailedBlog(params.slug)

		if (!blog) {
			return {
				title: 'Blog Not Found',
				description: 'The blog you are looking for does not exist.',
			}
		}

		return {
			title: blog.title,
			description: blog.description || 'Read more about this blog.',
			openGraph: {
				title: blog.title,
				description: blog.description || 'Read more about this blog.',
				images: [
					{
						url: blog.image.url,
						alt: blog.title,
					},
				],
			},
		}
	} catch (error) {
		console.error('Error generating metadata:', error)
		return {
			title: 'Error',
			description: 'An error occurred while generating the metadata.',
		}
	}
}
