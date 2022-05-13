import { Component } from "react";
import List from './list.png';

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []

    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert('Please enter an item')
        }
        else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ''})
        }
    }
    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
}
    crossedWord(event) {
        const list = event.target;
        list.classList.toggle('crossed');

    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="What do you want to buy today?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
            <button onClick={()=> this.addItem(this.state.userInput)} className='btn add'>ADD</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={List} alt="list" width="40px"/>
                        {item}</li>
                ))}
            </ul>
            <div className="container">
            <button onClick={() => this.deleteItem()} className='btn delete'>Delete</button>
            </div>
            </form>
            </div>
        )
    }
}