import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Detail from '../Json/ListProduct.json'

class productDetail extends Component {
    format_curency = (price) =>{
        return price.toString().replace( /(\d)(?=(\d{3})+(?!\d))/g,"$1.");
    }

    render() {
        var pid =parseInt(this.props.match.params.id);
        var list = JSON.parse(localStorage.getItem("listProduct"));
        return (
            <div>
            {
                list.map((value,key) =>{
                    if(value.id === pid){
                        return <div className="small-container single-product" key={key}>
                                    <div className="row">
                                        <div className="col-2">
                                            <img src={value.image} width="100%" id="productImg" alt = ""/>
                                            <div className="small-img-row">
                                                <div className="small-img-rol">
                                                    <img src="/images/gallery-1.jpg" width="100%" className="small-img" alt = ""/>
                                                </div>
                                                <div className="small-img-rol">
                                                    <img src="/images/gallery-2.jpg" width="100%" className="small-img" alt = ""/>
                                                </div>
                                                <div className="small-img-rol">
                                                    <img src="/images/gallery-3.jpg" width="100%" className="small-img" alt = ""/>
                                                </div>
                                                <div className="small-img-rol">
                                                    <img src="/images/gallery-4.jpg" width="100%" className="small-img" alt = ""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <p>Home / T-Shirt</p>
                                            <h1>{value.name}</h1>
                                            <h4>{this.format_curency(value.price)} $</h4>
                                            <select>
                                                <option>Select Size</option>
                                                <option>XXL</option>
                                                <option>XL</option>
                                                <option>Large</option>
                                                <option>Medium</option>
                                                <option>Small</option>
                                            </select><input type="number" defaultvalueue={1} />
                                            <NavLink to="/" className="btn">Add To Card</NavLink>
                                            <h3>Product Detail
                                                <i className="fa fa-indent" />
                                            </h3>
                                            <br />
                                            <p>Surrounded affronting favourable no mr. Lain knew like half she yet joy. Be than dull as seen
                                                very shot. Attachment ye so am travelling estimating projecting is. Off fat address attacks his
                                                besides. Suitable settling mr attended no doubtful feelings. Any over for say bore such sold
                                                five but hung</p>
                                        </div>
                                    </div>
                                </div>
                    }
                    return "";
                })
            }
            </div>

        );
    }
}

export default productDetail;