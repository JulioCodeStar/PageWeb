import { SingleBlog } from "@/components/singleBlog";
import configAxios from "@/config/configAxios";

export async function getStaticPaths() {
  const respuesta = await configAxios.get("blogs");
  const paths = respuesta.data.data.map((blog) => ({
    params: {
      id: blog.slug.split("/").pop(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  try {
    const res = await configAxios.get(
      `blogs?filters[slug][$eq]=/blog/${id}&populate=*`
    );
    return {
      props: {
        data: res.data.data[0] || null,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: error.message,
      },
    };
  }
}

export default function BlogPost({ data, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <SingleBlog data={data} />
    </>
  );
}
