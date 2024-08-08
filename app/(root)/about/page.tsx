import { Badge } from '@/components/ui/badge'
import { learningTechnology } from '@/constant'

function AboutMe() {
	return (
		<div className='container max-w-full md:max-w-[670px] mx-auto mt-[85px]'>
			<h1 className='text-center text-4xl font-normal'>Men haqimda</h1>
			<div className='border-t mt-6 font-sourceSans font-normal leading-7'>
				<h3 className='mt-4 text-base'>
					Hammaga salom, mening ismim Begzod. Jizzax shahrida 200*-yil
					tug'ilganman. Hozirda Front-end dasturchiman, dasturlashga 2022-yil
					kuz oylarida kirib kelganman. Dasturlashni self-study o'rganganman va
					o'rganib kelmoqdaman.
				</h3>
				<div className='mt-5'>
					<h4 className='font-medium '>O`rgangan texnalogyalarim:</h4>
					<div className='mt-2'>
						{learningTechnology.map(item => (
							<Badge
								variant={'destructive'}
								key={item.name}
								className='mr-2 px-3 py-1'
							>
								{item.name}
							</Badge>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
