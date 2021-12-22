
export type PostCardProps = {
  title: string;
  publishedAt: string;
  onClick: VoidFunction;
};

const PostCard = ({ title, publishedAt, onClick }: PostCardProps) => {
  return (
    <>
      <div
        onClick={onClick}
      >
          <h2>
            {title}
          </h2>
          <button>Read More ..</button>
          <p>Published at {new Date(publishedAt).toLocaleDateString()}</p>
      </div>
    </>
  );
};

export default PostCard;