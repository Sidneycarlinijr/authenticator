import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div className="grow">
                <div className="text-center mt-10">
                    <span className="font-bold text-xl"> Authenticator</span>
                    <p className="text-xs font-thin text-slate-400"> Hi {'{name}'}!</p>
                </div>
                <div className="ml-5 mt-5">
                    <p>Name:</p>
                    <p>Email adress:</p>
                    <p>Number:</p>
                </div>
            </div>
        )
    }
}

export default Home