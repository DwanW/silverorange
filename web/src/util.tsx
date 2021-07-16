import { Post } from '../../api/src/data/posts';

export const getUniqueAuthorsFromPosts = (posts: Post[]) => {
  const authorArr = posts.map((post) => post.author);
  const idArray = authorArr.map((obj) => obj.id);

  // filter out duplicated author based on author id
  const uniqueAuthorArr = authorArr.filter(
    (authorObj, index) => idArray.indexOf(authorObj.id) === index
  );

  return uniqueAuthorArr;
};
