import { API_URL } from "./Config"

const GetAPI = (path) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${API_URL}/${path}`).then(res => {
            if(res.ok) {
              return res.json()
            }
          }).then((result) => {
            resolve(result)
          }).catch((err) => {
            reject(err)
          })
    })
    return promise
}

export default GetAPI