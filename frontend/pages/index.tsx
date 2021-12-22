import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import PostCard from "../components/PostCard";

interface Post {
  id: number;
  attributes: {
    title: string;
    content: string;
    publishedAt: any;
  }
}

interface PostJsonResponse {
  data: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("http://localhost:1337/api/posts", {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Post[] = response.data.data;

  return {
    props: {
      data,
    },
  };
};

const IndexView = ({ data }: PostJsonResponse) => {
  const router = useRouter();
  const toPostView = (id: number) => router.push(`/posts/${id}`);
  const posts = data.map((post) => (
    <PostCard
      key={post.id}
      title={post.attributes.title}
      publishedAt={post.attributes.publishedAt}
      onClick={() => toPostView(post.id)}
    />
  ));

  return (
    <>
      <div>
        <h1>My Blog</h1>

        <p>
          {posts}
        </p>
      </div>
    </>
  );
};

export default IndexView;