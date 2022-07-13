import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
    //pegar email pelo redux
    //no fim inserir botao para retorar a tela inicial

    constructor() {
        super()
        this.getUserInfo = this.getUserInfo.bind(this)

        this.state = {
            userName: 'teste',
            userEmail: 'teste',
            userPhoneNumber: 'teste'
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
                    this.state.userName = json.data.userName
                    this.state.userEmail = json.data.email
                    this.state.userPhoneNumber = json.data.phoneNumber

                }
            })
    }

    render() {
        return (
            <div className="grow">
                <button onClick={this.getUserInfo}>getUserInfo</button>
                <div className="text-center mt-10">
                    <span className="font-bold text-xl">Authenticator</span>
                    <p className="text-xs font-thin text-slate-400"> Hi {'{name}'}!</p>
                </div>
                <div className="ml-5 mt-5">
                    <p>Name: {this.state.userName} </p>
                    <p>Email adress: {this.state.userEmail} </p>
                    <p>Number:</p> {this.state.userPhoneNumber}
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