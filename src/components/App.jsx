import React, { Component } from 'react'
import Product from './Product';
import Card from './Card';
import "../index.css"

class App extends Component {
    state = { 
        items: [
            {
                amount:1,
                name:"Apfel",
                description:"Lecker Apfel",
                img:"Apfel.jpg"
            },
            {
                amount:1,
                name:"Banane",
                description:"Lecker Banane",
                img:"Banane.jpg"
            },
            {
                amount:1,
                name:"Birne",
                description:"Lecker Birne",
                img:"Birne.jpg"
            },
            {
                amount:1,
                name:"Erdbeere",
                description:"Lecker Erdbeere",
                img:"Erdbeere.jpg"
            },
            {
                amount:1,
                name:"Kirsche",
                description:"Lecker Kirsche",
                img:"Kirsche.jpg"
            },
            {
                amount:1,
                name:"Pfirsich",
                description:"Lecker Pfirsich",
                img:"Pfirsich.jpg"
            },
        ],

        card:[]
     }

     onAddSomething = (amount, name)=>{
        const shopping_card = this.state.card;
        const itemFind = this.state.card.find((item)=>item.name === name);
        if(itemFind){
            itemFind.amount++;
        }else{
            shopping_card.push({
                amount:amount,
                name:name
            }) 
        }
        this.setState({card: shopping_card});
     }

     onDeleteSomething = (name) => {
        let shopping_card = [];
        const itemFind = this.state.card.find((item)=>item.name === name);
        itemFind.amount--;

        if(itemFind.amount < 1){
            shopping_card = this.state.card.filter((item)=> item.amount > 0);
        } else {
            shopping_card = this.state.card;
        }
        this.setState({card: shopping_card});
     }

    render() { 
        return <React.Fragment>

            <div className="container">
                <h1>Warenkorb</h1>
                <div className="row size">
                    {this.state.card.map((item)=>{
                        return <div className="col">
                                    <Card onDelete={()=>this.onDeleteSomething(item.name)} key="shopping.card" name={item.name} amount={item.amount}/>
                                </div>
                    })}
                </div>

                <div className="row">
                    {this.state.items.map((item)=>{
                        return <div className="col">
                            <Product key={item.name} amount={item.amount} name={item.name} description={item.description} img={item.img} onAdd={()=>{this.onAddSomething(item.amount, item.name)}}/>
                        </div>
                    })}
                </div>
            </div>

        </React.Fragment>
    }
}
 
export default App;