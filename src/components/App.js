import React, { Component } from 'react'
import ListBuku from './ListBuku'
import FormBuku from './FormBuku'
import axios from 'axios'

class App extends Component {
    state = {
        dataBuku: [],
        buku: {},
        url: "http://127.0.0.1:8000/api/buku"
    }

    ambilDatabuku = async () => {
        const dataBuku = await axios.get(this.state.url)
        this.setState({ dataBuku: dataBuku.data })
    }

    componentDidMount() {
        this.ambilDatabuku()
    }

    render() {
        return (
            <div>
                <h2>Perpustakaan Online</h2>
                <FormBuku />
                <ListBuku 
                    dataBuku = {this.state.dataBuku}
                />
            </div>
        )
    }
}

export default App