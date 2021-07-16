import { Post } from '../../../../api/src/data/posts';

interface PostItemProps {
  post: Post;
  selectCurrentPost: (post: Post) => void;
}

function PostItem({ post, selectCurrentPost }: PostItemProps) {
  return (
    <div className="post-item" key={post.id}>
      <h4 className="post-title" onClick={() => selectCurrentPost(post)}>
        {post.title}
      </h4>
      <div>{post.author.name}</div>
      <div>
        {new Date(post.publishedAt).toLocaleDateString('en', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        {new Date(post.publishedAt).toLocaleTimeString('en')}
      </div>
    </div>
  );
}

export default PostItem;
