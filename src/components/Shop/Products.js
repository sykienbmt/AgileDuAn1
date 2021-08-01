import React, { Component } from 'react';
import SanPham from '../Json/ListProducts';
import ListProduct from '../Json/ListProduct.json'
// import {Link } from 'react-router-dom'

class products extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount()
        this.state = {
            txtSearch:'',
            userData:[]
        }
    }

    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    componentDidMount = () =>{
        let list =[];
        let string = localStorage.getItem("listProduct");
        if(string === null || JSON.parse(string).length ===0 ){
            list = ListProduct
            localStorage.setItem("listProduct",JSON.stringify(ListProduct))
        }else{
            list = JSON.parse(string)
        }

		this.setState({
            userData :list
        });
	};

    changeInput = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name] : value
        });
    }

    displayProductsDetail = () => {
        return (
            <div className="row">
                {
                    this.state.userData.map((val, key) => {
                        return <SanPham price={this.format_curency(val.price)} pid={val.id} key={key} name={val.name} image={val.image}  >
                            {val.name}
                        </SanPham>
                    }
                )}
            </div>
        )
    }

    searchProduct = () =>{
        var string = this.state.txtSearch.toLowerCase();
        var list = this.state.userData;
        var listSearch=[];
        console.log();
        for(var i=0; i<list.length ;i++){
            if(list[i].name.toLowerCase().includes(string)){
                listSearch.push(list[i])
            }
        }
        this.setState({
            userData :listSearch
        });
    }

    refreshProduct = () =>{
        var list = JSON.parse(localStorage.getItem("listProduct"))
        this.setState({
            userData :list
        });
    }

    render() {
        return (
            <div>
                <div className="small-container">
                    <div className="row row-2">
                        <div className="group-search">
                            <input className="inputAll" onChange={(event)=>this.changeInput(event)} 
                                    type="text" placeholder="Search..." 
                                    name="txtSearch"
                            />
                            <button className="btn btn-search" onClick = {this.searchProduct} >Search</button>
                            <button className="btn btn-search" onClick = {this.refreshProduct} >refresh</button>
                        </div>
                        {/* <h2>All Products</h2> */}
                        <select>
                            <option>Default Shop</option>
                            <option>Short by price</option>
                            <option>Short by popularity</option>
                            <option>Short by Rating</option>
                            <option>Short by Sale</option>
                        </select>
                    </div>
                    {this.displayProductsDetail()}
                    <div className="page-btn">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>→</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default products;