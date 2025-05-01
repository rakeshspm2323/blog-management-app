let blogs = [
    {
      id: '1',
      title: 'First Blog Post',
      content: 'This is the content of the first blog post.',
    },
    {
      id: '2',
      title: 'Second Blog Post',
      content: 'This is the content of the Second blog post.',
    },
  ];
  
  export function getBlogs() {
    return blogs;
  }
  
  export function getBlog(id) {
    return blogs.find((b) => b.id === id);
  }
  
  export function addBlog(blog) {
    blogs.push({ id: Date.now().toString(), ...blog });
  }
  
  export function updateBlog(id, updatedBlog) {
    const index = blogs.findIndex((b) => b.id === id);
    blogs[index] = { ...blogs[index], ...updatedBlog };
  }
  
  export function deleteBlog(id) {
    blogs = blogs.filter((b) => b.id !== id);
  }
  