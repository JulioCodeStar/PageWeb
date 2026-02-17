import { SingleBlog } from "@/components/singleBlog";
import configAxios from "@/config/configAxios";

export async function getStaticPaths() {
  try {
    const respuesta = await configAxios.get("blogs");
    const paths = (respuesta?.data?.data ?? []).map((blog) => ({
      params: { id: blog.slug.split("/").pop() },
    }));

    return {
      paths,
      fallback: "blocking", // ✅ no rompe build si falta algún post / API intermitente
    };
  } catch (error) {
    // ✅ si API está caída en build, no te tumba el deploy
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params: { id } }) {
  try {
    const res = await configAxios.get(
      `blogs?filters[slug][$eq]=/blog/${id}&populate=*`
    );

    const item = res?.data?.data?.[0] ?? null;

    if (!item) {
      return { notFound: true, revalidate: 60 };
    }

    return {
      props: { data: item },
      revalidate: 60,
    };
  } catch (error) {
    // Mejor que mostrar “Error: …” al usuario final:
    return { notFound: true, revalidate: 60 };
  }
}

export default function BlogPost({ data }) {
  return <SingleBlog data={data} />;
}
