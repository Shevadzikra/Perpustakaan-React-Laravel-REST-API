import React, { Component } from 'react'
import Buku from './Buku'
import axios from 'axios'

class ListBuku extends Component {
    formDihapus = id => {
        this.props.formDihapus(id)
    }

    formDiedit = data => {
        this.props.formDiedit(data)
    }

    render() {
        const dataBuku = this.props.dataBuku
        return(
            <div className='data'>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Judul</th>
                            <th>Kategori</th>
                            <th>Penulis</th>
                            <th>Penerbit</th>
                            <th>ISBN</th>
                            <th>Tahun</th>
                            <th>Jumlah</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataBuku.map((buku) => {
                                return <Buku 
                                    buku={buku}
                                    key={buku.id}
                                    formDihapus={this.formDihapus}
                                    formDiedit={this.formDiedit}
                                />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListBuku