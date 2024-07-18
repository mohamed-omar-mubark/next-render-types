import React, { useState, useEffect } from "react";

const CSRPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // CSR Rendering
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container p-3 border-round-lg bg-white">
        <span className="text-2xl font-semibold text-gray-500">Loading...</span>
      </div>
    );
  }

  return (
    <div className="container p-3 border-round-lg bg-white">
      <span className="block mb-3 text-xl font-semibold text-gray-500">
        CSR Posts
      </span>

      <div className="flex flex-column gap-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-3 border-1 border-gray-200 border-round-lg flex flex-column gap-2">
            <span className="text-lg font-semibold text-gray-700">
              {post.title}
            </span>
            <p className="m-0 text-gray-500">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSRPosts;
