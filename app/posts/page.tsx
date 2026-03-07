/* assignment 7 posts page */

import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen p-8 bg-zinc-100">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>

      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-4 bg-white rounded shadow">
            <Link
              href={`/posts/${post.id}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="mt-2 text-zinc-700">
              {post.body.substring(0, 80)}...
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}