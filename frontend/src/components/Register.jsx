import { React, Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from './withRouterNavigate';
import { UserCircle, LockKey, Hash, IdentificationBadge, Key } from 'phosphor-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactInputMask from "react-input-mask";

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

        var password = sendData.userData.password
        var confirmPassword = sendData.userData.confirmPassword
        const url = 'http://localhost:3001/users/register'

        if (password !== confirmPassword) {
            toast.warn('The password and confirm password fields do not match. 😣', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        } else {
            fetch(url, {
                method: "POST",
                body: JSON.stringify(sendData),
                headers: { "Content-type": "application/json;charset=UTF-8" }
            })
                .then(response => response.json())
                .then(json => {
                    if (json.success) {
                        toast.success('Register success 😎', {
                            position: "top-right",
                             autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'colored',
                        });
                        this.props.navigate('/')
                    } else {
                        toast.warn('Email already registered 😕', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'colored',
                        })
                    }
                })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="flex flex-col flex-wrap justify-between p-10 items-center" >
                <ToastContainer />
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
                        <ReactInputMask required onChange={this.handlePhoneNumber} className="w-64 h-8 text-sm mb-1 pl-8" mask="(99) 9 9999-9999" placeholder="Phone Number"></ReactInputMask>
                    </div>
                    <div>
                        <UserCircle size={26} className="absolute mt-1" />
                        <input required onChange={this.handleEmail} className="w-64 h-8 text-sm mb-1 pl-8" type="email" placeholder='Email Address'></input>
                    </div>
                    <div>
                        <Key size={26} className="absolute mt-1" />
                        <input required autoComplete="on" onChange={this.handlePassword} className="w-64 h-8 text-sm mb-1 pl-8" type="password" placeholder='Password'></input>
                    </div>
                    <div>
                        <LockKey size={26} className="absolute mt-1" />
                        <input required autoComplete="on" onChange={this.handleConfirmPassword} className="w-64 h-8 text-sm pl-8" type="password" placeholder='Confirm Password'></input>
                    </div>
                </div>
                <div className="">
                    <button type="submit" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                        Confirm
                    </button>
                    <Link to="/">
                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Home
                        </button>
                    </Link>
                </div>
            </form>
        )
    }
}

export default withRouter(Register)