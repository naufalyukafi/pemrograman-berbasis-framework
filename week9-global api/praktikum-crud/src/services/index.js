import GetAPI from './Get'
import PostAPI from './Post'
import DeleteAPI from './Delete'
import PutAPI from './Put'

const getMahasiswa = () => GetAPI('mahasiswa')
const postMahasiswa = (data) => PostAPI('mahasiswa', data)
const deleteMahasiswa = (id) => DeleteAPI('mahasiswa', id)
const updateMahasiswa = (data, id) => PutAPI('mahasiswa', data, id)

const API = {
    getMahasiswa,
    postMahasiswa,
    deleteMahasiswa,
    updateMahasiswa
}

export default API