import React, { Component } from 'react'

class FormBuku extends Component {
    state = {
        form: {
            judul: '',
            kategori_id: '',
            penulis: '',
            penerbit: '',
            isbn: '',
            tahun: '',
            jumlah: '',
            isEdit: false
        },
        btnName: "save"
    }

    isEmpty(obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props && !this.isEmpty(this.props.buku)) {
            this.setState({
                form: {...this.props.buku, isEdit: true}
            })
        }
    }

    perbaruanData = event => {
        const { name, value } = event.target
        let form = this.state.form
        form[name] = value
        this.setState({ form })
    }

    validasiForm = () => {
        if(document.getElementsByName('judul')[0].value === "") {
            return false
        }
        if(document.getElementsByName('kategori_id')[0].value === "") {
            return false
        }
        if(document.getElementsByName('penulis')[0].value === "") {
            return false
        }
        if(document.getElementsByName('penerbit')[0].value === "") {
            return false
        }
        if(document.getElementsByName('isbn')[0].value === "") {
            return false
        }
        if(document.getElementsByName('tahun')[0].value === "") {
            return false
        }
        if(document.getElementsByName('jumlah')[0].value === "") {
            return false
        }
        return true
    }
    
    formDikirim = (event) => {
        event.preventDefault()
        if (this.validasiForm()) {
            this.props.formDikirim(this.state.form)
        }
    }


    render() {
        return (
            <form onSubmit={this.formDikirim}>
                <div>
                    <div>
                        <label>Judul Buku</label>
                        <input 
                        type="text" 
                        name="judul" 
                        onChange={this.perbaruanData}
                        value={this.state.form.judul}></input>
                    </div>
                    <div>
                        <label>Kategori</label>
                        <input 
                        type="text" 
                        name="kategori_id" 
                        onChange={this.perbaruanData}
                        value={this.state.form.kategori_id}></input>
                    </div>
                    <div>
                        <label>Penulis</label>
                        <input 
                        type="text" 
                        name="penulis" 
                        onChange={this.perbaruanData}
                        value={this.state.form.penulis}></input>
                    </div>
                    <div>
                        <label>Penerbit</label>
                        <input 
                        type="text" 
                        name="penerbit" 
                        onChange={this.perbaruanData}
                        value={this.state.form.penerbit}></input>
                    </div>
                    <div>
                        <label>ISBN</label>
                        <input 
                        type="text" 
                        name="isbn" 
                        onChange={this.perbaruanData}
                        value={this.state.form.isbn}></input>
                    </div>
                    <div>
                        <label>Tahun</label>
                        <input 
                        type="text" 
                        name="tahun" onChange={this.perbaruanData}
                        value={this.state.form.tahun}></input>
                    </div>
                    <div>
                        <label>Jumlah</label>
                        <input 
                        type="text" 
                        name="jumlah" 
                        onChange={this.perbaruanData}
                        value={this.state.form.jumlah}></input>
                    </div>

                    <div>
                        <button type='submit'>
                            { this.state.btnName }
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default FormBuku