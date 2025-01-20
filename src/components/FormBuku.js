import React, { Component } from 'react'
import axios from 'axios'

class FormBuku extends Component {
    render() {
        return (
            <form>
                <div>
                    <div>
                        <label>Judul Buku</label>
                        <input type="text" name="judul"></input>
                    </div>
                    <div>
                        <label>Kategori</label>
                        <input type="text" name="kategori"></input>
                    </div>
                    <div>
                        <label>Penulis</label>
                        <input type="text" name="penulis"></input>
                    </div>
                    <div>
                        <label>Penerbit</label>
                        <input type="text" name="penerbit"></input>
                    </div>
                    <div>
                        <label>ISBN</label>
                        <input type="text" name="isbn"></input>
                    </div>
                    <div>
                        <label>Tahun</label>
                        <input type="text" name="tahun"></input>
                    </div>
                    <div>
                        <label>Jumlah</label>
                        <input type="text" name="jumlah"></input>
                    </div>

                    <div>
                        <button>
                            Save
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default FormBuku