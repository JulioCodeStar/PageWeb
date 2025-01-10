import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const blogs = [
  {
    img: "https://placehold.co/920x613/jpg",
    date: "12 Jan 2022",
    ncoment: "03 Comt",
    title: "How do Inherited Retinal of Diseases Happen?",
    description: "Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.",
    href: "#",
  },
  {
    img: "https://placehold.co/920x613/jpg",
    date: "11 Jan 2022",
    ncoment: "0 Comt",
    title: "Prepare to Speak with Your Eye Specialist.",
    description: "Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.",
    href: "#",
  },
  {
    img: "https://placehold.co/920x613/jpg",
    date: "11 Jan 2022",
    ncoment: "02 Comt",
    title: "How reliece can help you manage diabetes",
    description: "Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.",
    href: "#",
  },
];

export function BlogSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-blue-800 sm:text-base lg:text-xl">
            Nuestro Blog
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Artículos recientes sobre prótesis y{" "}
            <span className="block">sus usuarios</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg group"
            >
              <div className="overflow-hidden rounded-t-xl">
                <Image
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  src={blog.img}
                  alt={blog.title}
                  width={920}
                  height={613}
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <time dateTime="2022-01-12">{blog.date}</time>
                  <span aria-hidden="true">•</span>
                  <span>{blog.ncoment}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  <Link href={blog.href} className="hover:underline">
                    {blog.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {blog.description}
                </p>
                
                <Link
                  href={blog.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  Ver más
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}