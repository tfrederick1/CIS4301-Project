import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
      list: [],
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  callAPI() {
    fetch('http://localhost:9000')
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount() {
    this.callAPI();
  }
  
  componentDidUpdate(prevProps) {
    if(this.props.apiResponse !== prevProps.apiResponse) {
      this.callAPI()
      console.log(this.apiResponse);
    }
  }

  addItem(e) {
    // Prevent button click from submitting form
    e.preventDefault();

    // Create variables for our list, the item to add, and our form
    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    // If our input has a value
    if (newItem.value !== "") {
      // Add the new item to the end of our list array
      list.push(newItem.value);
      // Then we use that to set the state for list
      this.setState({
        list: list
      });
      // Finally, we need to reset the form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add("is-danger");
    }
  }

  removeItem(item) {
    // Put our list into an array
    const list = this.state.list.slice();
    // Check to see if item passed in matches item in array
    list.some((el, i) => {
      if (el === item) {
        // If item matches, remove it from array
        list.splice(i, 1);
        return true;
      }
    });
    // Set state to list
    this.setState({
      list: list
    });
  }

  // clear items button removes all fields
  render() {
    return (
      <div className="App">
        <div class="flex-container-bar">
          <div class="flex-container-helper">
            <div class="dropdown">
              <button class="drop-button">
                <a href="/">Home</a>
              </button>
            </div>
            <div class="dropdown">
              <button class="drop-button">
                <a href="/query1">Query 1</a>
              </button>
            </div>
            <div class="dropdown">
              <button class="drop-button">
                <a href="/query2">Query 2</a>
              </button>
            </div>
            <div class="dropdown">
              <button class="drop-button">
                <a href="/query3">Query 3</a>
              </button>
            </div>
            <div class="dropdown">
              <button class="drop-button">
                <a href="/query4">Query 4</a>
              </button>
            </div>
            <div class="dropdown">
              <button class="drop-button">
                <a href="/query5">Query 5</a>
              </button>
            </div>
          </div>
        </div>
        <BrowserRouter>
          <Switch>
            <Route path='/query1'>

            </Route> 
            <Route path='/query2'>

            </Route>
            <Route path='/query3'>

            </Route>
            <Route path='/query4'>

            </Route>
            <Route path='/query5'>

            </Route> 
            <Route path='/'>
            </Route>
          </Switch>
        </BrowserRouter>

        {this.state.apiResponse}

        <div>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
