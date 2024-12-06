const blogs = []

const titleEl = document.getElementById('title');
const content = document.getElementById('content');

function getBlogs() {
    const tempBlogs = localStorage.getItem("blogs");
    console.log(tempBlogs);
    if (!tempBlogs) return [];

    return JSON.parse(tempBlogs);
}

function setBlogs(blog) {
    const tempBlogs = getBlogs();
    tempBlogs.unshift(blog)
     localStorage.setItem("blogs", JSON.stringify(tempBlogs));
}

function onSubmit(){
    const newBlog = {
        title: titleEl.value,
        content: content.value
    }
    blogs.push({
        title: titleEl.value,
        content: content.value
    }) 
    setBlogs(newBlog)
    console.log('Submit', getBlogs());
}
