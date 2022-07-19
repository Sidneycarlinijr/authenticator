import { React, Component } from 'react'
import { connect } from 'react-redux'
import { UserCircle, Key } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { withRouter } from './withRouterNavigate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import sendUserInfo from '../store/action/userInfo'

class Main extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)

        this.state = {
            email: '',
            password: '',
        }
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

    handleSubmit(e) {
        e.preventDefault()

        var sendData = {
            userData: {
                email: this.state.email,
                password: this.state.password
            }
        }

        var email = sendData.userData.email
        var password = sendData.userData.password
        const url = 'http://localhost:3001/authenticator/login'
        if (email && password) {
            //redux
            this.props.userInfo(sendData)

            fetch(url, {
                method: "POST",
                body: JSON.stringify(sendData),
                headers: { "Content-type": "application/json;charset=UTF-8" }
            })
                .then(response => response.json())
                //salvar token no session storage
                .then(json => {
                    if (json.success) {
                        sessionStorage.setItem('authToken', json.token)
                        toast.success('Sign In success', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'colored',
                        });
                        this.props.navigate('/home')
                    } else {
                        toast.warn('Invalid username or password', {
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
        } else {
            alert('Preencha os campos')
        }
    }

    render() {
        
        sessionStorage.removeItem('authToken')
        
        return (

            <div className="flex flex-between flex-col items-center">
                <ToastContainer />
                <form onSubmit={this.handleSubmit} className="flex flex-col flex-wrap justify-around p-10 items-center">
                    <header className="text-center">
                        <span className="font-bold text-xl"> Authenticator</span>
                        <p className="text-xs font-thin text-slate-400"> login using your e-mail adress and password</p>
                    </header>
                    <div style={{ marginTop: "15px" }}>
                        <p className="text-center">Login</p>
                        <div>
                            <UserCircle size={26} className="absolute mt-1"></UserCircle>
                            <input required onChange={this.handleEmail} className="w-64 h-8 text-sm mb-1 pl-8" type="email" placeholder='Email Address'></input>
                        </div>
                        <div>
                            <Key size={26} className="absolute mt-1" />
                            <input required autoComplete="on" onChange={this.handlePassword} className="w-64 h-8 text-sm pl-8" type="password" placeholder='Password'></input>
                        </div>
                    </div>
                    <div style={{ marginTop: "120px" }}>
                        <button type="submit" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                            Confirm
                        </button>
                        <Link to="/register">
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                Register
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {
    return {
        userInfo(data) {
            const action = sendUserInfo(data)
            dispatch(action)
        }
    }
}

function mapStateToProps(state) {
    return ({
        sentEmail: state.userInfo.email,
        sentPassword: state.userInfo.password
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main))