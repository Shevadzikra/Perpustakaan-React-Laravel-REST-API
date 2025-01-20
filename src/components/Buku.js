import React, { Component } from 'react'

class Buku extends Component {
    render() {
        const {
            id, 
            judul, 
            kategori_id, 
            penulis, 
            penerbit,
            isbn,
            tahun,
            jumlah
        } = this.props.buku

        return (
            <tr>
                <td>{id}</td>
                <td>{judul}</td>
                <td>{kategori_id}</td>
                <td>{penulis}</td>
                <td>{penerbit}</td>
                <td>{isbn}</td>
                <td>{tahun}</td>
                <td>{jumlah}</td>
            </tr>
        )
    }
}

export default Buku