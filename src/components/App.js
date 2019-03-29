import React, { Component } from 'react'
import Card from './Card'
import AnotherCard from './AnotherCard'

class App extends Component {
    render() {
        return (
            <div>
                <h1>About to make some magic happen</h1>
                <Card />
                <AnotherCard />
            </div>
        )
    }
}

export default App