import { GetStaticPaths } from "next";
import { Post } from "../../models/Post";
import axios from "axios";

export type PostDetailViewProps = {
  post: Post;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get("https://aqueous-brook-44756.herokuapp.com/api/posts");
    const posts: Post[] = await response.data.data;
  
    const paths = posts.map((post) => {
      return {
        params: { id: String(post.id) },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  };
export async function getStaticProps({ params }) {
    const { data } = await axios.get(`https://aqueous-brook-44756.herokuapp.com/api/posts/${params.id}`);

    return {
        props: {
            post: data.data.attributes,
        },
    };
}


const PostDetailView = ({ post }: PostDetailViewProps) => {

  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </>
  );
};

export default PostDetailView;