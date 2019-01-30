
import React, { Component } from 'react';

export class Cart extends Component {

    constructor(props){
        super(props);
        this.state = {items: [{name:"typescipt","price":"9.99"}]}
        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    removeItem(removeItem) {
        this.setState({items: this.state.items.filter(function(item){
            return item != removeItem
        })})
    }

    addItem(addItem) {
        this.setState({items: this.state.items.concat(addItem)});
    }

    render(){
        let listStyle = {
            "listStyle":"none"
        }
        return (
            
            this.state.items.map((item, index) => {
                return <div className="well">
                      <li key = {index} style={listStyle}>
                        <div>
                            <span className="col-xs-2">{item.name}</span>
                            <span className="col-xs-2">{item.price}</span>
                            <a href="#" onClick={()=>{this.removeItem(item)}}>Remove</a>
                        </div>
                      </li>
                    </div>
            })
        )
    }
}


class ShowAlert extends Component {
    showAlert() {
        alert("Im an alert");
    }
    
    render() {
        return <button onClick={this.showAlert}>show alert</button>;
    }
    }