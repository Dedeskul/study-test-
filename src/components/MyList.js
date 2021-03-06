import React, {Component} from "react";


export default class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            list: []
        }
    }

    changeUserInput(input){
        this.setState({
            userInput: input
        });
    }

    addToList(input){
        let listArray = this.state.list;

        listArray.push(input);

        this.setState({
            list: listArray,
            userInput: ""
        })
    }

    render() {
        return(
          <div className="to-do-list-main">
            <input
                onChange={(event) => this.changeUserInput(event.target.value)}
                value={this.state.userInput}
                type="text"
            />
            <button onClick={() => this.addToList(this.state.userInput)}>Add New Task</button>
              <ul>
                  {this.state.list.map((value) => <li>{value}</li>)}
              </ul>
          </div>
        );
    }
}