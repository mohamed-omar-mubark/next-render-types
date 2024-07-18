import React, { memo, useState, useEffect } from "react";

// axios
import axios from "axios";

// components
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "" });
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditPost({ ...editPost, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (editPost) {
        const res = await axios.put(`/api/posts/${editPost.id}`, editPost, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setPosts(
          posts.map((post) => (post.id === res.data.id ? res.data : post))
        );
        setEditPost(null);
      } else {
        const res = await axios.post("/api/posts", newPost, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setPosts([...posts, res.data]);
      }
      setNewPost({ title: "" });
    } catch (error) {
      console.error("Error posting new post:", error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = (post) => {
    setEditPost(post);
    setNewPost({ title: "" });
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-2">
        <Button
          icon="pi pi-pencil"
          className="p-button-success"
          onClick={() => handleEdit(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={() => handleDelete(rowData.id)}
        />
      </div>
    );
  };

  return (
    <div className="container">
      <div className="mb-4 flex gap-2">
        <InputText
          name="title"
          value={editPost ? editPost.title : newPost.title}
          onChange={editPost ? handleEditChange : handleInputChange}
          placeholder="Title"
        />

        <Button
          label={editPost ? "Update Post" : "Add Post"}
          onClick={handleSubmit}
        />

        <Button icon="pi pi-refresh" label="Fetch Posts" onClick={fetchData} />
      </div>

      <div className="p-3 border-round-lg bg-white">
        <span className="block mb-3 text-xl font-semibold text-gray-500">
          Posts
        </span>

        <DataTable
          value={posts}
          tableStyle={{ minWidth: "50rem" }}
          rowHover
          showGridlines>
          <Column field="title" header="Title"></Column>
          <Column body={actionBodyTemplate} header="Actions"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default memo(PostsPage);
