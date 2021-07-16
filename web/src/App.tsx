import { useState, useEffect } from 'react';
import './App.css';
import { getUniqueAuthorsFromPosts } from './util';
import { Post } from '../../api/src/data/posts';
import PostContent from './components/PostContent/PostContent';
import PostItem from './components/PostItem/PostItem';

export function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState('');
  const [authorFilter, setAuthorFilter] = useState<string>('');
  const [currentPost, setCurrentPost] = useState<Post | undefined>(undefined);

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then((response) => {
        if (!response.ok) {
          throw Error(
            'Fetch Data failed due to a wild error occurring, refresh and try again'
          );
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setFetchError(error.message);
        setIsLoading(false);
      });
  }, []);

  const resetCurrentPost = () => {
    setCurrentPost(undefined);
  };

  const selectCurrentPost = (post: Post) => {
    setCurrentPost(post);
  };

  if (currentPost) {
    return (
      <PostContent post={currentPost} resetCurrentPost={resetCurrentPost} />
    );
  }

  return (
    <div className="container menu">
      <div className="posts">
        {isLoading && <div className="status">Loading posts...</div>}
        {fetchError && <div className="status">{fetchError}</div>}
        {posts.length > 0 &&
          posts
            .filter((post) =>
              authorFilter ? post.author.id === authorFilter : true
            )
            .sort(
              (a, b) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
            )
            .map((post) => (
              <PostItem
                key={post.id}
                selectCurrentPost={selectCurrentPost}
                post={post}
              />
            ))}
      </div>
      <div className="filter-list">
        {posts.length > 0 && <h4>Filter by</h4>}
        {getUniqueAuthorsFromPosts(posts).map((author, index) => (
          <div key={author.id}>
            <button
              className={`button ${
                authorFilter === author.id ? 'selected' : ''
              }`}
              onClick={() => setAuthorFilter(author.id)}
            >
              {author.name}
            </button>
          </div>
        ))}
        {posts.length > 0 && authorFilter && (
          <button className="button remove" onClick={() => setAuthorFilter('')}>
            Remove Filter
          </button>
        )}
      </div>
    </div>
  );
}
