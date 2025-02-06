import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, TagIcon, UserIcon } from "lucide-react";
import BlogPostContent from "./blog-post-content";
import AsideBlog from "./aside";


export default function SingleBlog({ data }) {
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Button variant="outline" className={cn('mb-6 rounded-md')} asChild>
        <Link href="/blog" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Volver al blog
        </Link>
      </Button>

      <div className="flex flex-col lg:flex-row gap-8">
        <main className="flex-grow max-w-4xl">
          <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src={data.feature_img[0].url || "https://picsum.photos/1000"}
                alt="Imagen principal del blog post"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{data?.title}</h1>
              <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6 gap-4">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <time dateTime={data?.date}>{new Date(data?.date).toLocaleDateString()}</time>
                </div>
                <div className="flex items-center">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>{data?.author}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  <span>{data?.readTime || "5 min read"}</span>
                </div>
                <div className="flex items-center">
                  <TagIcon className="w-4 h-4 mr-2" />
                  <span>{data?.category || "Tecnología"}</span>
                </div>
              </div>
              <div className="max-w-none">
                <BlogPostContent content={data?.content} />
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
               
              </div>
            </div>
          </article>
        </main>
        <AsideBlog />
      </div>
    </div>
  );
}
