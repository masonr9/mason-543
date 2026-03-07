/* assignment 7
fetches data from jsonplaceholder and displays based on id*/

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export default async function PostDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <main className="min-h-screen p-8 bg-zinc-100">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <p className="text-sm text-zinc-500 mb-2">Post ID: {post.id}</p>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg leading-7 text-zinc-700">{post.body}</p>
      </div>
    </main>
  );
}