import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
    //pegar email pelo redux
    //no fim inserir botao para retorar a tela inicial

    constructor() {
        super()
        this.getUserInfo = this.getUserInfo.bind(this)
        this.tokenVerify = this.tokenVerify.bind(this)
        this.logOff = this.logOff.bind(this)

        this.state = {
            userName: '',
            userEmail: '',
            userPhoneNumber: ''
        }
    }

    getUserInfo() {
        var loginEmail = {
            email: this.props.email
        }
        var url = "http://localhost:3001/users/search"

        fetch(url, {
            method: "POST",
            body: JSON.stringify(loginEmail),
            headers: { "Content-type": "application/json;charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => {
                if (json.success) {
                    this.setState({ userName: json.data.userName })
                    this.state.userName = json.data.userName
                    this.state.userEmail = json.data.email
                    this.state.userPhoneNumber = json.data.phoneNumber
                }
            })
    }

    logOff() {
        sessionStorage.removeItem('authToken')
        console.log('logofffffffffffffffff')
    }

    tokenVerify() {
        var url = "http://localhost:3001/authenticator/tokenverify"
        var token = sessionStorage.getItem("authToken")

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
                }
            })
        console.log(JSON.stringify(token))


    }

    componentDidMount() {
        this.getUserInfo()
        this.tokenVerify()
    }

    render() {
        return (
            <div className="grow">
                <div className="text-center mt-10">
                    <span className="font-bold text-xl">Authenticator</span>
                    <p className="text-xs font-thin text-slate-400"> Hi {this.state.userName}!</p>
                </div>
                <div className="ml-5 mt-5">

                    <p className="font-bold">Name: <span className="text-sm font-normal"> {this.state.userName} </span> </p>
                    <p className="font-bold">Email address: <span className="text-sm font-normal"> {this.state.userEmail} </span> </p>
                    <p className="font-bold">Number: <span className="text-sm font-normal"> {this.state.userPhoneNumber} </span> </p>
                </div>
                <div className="mt-32 ml-4 grow">
                    <Link to="/">
                        <button onClick={this.logOff} className=" text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm h-10 w-32 mr-1 text-center dark:focus:ring-yellow-900">
                            Return to Login
                        </button>
                    </Link>
                    <Link to="/">
                        <button onClick={this.tokenVerify} className=" text-white bg-red-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm h-10 w-32 ml-1 text-center dark:focus:ring-yellow-900">
                            Random Action
                        </button>
                    </Link>
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

export default connect(mapStateToProps)(Home)