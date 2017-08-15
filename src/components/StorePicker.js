import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
    // needs at least on method
    // const() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    goToStore(event) {
        event.preventDefault();
        //first grab txt from box
        const storeId = this.storeInput.value;
        // second we're goin to transition from /to/store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`);
    }
    render() {
        // can only return single parent element
        return (
         <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
            <h2>Please Enter a Store</h2>
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
            <button type ="submit">Visit Store</button>
        </form>

        ) 
    }
}

export default StorePicker;