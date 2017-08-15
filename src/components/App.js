import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    constructor() {
        super();

        //adding 'addFish method to App component
        this.addFish = this.addFish.bind(this);
        // get initial state
        this.state = {
            fishes: {},
            order: {}
        };
    }
    //add fish method to update state
    addFish(fish) {
        //update our state. takes existing fish and adds to fishes object
        const fishes = {...this.state.fishes};
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        
        //set state
        this.setState({ fishes });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        )
    }
}

export default App;