'use client'
import courseData from "../data/music_data.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient";
interface Course{
        id: number,
        title: string,
        slug: string,
        description:string,
        price:number,
        instructor: string,
        isFeatured: boolean
}
export default function FeaturedSection() {
   const featuredCourses= courseData.courses.filter((course:Course)=>course.isFeatured)
    return (
        <div className="py-10 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className="my-10 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=>(
                    <div key={course.id} className="flex justify-center mx-8">
                         <BackgroundGradient className="rounded-[22px] max-w-sm h-full p-4 sm:p-10 bg-white dark:bg-zinc-900 overflow-hidden">
                            <div className="flex items-center justify-center flex-col">
                                <p className="text-lg sm:text-xl dark:text-neutral-200 font-semibold mb-5">{course.title}</p>
                                <p className="mb-5 text-sm text-neutal-600 dark:text-neutral-200 tracking-wide font-medium">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}
                                 className="px-3 py-1 rounded-md border border-neutral-400  bg-gray-900 hover:bg-gray-800 transition duration-200 font-medium text-white"
                                >Learn More</Link>
                            </div>
                         </BackgroundGradient>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <Link href={"/courses"}
                    className="px-4 py-2 rounded-md border border-neutral-400  bg-gray-900 hover:bg-gray-800 transition duration-200 font-semibold text-white" >
                    View All Courses
                </Link>
            </div>
        </div>
    )
}