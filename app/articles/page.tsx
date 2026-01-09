import Link from "next/link";
import React from "react";

export default async function ArticlesPage() {
const res = await fetch('https://dummyjson.com/posts');
 if (!res.ok) {
    throw new Error('Failed to fetch articles');
 } 
    const data = await res.json();

  return (
    <main  className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Yooo, Welcome to my Articles Page!!</h1>
      <p>Click on any article section to get a glimpse on what's on the other side.</p>
        <ul className="space-y-4">
            {data.posts.map((post) => (
                <li key={post.id} className="border p-4 rounded hover:bg-gray-50">
                    <Link href={`/articles/${post.id}`} className="text-purple-700">{post.title}</Link>
                    </li>))}
        </ul>
    </main>
  );
}