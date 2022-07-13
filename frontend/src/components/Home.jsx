import { Ruler } from "phosphor-react";
import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
    //pegar email pelo redux
    //no fim inserir botao para retorar a tela inicial
    getUserInfo() {
        console.log(this.props.email)
        var loginEmail = this.props.email
        var url = "http://localhost:3001/users/search"
        
        fetch(url, {
            method: "POST",
            body: JSON.stringify(loginEmail),
            headers: { "Content-type": "application/json;charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
        })

    }

    render() {
        return (
            <div className="grow">
                <div className="text-center mt-10">
                    <span className="font-bold text-xl"> Authenticator</span>
                    <p className="text-xs font-thin text-slate-400"> Hi {'{name}'}!</p>
                </div>
                <div className="ml-5 mt-5">
                    <p>Name: </p>
                    <p>Email adress: </p>
                    <p>Number:</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        email: state.userInfo.email
    }
}

export default connect(mapStateToProps)(Home)