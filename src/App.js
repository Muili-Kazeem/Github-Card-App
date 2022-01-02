import React from "react";
import CardList from "./components/Card";
import Form from "./components/Form";

import "./App.css";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profiles: []
        };
    }

    addNewProfile = (profileData) => {
        this.setState((prevState) => {
            return ({
                profiles: [...prevState.profiles, profileData],
            })
        })
    }

    render() {
        return (
        <div className="app">
            <div className="header">Github Card Apps for Fun</div>
            <a href="https://github.com/Muili-Kazeem" className="dev">Built by Kazeem</a>
            <Form onSubmit={this.addNewProfile}/>
            <CardList profiles={this.state.profiles}/>
        </div>
        )
    }
}

export default App