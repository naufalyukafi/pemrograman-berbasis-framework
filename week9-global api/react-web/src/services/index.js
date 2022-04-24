import DeleteAPI from "./Delete";
import GetAPI from "./Get";
import PostAPI from "./Post";

const getNewBlog = () => GetAPI('posts?_sort=id&_order=desc')
const postNewBlog = (dataYgDiKirim) => PostAPI('posts', dataYgDiKirim)
const deleteNewBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus)

// pertanyaan praktikum 4
// const getNewComment = () => GetAPI('comments');
// const postNewComment = (data) => PostAPI('comments', data)
// const deleteNewComment = (data) => DeleteAPI('comments', data)

const API = {
    getNewBlog,
    postNewBlog,
    deleteNewBlog,
    // pertanyaan praktikum 4
    // getNewComment,
    // postNewComment,
    // deleteNewComment
}

export default API