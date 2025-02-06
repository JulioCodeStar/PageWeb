import configAxios from "@/config/configAxios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AsideBlog() {
  const [CurrentData, setCurrentData] = useState([]);

  const fecthData = async () => {
    try {
      const res = await configAxios.get(
        "blogs?pagination[pageSize]=6&fields[0]=date&fields[1]=title&fields[2]=author&fields[3]=excert&fields[4]=slug"
      );
      console.log(res.data.data);
      
      setCurrentData(res.data.data);
    } catch (error) {
      console.log("Error de petición: " + error.message);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <aside className="md:w-[900px]">
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-xl shadow-lg sticky top-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Otros Posts
          </h2>
          <ul className="space-y-2">
            {CurrentData?.map((post) => (
              <li key={post.id}>
                <Link
                  href={`${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
