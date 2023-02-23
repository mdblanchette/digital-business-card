import React from "react"
import ReactDOM from "react-dom"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="container">
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App / >, document.getElementById("root"));