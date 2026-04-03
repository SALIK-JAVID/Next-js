import Link from "next/link";

export default function Blog() {
  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
  ];

  return (
    <div>
      <h1>Blog</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}