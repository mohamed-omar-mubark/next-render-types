import React from "react";

// This component will display a single post
const Post = ({ post }) => {
  return (
    <div className="container p-3 border-round-lg bg-white">
      <span className="block mb-3 text-xl font-semibold text-gray-500">
        Post Details
      </span>
      <div className="p-3 border-1 border-gray-200 border-round-lg flex flex-column gap-2">
        <span className="text-lg font-semibold text-gray-700">
          {post.title}
        </span>
        <p className="m-0 text-gray-500">{post.body}</p>
      </div>
    </div>
  );
};

export default Post;

// This function gets called at build time to generate the paths for each post
export async function getStaticPaths() {
  // Fetch all posts to get the list of post IDs
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on post IDs
  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This function gets called at build time to fetch the data for a single post
export async function getStaticProps({ params }) {
  // Fetch the specific post data using the postId from params
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return {
    props: { post },
  };
}
