import React, { Component } from 'react'
import { UserCircle, Key } from 'phosphor-react'
import { Link } from 'react-router-dom'

class Main extends Component {

    handleSubmit(e){
       e.preventDefault()
    
        var sendData = {
            userData: {
                // email: this.state.email,
                // password: this.state.password
            }
        }
    //    fetch()
       console.log('oi!', this.email, this.password)
    }

    handleEmail(e){
        var email = e.target.value
    }

    handlePassword(e){
        var password = e.target.value
    }
    
    render() {
        return (<div className="flex flex-between flex-col items-center">
            <form onSubmit={this.handleSubmit} className="flex flex-col flex-wrap justify-around p-10 items-center">
                <header className="text-center">
                    <span className="font-bold text-xl"> Authenticator</span>
                    <p className="text-xs font-thin text-slate-400"> login using your e-mail adress and password</p>
                </header>
                <div style={{ marginTop: "15px" }}>
                    <p className="text-center">Login</p>
                    <div>
                        <UserCircle size={26} className="absolute mt-1"></UserCircle>
                        <input onChange={this.handleEmail} className="w-64 h-8 text-sm mb-1 pl-8" type="text" placeholder='Email Address'></input>
                    </div>
                    <div>
                        <Key size={26} className="absolute mt-1" />
                        <input onChange={this.handlePassword} className="w-64 h-8 text-sm pl-8" type="password" placeholder='Password'></input>
                    </div>
                </div>
                <div style={{ marginTop: "120px" }}>
                <button type="submit" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                    Confirm
                </button>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <Link to="/register">Register</Link>
                </button>
            </div>
            </form>
            
        </div>
        )
    }
}

export default Main