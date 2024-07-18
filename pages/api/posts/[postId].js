import { Posts } from "@/data/posts";

function handler(req, res) {
  if (req.method === "DELETE") {
    const { postId } = req.query;
    const index = Posts.findIndex((post) => post.id === +postId);

    if (index === -1) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    Posts.splice(index, 1);
    res.status(200).json(Posts);
  } else if (req.method === "PUT") {
    const { postId } = req.query;
    const { title } = req.body;

    const postIndex = Posts.findIndex((post) => post.id.toString() === postId);
    if (postIndex === -1) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    if (!title) {
      res.status(400).json({ error: "Title is required" });
      return;
    }

    Posts[postIndex] = { id: +postId, title };
    res.status(200).json(Posts[postIndex]);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

export default handler;
