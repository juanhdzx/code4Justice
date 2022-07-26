import React from 'react';
//import "./product.css"
//import items from './Product.json'
//import Pieces from './ProductInfo.js'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "default",
            cost: "default"
        }
    }
    
    handlePriceDropdownSelect = (event) => {
        this.setState({
            cost: event.target.value,
            type: event.target.value
        })
    }
    render(){
        const { type, cost } = this.state;
        return (
            <React.Fragment>
                 <div className="form-container">
                    <div className="gridfilter">
                        <label className="filters">
                            Type:
                         </label>
                        <select id="filterSelect" value={type} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="jordan-1">NIKE JORDAN 1</option>
                            <option value="jordan-3">NIKE JORDAN 3</option>
                            <option value="jordan-4">NIKE JORDAN 4</option>
                            <option value="dunk-lows">NIKE DUNK LOWS</option>
                        </select>
                    </div>

                    <div>
                        <label className="filters">
                            Price:
                         </label>
                        <select id="priceSelect" value={cost} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="low">$0 - $999</option>
                            <option value="medium">$1000 - $1999</option>
                            <option value="high">$2000 or higher</option>
                        </select>
                    </div>
                </div>

                <section id="Product-card" >
                    <div className="filter">
                        {/* {items.items.map(item => {      this is for database
                            if (type === 'default' && cost === 'default') {
                                return <Product item={item} />
                            } else if (type === item.type && cost === item.cost) {
                                return <Product item={item} />
                            } else if (type === item.type || cost === item.cost) {
                                return <Product item={item} />
                            }
                        })} */}
                    </div> 
                </section>
            </React.Fragment>
        )
    }
}

export default Product;