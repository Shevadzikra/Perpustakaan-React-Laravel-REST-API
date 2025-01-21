import React, { Component } from 'react'
import ListBuku from './buku/ListBuku'
import FormBuku from './buku/FormBuku'
import Loader from './Loader'
import axios from 'axios'

class App extends Component {
    state = {
        dataBuku: [],
        buku: {},
        loader: false,
        url: "http://127.0.0.1:8000/api/buku"
    }

    ambilDatabuku = async () => {
        this.setState({ loader: true })
        const dataBuku = await axios.get(this.state.url)
        this.setState({ dataBuku: dataBuku.data, loader: false })
    }

    buatBukuBaru = async data => {
        this.setState({ loader: true })
        await axios.post(this.state.url, {
            judul: data.judul, 
            kategori_id: data.kategori_id,
            penulis: data.penulis,
            penerbit: data.penerbit,
            isbn: data.isbn,
            tahun: data.tahun,
            jumlah: data.jumlah,
        })
        
        this.ambilDatabuku()
    }

    hapusBuku = async id => {
        this.setState({ loader: true })
        await axios.delete(`${this.state.url}/${id}`)
        this.ambilDatabuku()
    }

    editBuku = async data => {
        this.setState({ buku: {}, loader: true })
        await axios.put(`${this.state.url}/${data.id}` , {
            judul: data.judul, 
            kategori_id: data.kategori_id,
            penulis: data.penulis,
            penerbit: data.penerbit,
            isbn: data.isbn,
            tahun: data.tahun,
            jumlah: data.jumlah,
        })
        this.ambilDatabuku()
    }
    
    componentDidMount() {
        this.ambilDatabuku()
    }

    formDihapus = id => {
        this.hapusBuku(id)
    }

    formDiedit = data => {
        this.setState({ buku: data })
    }

    formDikirim = data => {
        if(data.isEdit) {
            this.editBuku(data)
        } else {
            this.buatBukuBaru(data)
        }
    }

    render() {
        return (
            <div>
                <h2>Perpustakaan Online</h2>
                <FormBuku 
                buku={this.state.buku} 
                formDikirim={this.formDikirim}/>
                { this.state.loader ? <Loader /> : "" }
                <ListBuku 
                    dataBuku = {this.state.dataBuku}
                    formDihapus={this.formDihapus}
                    formDiedit={this.formDiedit}
                />
            </div>
        )
    }
}

export default App