import { API_URL } from "./Config"

const PutAPI = (path, newData, id) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${API_URL}/${path}/${id}`, {
            method: 'Put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
          })
          .then((result) => resolve(result))
          .catch(err => reject(err))
    })
    return promise
}

export default PutAPI