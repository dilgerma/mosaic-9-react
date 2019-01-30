
import React, { Component } from 'react';

export class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [] }
    this.removeItem = this.removeItem.bind(this);
    let addItemF = this.addItem.bind(this);
    this.addItem = addItemF;

    props.eev.on('add-cart-item', addItemF);
  }

  removeItem(removeItem) {
    this.setState({
      items: this.state.items.filter(function (item) {
        return item != removeItem
      })
    })
  }

  addItem(addItem) {
    this.setState({ items: this.state.items.concat(addItem) });
  }

  render() {
    console.log("rendering")
    let listStyle = {
      "listStyle": "none"
    }
    const listItems = this.state.items.map((item, index) => {
      return <li key={index} style={listStyle}>
        <div className="row">
          <span className="col-xs-6">{item.name}</span>
          <span className="col-xs-3">{item.price}</span>
          <a className="col-xs-3" onClick={() => { this.removeItem(item) }}>Löschen</a>
        </div>
      </li>
    });
    return (
      <div className="well">
                <div>Warenkorb</div>
                <ul>
                {listItems}
                </ul>
            </div>
           )

  }
}