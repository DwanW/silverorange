# silverorange Intermediate Developer Assessment

This exercise is designed to assess how you approach tasks required in your
position as an intermediate developer at silverorange. We are interested to see
how you work as well, as what your final results are; include useful Git commit
messages and comments where you think your code may be unclear.

Please do not include your name or any other self-identifying information in
code or commit messages as silverorange will anonymize your work before
reviewing.

## Tasks

### React

Using the provided React application in `/web`:

1.  Fetch post data from the provided Express API.
2.  Display a list of posts. Include the post title, summary, author, and
    publish date in the list.
3.  The list of posts should be displayed in reverse chronological order.
4.  Also list each unique author. Make clicking an author filter the list of
    posts by the selected author.
5.  Make the title of each post in the list clickable. When you click a post
    title, display the formatted post body and title. The post body is
    formatted as Markdown and the post display should use the formatted
    Markdown.
6.  Implement basic snapshot regression tests tests using Jest for your
    components. Jest is installed by create-react-app and can be run from the
    `web/` folder with `yarn test`.

## Environment

You can use any stable version of Node JS. The base project is written using
TypeScript but you may use vanilla JavaScript to complete the tasks.

## Coding Standard

Please use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
for your code. The project is set up to lint your code using:

```sh
yarn lint
```

If your editor is not already configured to use Prettier, you can format code
in the project using:

```sh
yarn prettier-write
```

## Dependencies

Please use the [Yarn](https://yarnpkg.com/) or
[NPM](https://docs.npmjs.com/cli/npm) tools for dependency
management. You can use any 3rd-party libraries as necessary or as desired in
order to achieve the tasks. The project is currently set up to use Yarn but
you may update it to use NPM if that is your preference.

## Commits

Your commit history is important to us! Try to make meaningful commit messages
that show your progress. Remember to not include your name or any other
self-identifying information in your commit messages.

## Getting Started With the Express Backend (/api)

For this exercise a pre-built Express application is provided. The application
runs by default on `localhost:4000` and has the following endpoints:

- `http://localhost:4000/posts` - returns a JSON-encoded array of blog posts.

### Running the Express Application

```sh
cd api/
yarn install
yarn start
```

You can verify the API is working by visiting http://localhost:4000/posts in
your browser or another HTTP client. **Please note that about 25% of the time,
the API returns an error message.**

## Getting Started with the React Client (/web)

The React client is a bare Create React App application.

### Running the Create React App Application

```sh
cd web/
yarn install
yarn start
```

This will open your browser at http://localhost:3000, allowing you to test the
React client.
