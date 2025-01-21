import React, { Component } from 'react'
import {useNavigate}  from 'react-router-dom'
import axios from "axios"

class FromLogin extends Component {

    peserta = () => {
        const navigate = useNavigate()
        const userAPI = "http://localhost:3000/user"
        const [user, setUser] = this.setState ({
            nama: '',
            jenis: 'member' || 'admin',
            telepon: ''
        })

        handleInput = (event) => {
            
        }
    }

    render() {
        return (
            <div>
                <form>
                <div>
                    <div>
                        <label>Nama</label>
                        <input type="text" name="nama"></input>
                    </div>
                    <div>
                        <label>password</label>
                        <input type="text" name="password"></input>
                    </div>

                    <div>
                        <button onClick={this.formDIkirim}>
                            Login
                        </button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default FromLogin