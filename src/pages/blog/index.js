import { BlogGrid, HeroBannerSection } from "@/components/blog";
import { BlogSkeleton } from "@/components/blog/_components/BlogGrid/skeleton";
import configAxios from "@/config/configAxios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Blog() {
  const router = useRouter();
  const [currentData, setCurrentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const page = parseInt(router.query.page) || 1;

  const fetchData = async (pageNumber) => {
    setLoading(true);
    try {
      const res = await configAxios.get(
        `blogs?pagination[page]=${pageNumber}&pagination[pageSize]=6&fields[0]=date&fields[1]=title&fields[2]=author&fields[3]=excert&fields[4]=slug&populate=*`
      );
      setCurrentData(res.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handlePageChange = async (newPage) => {
    await fetchData(newPage);
    router.push(`/blog?page=${newPage}`, undefined, { shallow: true });
  };

  if (loading || !currentData?.meta) return (
    <>
      <HeroBannerSection />
      <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <BlogSkeleton />
        </div>
      </section>
    </>
  );

  return (
    <>
      <HeroBannerSection />
      <BlogGrid data={currentData} onPageChange={handlePageChange} />
    </>
  );
}
