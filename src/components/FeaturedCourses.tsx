'use client'
import Link from "next/link"
import courseData from "@/data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course{
        id: number,
        title  : string,
        slug: string, 
        description:string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        image: string 
}
export default function FeaturedCourses(){
    const featuredCourses= courseData.courses.filter((course:Course)=> course.isFeatured)
    return(
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-800 font-semibold
                    tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8
                    font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b
                    from-neutral-50 to-neutral-400 sm:text-4xl">Learn With the Best</p></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 
            lg:grid-cols-3 gap-8 justify-center mx-5 my-6">
                {featuredCourses.map((course:Course)=>(
                    <div key={course.id} className="flex justify-center " >
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white
                         dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <p className="text-lg sm:text-xl
                            text-black mt-4 mb-2 dark:text-neutral-200 text-center text-">{course.title}</p>
                            <p className="text-sm text-neutral-600
                             dark:text-neutral-400 flex-grow text-center">{course.description}</p>
                            <Link href={`/courses/${course.slug}`} className="text-white mt-6">Learn More</Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}
                className="px-4 py-2 rounded border border-neutral-500
                 text-gray-400 bg-gray-900 hover:bg-gray-100 
                 transition duration-200">
                 View All Courses
                </Link>
            </div>
        </div> 
    )
}