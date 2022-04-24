import { API_URL } from "./Config"

const PostAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${API_URL}/${path}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          })
          .then((result) => resolve(result))
          .catch(err => reject(err))
    })
    return promise
}

export default PostAPI