import React from 'react';

class Product extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="Pieces">
                    <img className="product-card-img" alt="wheels"
                    src={this.props.item.image} />
                    <h3 className="product-name">{this.props.item.title}</h3>
                    <p className="price">{this.props.item.price}</p>
                    <p>{this.props.item.description}</p>
                    <p><button>Add to Cart</button></p>
                </div>
            </React.Fragment>
        )
    }
}

export default Product