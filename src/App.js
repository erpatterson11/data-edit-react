import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import ClientEdit from "./ClientEdit/ClientEdit"

class App extends Component {
    render() {
        return (
            <div className="App">
                <ClientEdit />
            </div>
        )
    }
}

export default App
