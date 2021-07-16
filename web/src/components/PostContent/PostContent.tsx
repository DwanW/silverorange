import marked from 'marked';
import { Post } from '../../../../api/src/data/posts';

interface PostContentProps {
  post: Post;
  resetCurrentPost: () => void;
}

function PostContent({ post, resetCurrentPost }: PostContentProps) {
  return (
    <div className="container">
      <button className="return-button" onClick={() => resetCurrentPost()}>
        &#10094; Return
      </button>
      {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
      <div dangerouslySetInnerHTML={{ __html: marked(post.body) }} />
    </div>
  );
}

export default PostContent;
