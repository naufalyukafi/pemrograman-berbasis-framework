// pake statefull
import React, { Component } from 'react'
import Post from '../../components/Post'
import './BlogPost.css'

class BlogPost extends Component {
    state = {
        listArtikel: [],
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body: "",
        }
    }

    componentDidMount() {
        this.ambilDataDariServer()
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(jsonHasilAmbilDariAPI => {
        //         this.setState({
        //             listArtikel: jsonHasilAmbilDariAPI
        //         })
        //     })
    }

    ambilDataDariServer = () => {
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3000/posts/${data}`, {
            method: 'DELETE'
        }).then((res) => {
            this.ambilDataDariServer()
        })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel };
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        })
    }

    handleTombolSimpan = () => {
        fetch(`http://localhost:3000/posts`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        }).then((res) => {
            this.ambilDataDariServer()
        })
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10 mb-2 mt-2">
                            <input type="text" name="title" id="title" className="form-control" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea name="body" id="body" className="form-control" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <button className="btn btn-primary mt-5" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return (
                            <Post
                                key={artikel.id}
                                judul={artikel.title}
                                isi={artikel.body}
                                hapusArtikel={this.handleHapusArtikel}
                                idArtikel={artikel.id}
                            />
                        )
                    })
                }
                {/* <div className="artikel">
                    <div className="gambar-artikel">
                        <img src="https://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel" />
                    </div>
                    <div className="kontent-artikel">
                        <div className="judul-artikel">Judul Artikel</div>
                        <p className="isi-artikel">Isi Artikel</p>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default BlogPost

//pake stateless

// import React from 'react'
// import Post from '../../components/Post'
// import './BlogPost.css'

// const BlogPost = () => {
//     return (
//         <div className="post-artikel">
//             <h2>Daftar Artikel</h2>
//             <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi- Politeknik Negeri Malang" />
//         </div>
//     )
// }

// export default BlogPost