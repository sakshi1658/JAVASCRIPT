import { setBlogs, getBlogs } from "./script";

const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const blogsEl = document.getElementById("blogs");

function onSubmit() {
  const id = Date.now();
  const newBlog = {
    id,
    title: titleEl.value,
    content: contentEl.value,
  };
  blogs.push(newBlog);
  setBlogs(newBlog);
  console.log("Submit", getBlogs());
  alert(Submitted);
}

