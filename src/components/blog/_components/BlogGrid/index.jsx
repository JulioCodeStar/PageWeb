import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const blogPosts = [
  {
    id: 1,
    title: "Avances en Prótesis Biónicas",
    excerpt:
      "Descubre los últimos avances en tecnología de prótesis y cómo están cambiando vidas.",
    author: "KYP Bioingeniería",
    date: "12 Dec 2024",
    image: "https://placehold.co/920x613/png",
    slug: "avances-protesis-bionicas",
  },
  {
    id: 2,
    title: "Rehabilitación Post Protésica",
    excerpt:
      "Guía completa sobre el proceso de rehabilitación después de recibir una prótesis.",
    author: "KYP Bioingeniería",
    date: "10 Dec 2024",
    image: "https://placehold.co/920x613/png",
    slug: "rehabilitacion-post-protesica",
  },
  {
    id: 3,
    title: "Innovación en Materiales Protésicos",
    excerpt:
      "Nuevos materiales que están revolucionando la industria de las prótesis.",
    author: "KYP Bioingeniería",
    date: "8 Dec 2024",
    image: "https://placehold.co/920x613/png",
    slug: "innovacion-materiales-protesicos",
  },
  {
    id: 4,
    title: "Innovación en Materiales Protésicos",
    excerpt:
      "Nuevos materiales que están revolucionando la industria de las prótesis.",
    author: "KYP Bioingeniería",
    date: "8 Dec 2024",
    image: "https://placehold.co/920x613/png",
    slug: "innovacion-materiales-protesicos",
  },
  {
    id: 5,
    title: "Innovación en Materiales Protésicos",
    excerpt:
      "Nuevos materiales que están revolucionando la industria de las prótesis.",
    author: "KYP Bioingeniería",
    date: "8 Dec 2024",
    image: "https://placehold.co/920x613/png",
    slug: "innovacion-materiales-protesicos",
  },
  {
    id: 6,
    title: "Innovación en Materiales Protésicos",
    excerpt:
      "Nuevos materiales que están revolucionando la industria de las prótesis.",
    author: "KYP Bioingeniería",
    date: "8 Dec 2024",
    image: "https://placehold.co/920x613/png",
    slug: "innovacion-materiales-protesicos",
  },
  {
    id: 7,
    title: "Innovación en Materiales Protésicos",
    excerpt:
      "Nuevos materiales que están revolucionando la industria de las prótesis.",
    author: "KYP Bioingeniería",
    date: "8 Dec 2024",
    image: "https://placehold.co/920x613/png",
    slug: "innovacion-materiales-protesicos",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={item}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={920}
                  height={613}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Aquí puedes agregar la paginación cuando la implementes */}
        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={`${
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }`}
                />
              </PaginationItem>

              {[...Array(totalPages)].map((_, i) => {
                const pageNumber = i + 1;
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 &&
                    pageNumber <= currentPage + 1)
                ) {
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        onClick={() => handlePageChange(pageNumber)}
                        isActive={currentPage === pageNumber}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return <PaginationEllipsis key={pageNumber} />;
                }
                return null;
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`${
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
}
