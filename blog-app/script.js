function getBlogs() {
  const tempBlogs = localStorage.getItem("blogs");
  console.log(tempBlogs);
  if (!tempBlogs) return [];

  return JSON.parse(tempBlogs);
}

function setBlogs(blog) {
  const tempBlogs = getBlogs();
  tempBlogs.unshift(blog);
  localStorage.setItem("blogs", JSON.stringify(tempBlogs));
}
function setBlogs() {
  const tempBlogs = getBlogs();

  for (let i = 0; i < tempBlogs.length; i++) {
    let a = document.createElement("a");
    let h3 = document.createElement("h3");

    a.setAttribute("href", "#");
    a.setAttribute("onclick", "");
    h3.innerHTML = tempBlogs[i].title;
    a.append(h3);
    blogsEl.append(a);
  }
}

setBlogs();

export { getBlogs, setBlogs };
