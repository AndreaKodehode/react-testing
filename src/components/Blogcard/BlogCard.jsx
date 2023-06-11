export function BlogCard(props) {
  const {
    slug,
    title,
    description,
    body,
    tagList,
    createdAt,
    updatedAt,
    favorited,
    favoritesCount,
    author,
  } = props;

  return (
    <article>
      <header>
        <h1>{author.username}</h1>
      </header>

      <h1>{title}</h1>
      <p>{body}</p>
    </article>
  );
}
