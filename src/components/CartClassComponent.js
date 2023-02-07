import React from "react";


class CartComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: 1};
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        this.setState((prevState, props) => ({
            count : prevState.count + 1
        }))
    }


    render() {
        return(
            <div>
                <h1>Cart</h1>
                <p>This is Cart Component {this.state.count}</p>
                <button onClick={this.onSubmit}>Increment</button>
            </div>
        )
    }
}

export default CartComponent