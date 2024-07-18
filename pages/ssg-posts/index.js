import Link from "next/link";

const SSGPosts = ({ posts }) => {
  return (
    <div className="container p-3 border-round-lg bg-white">
      <span className="block mb-3 text-xl font-semibold text-gray-500">
        SSG Posts
      </span>

      <div className="flex flex-column gap-3">
        {posts.map((post) => (
          <Link
            href={`/ssg-posts/${post.id}`}
            key={post.id}
            className="p-3 border-1 border-gray-200 border-round-lg flex flex-column gap-2 hover:bg-gray-100">
            <span className="text-lg font-semibold text-gray-700">
              {post.title}
            </span>
            <p className="m-0 text-gray-500">{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SSGPosts;

// SSG Rendering
// This gets called at build time
export async function getStaticProps() {
  // Fetch posts from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  // Pass posts to the page via props
  return {
    props: { posts },
  };
}
