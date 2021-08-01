import React, { Component } from 'react';
import ItemProducts from './ProductsItem';
import ListProduct from '../Json/ListProduct.json'
import { FaSave} from 'react-icons/fa'
const { v4: uuidv4 } = require('uuid');

class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtImage:'',
            txtName:'',
            txtPrice:'',
            userData: []
        }
    }

    componentWillMount = () =>{
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

    deleteProduct =(id) =>{
        var list = JSON.parse(localStorage.getItem("listProduct"));
        for (let i = 0; i < list.length; i++) {
            if(list[i].id === id){
                list.splice(i,1)
            }
        }
        this.saveListToLocal(list);
    }

    editProduct =(id,name,image,price) =>{
        var list = JSON.parse(localStorage.getItem("listProduct"));
        list.forEach(item => {
            if(item.id===id){
                item.image=image;
                item.name=name;
                item.price=price;
            }
        });
        this.saveListToLocal(list);
    }

    submitForm = (event) => {
        event.preventDefault();
        const{txtName,txtPrice,txtImage} = this.state;

        const item = {};
        item.id=uuidv4();;
        item.image=txtImage;
        item.name=txtName;
        item.price=txtPrice;

        this.addAction(item)
        console.log(item);
    }

    addAction = (item) => {
        var list = JSON.parse(localStorage.getItem("listProduct"));
        list.push(item)
        this.saveListToLocal(list);
    }
    
    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    getListFromLocal = () =>{
        var List = localStorage.getItem(JSON.parse("listProduct"))
        return List;
    }
    saveListToLocal =(list) =>{
        this.setState({
            userData :list
        });
        localStorage.setItem("listProduct",JSON.stringify(list))
    }


    displayProductsDetail = () => {
        return (
            <div className="row">
                {this.state.userData.map((value, key) => {
                    return <ItemProducts price={this.format_curency(value.price)} pid={value.id} key={key} name={value.name} image={value.image} dataList={this.state.userData}
                                onClickDelete={this.deleteProduct}
                                onClickEdit ={this.editProduct}
                            >
                        {value.name}
                    </ItemProducts>
                })}
            </div>
        )
    }

    changeStatus = () => {
        this.setState({
            EditStatus: !this.state.EditStatus
        })
    }

    displayFormAdd = () => {
        if (this.state.EditStatus === false) {
            return (
                <div className="formAdd">
                    <form className='form-add formCss' onSubmit={(e)=>this.submitForm(e)} >
                        <h2>Add product</h2>
                        <label>Name: </label>
                        <input className="inputAll" name="txtName" onChange={(e)=>this.changeInput(e)} ></input>

                        <label>Price: </label>
                        <input className="inputAll" name="txtPrice" onChange={(e)=>this.changeInput(e)} ></input>

                        <label>Image: </label>
                        <input className="inputAll" name="txtImage" onChange={(e)=>this.changeInput(e)}></input>
                        <div className="buttonSave" >
                            <button className="btn btn-admin"><FaSave /></button>
                            <button className="btn btn-admin" onClick={this.changeStatus}>Cancel</button>
                        </div>
                    </form>
                </div>
            )
        }
    }

    
    

    render() {
        return (
            <div className="small-container">
                <div className="titleProductsAdmin">
                    <h1>Products In Stock</h1>
                    <button className="buttonSpecial" onClick={() => this.changeStatus()} > Add product</button>
                    {this.displayFormAdd()}
                </div>
                {this.displayProductsDetail()}
            </div>
        );
    }
}


// [{"id":1,"image":"/images/product-8.jpg","name":"Watch Black","price":1000},{"id":2,"image":"/images/product-9.jpg","name":"Watch Gray","price":2000},{"id":3,"image":"/images/product-10.jpg","name":"Shoes Adidas","price":200},{"id":4,"image":"/images/product-11.jpg","name":"Shoes Nike","price":500},{"id":5,"image":"/images/product-7.jpg","name":"Shock full color","price":500},{"id":6,"image":"/images/product-6.jpg","name":"T-Shirt Black","price":500}]

export default form;


