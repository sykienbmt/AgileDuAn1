import React, { Component } from 'react';

class cart extends Component {
    render() {
        return (
            <div className="small-container cart-page">
                <table>
                    <tbody><tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="images/buy-1.jpg" alt=''/>
                                    <div>
                                        <p>Red Printed Tshirt</p>
                                        <small>Price: $50.00</small>
                                        <br />
                                        <a href>Remove</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" defaultValue={1} /></td>
                            <td>$50.00</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="images/buy-2.jpg" alt=''/>
                                    <div>
                                        <p>Red Printed Tshirt</p>
                                        <small>Price: $75.00</small>
                                        <br />
                                        <a href>Remove</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" defaultValue={1} /></td>
                            <td>$75.00</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="images/buy-3.jpg" alt=''/>
                                    <div>
                                        <p>Red Printed Tshirt</p>
                                        <small>Price: $50.00</small>
                                        <br />
                                        <a href>Remove</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" defaultValue={1} /></td>
                            <td>$50.00</td>
                        </tr>
                    </tbody></table>
                <div className="total-price">
                    <table>
                        <tbody><tr>
                            <td>Subtotal</td>
                            <td>175.000$</td>
                        </tr>
                            <tr>
                                <td>Tax</td>
                                <td>25.00$</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>200.000$</td>
                            </tr>
                        </tbody></table>
                </div>
            </div>

        );
    }
}

export default cart;