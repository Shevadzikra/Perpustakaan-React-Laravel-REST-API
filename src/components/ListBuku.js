import React, { Component } from 'react'
import Buku from './Buku'
import axios from 'axios'

class ListBuku extends Component {
    render() {
        const dataBuku = this.props.dataBuku
        return(
            <div>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataBuku.map((buku) => {
                                return <Buku 
                                    buku={buku}
                                    key={buku.id}
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