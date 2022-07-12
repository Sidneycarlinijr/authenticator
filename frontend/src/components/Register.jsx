import { React, Component } from 'react';
import { Link } from 'react-router-dom'
import { UserCircle, LockKey, Hash, IdentificationBadge, Key } from 'phosphor-react';

class Register extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this)

        this.state = {
            userName: '',
            phoneNumber: 0,
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleUserName(e) {
        this.setState({
            userName: e.target.value
        })
    }

    handlePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleConfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        var sendData = {
            userData: {
                userName: this.state.userName,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            }
        }

        var userName = sendData.userData.userName
        var phoneNumber = sendData.userData.phoneNumber
        var email = sendData.userData.email
        var password = sendData.userData.password
        var confirmPassword = sendData.userData.confirmPassword
        const url = 'http://localhost:3001/users/register'

        if (password !== confirmPassword) {
            alert('The password and confirm password fields do not match.')
        }

        if (userName || phoneNumber || email || password || confirmPassword) {
            console.log(JSON.stringify(sendData))

            fetch(url, {
                method: "POST",
                body: JSON.stringify(sendData),
                headers: { "Content-type": "application/json;charset=UTF-8" }
            })
                .then(response => response.json())
                .then(json => console.log(json))
        } else {
            alert('Complete all the fields')
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="flex flex-col flex-wrap justify-between p-10 items-center" >
                <header className="text-center">
                    <span className="font-bold text-xl"> Authenticator</span>
                    <p className="text-xs font-thin text-slate-400"> Sign up using your e-mail address</p>
                </header>
                <div>
                    <p className="text-center ">Sign up</p>
                    <div>
                        <IdentificationBadge size={26} className="absolute mt-1" />
                        <input required onChange={this.handleUserName} className="w-64 h-8 text-sm mb-1 pl-8" type="text" placeholder='Name'></input>
                    </div>
                    <div>
                        <Hash size={26} className="absolute mt-1" />
                        <input required onChange={this.handlePhoneNumber} className="w-64 h-8 text-sm mb-1 pl-8" type="number" placeholder='Mobile Number'></input>
                    </div>
                    <div>
                        <UserCircle size={26} className="absolute mt-1" />
                        <input required onChange={this.handleEmail} className="w-64 h-8 text-sm mb-1 pl-8" type="email" placeholder='Email Address'></input>
                    </div>
                    <div>
                        <Key size={26} className="absolute mt-1" />
                        <input required onChange={this.handlePassword} className="w-64 h-8 text-sm mb-1 pl-8" type="password" placeholder='Password'></input>
                    </div>
                    <div>
                        <LockKey size={26} className="absolute mt-1" />
                        <input required onChange={this.handleConfirmPassword} className="w-64 h-8 text-sm pl-8" type="password" placeholder='Confirm Password'></input>
                    </div>
                </div>
                <div className="">
                    <button type="submit" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                        Confirm
                    </button>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        <Link to="/">Home</Link>
                    </button>
                </div>
            </form>
        )
    }
}

export default Register