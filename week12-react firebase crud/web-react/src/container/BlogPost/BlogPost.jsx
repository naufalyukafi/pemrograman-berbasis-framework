// pake statefull
import React, { Component } from 'react'
import firebase from 'firebase'
import firebaseConfig from '../../firebase/config'
import Post from '../../components/Post'
import './BlogPost.css'

class BlogPost extends Component {
    constructor(props) {
        super(props)
        firebase.initializeApp(firebaseConfig)
        this.state = {
            listArtikel: []
        }
        
    }

    simpanDataKeServerAPI = () => {
        firebase.database().ref("/").set(this.state)
    }

    componentDidMount() {
        this.ambilDataDariServer()
    }

    componentDidUpdate(prevProp, prevState) {
        if(prevProp !== this.state) {
            this.simpanDataKeServerAPI()
        }
    } 

    ambilDataDariServer = () => {
        let ref = firebase.database().ref('/');
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state)
        })
    }

    handleHapusArtikel = (idArtikel) => {
        const {listArtikel} = this.state
        const newState = listArtikel.filter(data => {
            return data.uid != idArtikel
        })
        this.setState({listArtikel: newState})
    }

   
    handleTombolSimpan = (event) => {
        let title = this.refs.judulArtikel.value;
        let body = this.refs.isiArtikel.value;
        let uid = this.refs.uid.value;

        if(uid && title && body) {
            const { listArtikel } = this.state
            const indeksArtikel = listArtikel.findIndex(data => data.uid === uid)
            listArtikel[indeksArtikel].title = title
            listArtikel[indeksArtikel].body = body
            this.setState({ listArtikel });
        } else if(title && body) {
            const uid = new Date().getTime().toString();
            const { listArtikel } = this.state
            listArtikel.push({uid, title, body})
            this.setState({listArtikel})
        } 

        this.refs.judulArtikel.value = "";
        this.refs.isiArtikel.value =- "";
        this.refs.uid.value = "";
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10 mb-2 mt-2">
                            <input type="text" name="title" id="title" className="form-control" ref="judulArtikel" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea rows={3} name="body" id="body" className="form-control" ref="isiArtikel" />
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid" />
                    <button className="btn btn-primary mt-5" type='submit' onClick={this.handleTombolSimpan}>Simpan Data</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return (
                            <Post
                                key={artikel.uid}
                                judul={artikel.title}
                                isi={artikel.body}
                                hapusArtikel={this.handleHapusArtikel}
                                idArtikel={artikel.uid}
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