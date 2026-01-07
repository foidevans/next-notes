import Link from "next/link";

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const post = await res.json();

  return (
    <main className="max-w-2xl mx-auto p-6">
      <Link href="/articles" className="text-purple-700">
        ← Back to articles
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-4">{post.title}</h1>
      <div className="mb-4 text-gray-600 flex flex-col gap-3">
      <p className="text-gray-700 leading-relaxed">{post.body}</p>

      <p className="text-gray-700 leading-relaxed">Genre: {post.tags.join(", ")}</p>

    <p className="text-gray-700 leading-relaxed">
 Likes: {post.reactions?.likes}, Dislikes: {post.reactions?.dislikes}
</p>


      <p className="text-gray-700 leading-relaxed">{post.views}</p>

      <p className="text-sm text-gray-500">Article ID: {id}</p>
      </div>
    </main>
  );
}
