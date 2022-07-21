import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode"
import { withRouter } from "./withRouterNavigate"
import { ToastContainer, toast } from 'react-toastify';

class Home extends Component {
    constructor() {
        super()
        this.getUserInfo = this.getUserInfo.bind(this)
        this.tokenVerify = this.tokenVerify.bind(this)
        this.logOff = this.logOff.bind(this)
        this.increment = this.increment.bind(this)
        this.tokenRefresh = this.tokenRefresh.bind(this)
        this.setTimer = this.setTimer.bind(this)

        this.state = {
            userName: '',
            userEmail: '',
            userPhoneNumber: '',
            numberToIncrement: 0,
            decoder: {},
            expTime: 0,
            minutes: 0,
            seconds: 0,
            tokenEndInfo: '',
        }
    }

    getUserInfo() {
        var token = sessionStorage.getItem('authToken')
        try {
            this.state.decoder = jwt_decode(token)
        } catch (err) {
            return
        }

        var loginEmail = {
            email: this.state.decoder.email
        }
        var url = "http://localhost:3001/users/search"

        this.setTimer()

        fetch(url, {
            method: "POST",
            body: JSON.stringify(loginEmail),
            headers: { "Content-type": "application/json;charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => {
                if (json.success) {
                    this.setState({ userName: json.data.userName })
                    this.setState({ userEmail: json.data.email })
                    this.setState({ userPhoneNumber: json.data.phoneNumber })
                    this.tokenVerify()
                }
            })
    }

    setTimer() {
        var token = sessionStorage.getItem('authToken')
        const secondsSinceEpoch = Math.round(Date.now() / 1000)
        try {
            this.state.decoder = jwt_decode(token)
        } catch (err) {
            return
        }

        this.state.expTime = this.state.decoder.expTime
        this.state.minutes = Math.floor(this.state.expTime / 60)
        this.state.seconds = this.state.expTime - this.state.minutes * 60
    }

    increment() {
        this.setState({ numberToIncrement: this.state.numberToIncrement + 1 })
        this.tokenVerify()
    }

    logOff() {
        sessionStorage.removeItem('authToken')
    }

    tokenRefresh(token) {
        if (!(this.state.tokenEndInfo === token.substr(token.length - 5, 5))) {
            this.state.tokenEndInfo = token.substr(token.length - 5, 5)
            sessionStorage.setItem('authToken', token)

            toast.success(`Token refresh success - New token info: ${this.state.tokenEndInfo}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }



    }

    tokenVerify() {
        var url = "http://localhost:3001/authenticator/tokenverify"
        var token = sessionStorage.getItem("authToken")

        this.setTimer()

        fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "authorization": `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(json => {
                if (!json.success) {
                    this.logOff()
                    this.props.navigate('/')
                } else {
                    this.tokenRefresh(json.token)
                }
            })
    }

    componentDidMount() {
        this.getUserInfo()

        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div className="grow">
                <ToastContainer />
                <div className="text-center mt-10">
                    <span className="font-bold text-3xl">Authenticator</span>
                    <p className="text-sm font-thin text-slate-400"> Hi {this.state.userName}!</p>
                </div>
                <div className="ml-5 mt-5">
                    <p className="font-bold">Name: <span className="text-base font-normal"> {this.state.userName} </span> </p>
                    <p className="font-bold">Email address: <span className="text-base font-normal"> {this.state.userEmail} </span> </p>
                    <p className="font-bold">Number: <span className="text-base font-normal"> {this.state.userPhoneNumber} </span> </p>
                </div>
                <div className="mt-5 text-center justify-center">
                    <p className="text-base"> Valor: {this.state.numberToIncrement}</p>
                </div>
                <div style={{ marginTop: "120px" }} className="mt-16 ml-10 grow">
                    <Link to="/">
                        <button onClick={this.logOff} className=" text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-xl h-10 w-40 mr-1 text-center dark:focus:ring-yellow-900">
                            Return to Login
                        </button>
                    </Link>
                    <button onClick={this.increment} className=" text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500 font-medium rounded-full text-xl h-10 w-36 ml-1 text-center dark:focus:ring-yellow-900">
                        Increment
                    </button>
                    <div className="mt-12">
                        {minutes === 0 && seconds === 0
                            ? <h1>Token Expired!</h1>
                            : <h1>Token expires in: <strong>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</strong></h1>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        email: state.userInfo.email
    }
}

export default connect(mapStateToProps)(withRouter(Home))