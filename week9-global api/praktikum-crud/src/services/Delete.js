import { API_URL } from "./Config"

const DeleteAPI = (path, id) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${API_URL}/${path}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
              },
            body: null
        }).then((result) => {
            resolve(result)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

export default DeleteAPI