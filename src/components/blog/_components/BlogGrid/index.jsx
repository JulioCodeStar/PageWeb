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

const getImageUrl = (feature_img) => {
  if (Array.isArray(feature_img) && feature_img.length > 0) {
    const img = feature_img[0];
    if (img.formats && img.formats.small) {
      return img.formats.small.url;
    }
    return img.url;
  }
  return "https://placehold.co/900/png"; // Fallback to a placeholder image
};

export function BlogGrid({ data, onPageChange }) {
  const { pagination } = data.meta;

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {data.data.map((post) => (
            <motion.article
              key={post.id}
              variants={item}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                <Image
                  src={getImageUrl(post.feature_img)}
                  alt={post.title}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-4 sm:p-6 space-y-3 sm:space-y-4">
                {/* Meta Info */}
                <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-600">
                  <span className="flex items-center">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
                    {post.author}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  <Link href={`${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 flex-grow">
                  {post.excert}
                </p>

                {/* CTA */}
                <Link
                  href={`${post.slug}`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group/link"
                >
                  Leer más
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <button
                  onClick={() =>
                    pagination.page > 1 && onPageChange(pagination.page - 1)
                  }
                  disabled={pagination.page <= 1}
                  className={`${pagination.page <= 1 ? "opacity-50" : ""}`}
                >
                  <PaginationPrevious />
                </button>
              </PaginationItem>

              {Array.from({ length: pagination.pageCount }).map((_, i) => (
                <PaginationItem key={i}>
                  <button
                    onClick={() => onPageChange(i + 1)}
                    className={`${
                      i + 1 === pagination.page ? "bg-blue-500 text-white" : ""
                    } px-3 py-2 rounded`}
                  >
                    {i + 1}
                  </button>
                </PaginationItem>
              ))}

              <PaginationItem>
                <button
                  onClick={() =>
                    pagination.page < pagination.pageCount &&
                    onPageChange(pagination.page + 1)
                  }
                  disabled={pagination.page >= pagination.pageCount}
                  className={`${
                    pagination.page >= pagination.pageCount ? "opacity-50" : ""
                  }`}
                >
                  <PaginationNext />
                </button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}
