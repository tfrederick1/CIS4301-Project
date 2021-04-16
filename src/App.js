import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";

/*
var ctx = 'myChart';
const config = {
  type: 'line',
  datasets: {
    labels: [],
    data: [{}]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  }
};
var graph = new Chart(ctx, config);
*/


const info = {
  labels: [],
  datasets: [
    {
      
    }
  ]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      list: [],
      socket: socketIOClient(ENDPOINT),
      labels: [],
      datasets: [],
      updated: false,
      info: {"labels":[], "datasets":[]}
    };
    // this.buttonClick = this.buttonClick.bind(this);
    this.addItem1 = this.addItem1.bind(this);
    this.addItem2 = this.addItem2.bind(this);
    this.addItem3 = this.addItem3.bind(this);
    this.addItem4 = this.addItem4.bind(this);
    this.addItem5 = this.addItem5.bind(this);
  }

  addItem1(e) {
    // Prevent button click from submitting form
    e.preventDefault();

    // Create variables for our list, the item to add, and our form
    let list = this.state.list;
    const newItem = document.getElementById("search");
    const form = document.getElementById("addItemForm");

    // If our input has a value
    if (newItem.value !== "") {
      // Add the new item to the end of our list array
      list.push(newItem.value);
      // Then we use that to set the state for list
      this.setState({
        list: list
      });

      console.log("Ran");
      this.state.socket.emit("Query 1",this.state.list);

      // Finally, we need to reset the form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add("is-danger");
    }
  }

  addItem2(e) {
    // Prevent button click from submitting form
    e.preventDefault();

    // Create variables for our list, the item to add, and our form
    let list = this.state.list;
    const newItem = document.getElementById("search");
    const form = document.getElementById("addItemForm");

    // If our input has a value
    if (newItem.value !== "") {
      // Add the new item to the end of our list array
      list.push(newItem.value);
      // Then we use that to set the state for list
      this.setState({
        list: list
      });

      console.log("Ran");
      this.state.socket.emit("Query 2", this.state.list);

      // Finally, we need to reset the form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add("is-danger");
    }
  }

  addItem3(e) {
    // Prevent button click from submitting form
    e.preventDefault();

    // Create variables for our list, the item to add, and our form
    let list = this.state.list;
    const newItem1 = document.getElementById("search1");
    const newItem2 = document.getElementById("search2");
    const newItem3 = document.getElementById("search3");
    const form = document.getElementById("addItemForm");

    // If our input has a value
    if (newItem1.value !== "" && newItem2.value !== "" && newItem3.value !== "") {
      // Add the new item to the end of our list array
      list.push(newItem1.value);
      list.push(newItem2.value);
      list.push(newItem3.value);
      // Then we use that to set the state for list
      this.setState({
        list: list
      });

      console.log("Ran");
      this.socket.on('Results',data => {
        console.log(data);
      });
      this.socket.emit("Query 3",this.state.list);

      // Finally, we need to reset the form
      newItem1.classList.remove("is-danger");
      newItem2.classList.remove("is-danger");
      newItem3.classList.remove("is-danger");
      form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem1.classList.add("is-danger");
      newItem2.classList.add("is-danger");
      newItem3.classList.add("is-danger");
    }
  }

  addItem4(e) {
    // Prevent button click from submitting form
    e.preventDefault();

    // Create variables for our list, the item to add, and our form
    let list = this.state.list;
    const newItem = document.getElementById("search");
    const form = document.getElementById("addItemForm");

    // If our input has a value
    if (newItem.value !== "") {
      list.push("Query 4");
      // Add the new item to the end of our list array
      list.push(newItem.value);
      // Then we use that to set the state for list
      this.setState({
        list: list
      });

      console.log("Ran");
      this.socket.on('Results',data => {
        console.log(data);
      });
      this.socket.emit("Query 4",this.state.list);

      // Finally, we need to reset the form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add("is-danger");
    }
  }

  addItem5(e) {
    // Prevent button click from submitting form
    e.preventDefault();

    // Create variables for our list, the item to add, and our form
    let list = this.state.list;
    const newItem = document.getElementById("search");
    const form = document.getElementById("addItemForm");

    // If our input has a value
    if (newItem.value !== "") {
      list.push("Query 5");
      // Add the new item to the end of our list array
      list.push(newItem.value);
      // Then we use that to set the state for list
      this.setState({
        list: list
      });

      console.log("Ran");
      this.socket.on('Results',data => {
        console.log(data);
      });
      this.socket.emit("Query 5",this.state.list);

      // Finally, we need to reset the form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add("is-danger");
    }
  }

  componentDidMount() {
    this.state.socket.on('Results',data => {
      if(!this.state.updated) {
        var l = data.length;
        var temp = [];

        for(var i = 0; i < l; i++) {
          temp.push(data[i]["COUNT"]);
        }
        
        console.log(temp);

        this.setState({
          labels: ["February", "March", "April", "May", "June","July", "August",
                  "September", "October", "November"],
          datasets: [{
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: temp
          }],
        });

        info["labels"] = this.state.labels;
        info["datasets"] = this.state.datasets;

        setInterval(() => {}, 10000);

        this.setState({
          updated: true
        });
      }
    });
  }

  render() {
    let emptyState = (
      <div className="empty">
      </div>
    );

    let loadedState = (
      <div className="loaded">
          <Line
            data={info}
            options={{
              title:{
                display:true,
                text:'Flights to Country per Month',
                fontSize:20
              },
              animation: {
                duration: 0
              },
              hover: {
                animationDuration: 0
              },
              responsiveAnimationDuration: 0,
              legend: {
                display:false
              }
            }}
          />
      </div>
    );

    return (
      <div className="App">
        <div class="flex-container-header">
          <div class="wrap">
            <h1>Covid-19 Flight Trends</h1>
            <h2>Using SQL to discover new trends between Covid-19 and International Flights</h2>
          </div>
        </div>
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
              <div>
                <div class="transbox">
                    <h1>Query 1</h1>
                </div>
                <div class="flex-container-body">
                    <div>
                        <p>
                            Proin sagittis nisl rhoncus mattis rhoncus. Amet venenatis urna cursus eget nunc. Convallis a cras semper auctor neque.
                            Non blandit massa enim nec. Quis ipsum suspendisse ultrices gravida dictum. Lectus quam id leo in vitae. Urna cursus
                            eget nunc scelerisque viverra mauris. Aliquam faucibus purus in massa tempor nec feugiat nisl. Ante metus dictum at
                            tempor commodo ullamcorper a. Fames ac turpis egestas integer eget aliquet nibh praesent. Sagittis eu volutpat odio
                            facilisis mauris.
                        </p>
                    </div>
                    <div className="content">
                      <div className="container">
                        <section className="section">
                          <ul>
                            {this.state.list.map(item => (
                            <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                        <section className="section">
                          <form className="form" id="addItemForm">
                            <h2>Country</h2>
                            <input
                              type="text"
                              className="input"
                              id="search"
                              placeholder="Country..."
                              autoComplete="off"
                            />
                            <button className="button is-info" onClick={this.addItem1}>
                              Search
                            </button>
                          </form>
                        </section>
                      </div>
                    </div>
                </div>
              </div>
            </Route> 
            <Route path='/query2'>
              <div>
                <div class="transbox">
                    <h1>Query 2</h1>
                </div>
                <div class="flex-container-body">
                    <div>
                        <p>
                        Viewing monthly flights originating from COVID hotspots (Defined as countries that have had the most cases or most cases
                        per capita during some month in 2020) and traveling to a user selected country. The first calculation will be identifying
                        COVID hotspots, based on the maximum number of cases (or cases per capita) after summing total cases per month in each country.
                        The second calculation will be a summation of all flights out of these countries in a given timespan. The graph will display
                        flights from these hotspots to the user-defined country of interest over time. The motivation of this trend query is to
                        demonstrate to a user how the spread of COVID-19 may have been impacted by airline travel. A large influx of flights into
                        a specific country from a current COVID-19 hotspot could cause an outbreak in that country. This may also be combined with
                        query 4 to provide insight into how movement out of a country is impacted by a prevalence of cases in the country.
                        </p>
                    </div>
                    <div className="content">
                      <div className="container">
                        <section className="section">
                          <ul>
                            {this.state.list.map(item => (
                            <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                        <section className="section">
                          <form className="form" id="addItemForm">
                            <h2>Country</h2>
                            <input
                              type="text"
                              className="input"
                              id="search"
                              placeholder="Country..."
                              autoComplete="off"
                            />
                            <button className="button is-info" onClick={this.addItem2}>
                              Search
                            </button>
                          </form>
                        </section>
                      </div>
                    </div>
                    {!this.state.updated && emptyState}
                    {this.state.updated && loadedState}
                </div>
              </div>
            </Route>
            <Route path='/query3'>
              <div>
                <div class="transbox">
                    <h1>Query 3</h1>
                </div>
                <div class="flex-container-body">
                    <div>
                        <p>
                            Egestas pretium aenean pharetra magna ac placerat vestibulum. Nullam non nisi est sit amet facilisis magna etiam. Elit duis
                            tristique sollicitudin nibh sit. Diam donec adipiscing tristique risus nec. Convallis posuere morbi leo urna molestie.
                            Suscipit tellus mauris a diam maecenas sed enim. A cras semper auctor neque vitae. Id venenatis a condimentum vitae sapien
                            pellentesque habitant morbi tristique. Commodo nulla facilisi nullam vehicula. Enim facilisis gravida neque convallis a cras
                            semper. Sit amet purus gravida quis blandit. Nullam non nisi est sit amet facilisis magna. Habitant morbi tristique senectus
                            et netus et malesuada. Ut sem viverra aliquet eget sit amet. Tincidunt eget nullam non nisi est. Nisl vel pretium lectus
                            quam id leo in vitae turpis. Sagittis purus sit amet volutpat consequat. Pulvinar pellentesque habitant morbi tristique.
                        </p>
                    </div>
                    <div className="content">
                      <div className="container">
                        <section className="section">
                          <ul>
                            {this.state.list.map(item => (
                            <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                        <section className="section">
                          <form className="form" id="addItemForm">
                            <h2>Airline 1</h2>
                            <input
                              type="text"
                              className="input"
                              id="search1"
                              placeholder="Airline..."
                              autoComplete="off"
                            />
                            <h2>Airline 2</h2>
                            <input
                              type="text"
                              className="input"
                              id="search2"
                              placeholder="Airline..."
                              autoComplete="off"
                            />
                            <h2>Airline 3</h2>
                            <input
                              type="text"
                              className="input"
                              id="search3"
                              placeholder="Arline..."
                              autoComplete="off"
                            />
                            <button className="button is-info" onClick={this.addItem3}>
                              Search
                            </button>
                          </form>
                        </section>
                      </div>
                    </div>
                </div>
              </div>
            </Route>
            <Route path='/query4'>
              <div>
                <div class="transbox">
                    <h1>Query 4</h1>
                </div>
                <div class="flex-container-body">
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Metus aliquam eleifend mi in nulla. Commodo sed egestas egestas fringilla phasellus faucibus
                            scelerisque eleifend. Tortor pretium viverra suspendisse potenti nullam. Vulputate mi sit amet mauris.
                            Scelerisque eu ultrices vitae auctor eu augue ut lectus. Cursus vitae congue mauris rhoncus aenean. Elementum
                            tempus egestas sed sed risus pretium quam. Et tortor consequat id porta. Egestas fringilla phasellus faucibus
                            scelerisque eleifend. Arcu risus quis varius quam quisque id diam vel quam. Ut eu sem integer vitae justo eget
                            magna. Cursus euismod quis viverra nibh cras pulvinar mattis.
                        </p>
                    </div>
                    <div className="content">
                      <div className="container">
                        <section className="section">
                          <ul>
                            {this.state.list.map(item => (
                            <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                        <section className="section">
                          <form className="form" id="addItemForm">
                            <h2>Country</h2>
                            <input
                              type="text"
                              className="input"
                              id="search"
                              placeholder="Country..."
                              autoComplete="off"
                            />
                            <button className="button is-info" onClick={this.addItem4}>
                              Search
                            </button>
                          </form>
                        </section>
                      </div>
                    </div>
                </div>
              </div>
            </Route>
            <Route path='/query5'>
              <div>
                <div class="transbox">
                    <h1>Query 5</h1>
                </div>
                <div class="flex-container-body">
                    <div>
                        <p>
                        Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Augue ut lectus arcu bibendum at
                            varius. Nibh tortor id aliquet lectus. Semper feugiat nibh sed pulvinar proin. Odio morbi quis commodo odio aenean.
                            Sed viverra ipsum nunc aliquet. Congue nisi vitae suscipit tellus mauris a diam. Convallis aenean et tortor at.
                            Consectetur adipiscing elit pellentesque habitant. Adipiscing elit pellentesque habitant morbi tristique senectus et
                            netus. Elementum curabitur vitae nunc sed velit. Enim blandit volutpat maecenas volutpat blandit aliquam.
                        </p>
                    </div>
                    <div className="content">
                      <div className="container">
                        <section className="section">
                          <ul>
                            {this.state.list.map(item => (
                            <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                        <section className="section">
                          <form className="form" id="addItemForm">
                            <h2>Country</h2>
                            <input
                              type="text"
                              className="input"
                              id="search"
                              placeholder="Country..."
                              autoComplete="off"
                            />
                            <button className="button is-info" onClick={this.addItem5}>
                              Search
                            </button>
                          </form>
                        </section>
                      </div>
                    </div>
                </div>
              </div>
            </Route> 
            <Route path='/'>
              <div>
                <div class="transbox">
                    <h1>About Us</h1>
                </div>
                <div class="flex-container-body">
                    <div>
                        <p>
                            Proin sagittis nisl rhoncus mattis rhoncus. Amet venenatis urna cursus eget nunc. Convallis a cras semper auctor neque.
                            Non blandit massa enim nec. Quis ipsum suspendisse ultrices gravida dictum. Lectus quam id leo in vitae. Urna cursus
                            eget nunc scelerisque viverra mauris. Aliquam faucibus purus in massa tempor nec feugiat nisl. Ante metus dictum at
                            tempor commodo ullamcorper a. Fames ac turpis egestas integer eget aliquet nibh praesent. Sagittis eu volutpat odio
                            facilisis mauris.
                        </p>
                        <p>
                            Pulvinar elementum integer enim neque volutpat. Posuere morbi leo urna molestie at elementum eu. Interdum velit euismod
                            in pellentesque. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Hac habitasse platea dictumst quisque
                            sagittis purus. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Malesuada fames ac turpis egestas. Facilisis
                            gravida neque convallis a cras semper. Amet massa vitae tortor condimentum lacinia quis. Duis at consectetur lorem donec
                            massa. Vulputate eu scelerisque felis imperdiet. Mi proin sed libero enim sed faucibus turpis in. Ut aliquam purus sit
                            amet luctus venenatis lectus magna fringilla. Etiam dignissim diam quis enim lobortis. Ac odio tempor orci dapibus
                            ultrices in iaculis nunc sed. Ultrices gravida dictum fusce ut placerat orci nulla.
                        </p>
                        <p>
                            Netus et malesuada fames ac turpis egestas. Eu mi bibendum neque egestas congue quisque egestas. Facilisis sed odio morbi
                            quis commodo odio. Eget nunc lobortis mattis aliquam faucibus purus. Donec enim diam vulputate ut pharetra sit. Pharetra
                            pharetra massa massa ultricies mi quis hendrerit dolor magna. Sed tempus urna et pharetra pharetra. Facilisis volutpat
                            est velit egestas dui id ornare arcu. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Leo integer malesuada
                            nunc vel risus commodo. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Rhoncus mattis rhoncus urna neque viverra.
                            Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.
                        </p>
                        <p>
                            Egestas pretium aenean pharetra magna ac placerat vestibulum. Nullam non nisi est sit amet facilisis magna etiam. Elit duis
                            tristique sollicitudin nibh sit. Diam donec adipiscing tristique risus nec. Convallis posuere morbi leo urna molestie.
                            Suscipit tellus mauris a diam maecenas sed enim. A cras semper auctor neque vitae. Id venenatis a condimentum vitae sapien
                            pellentesque habitant morbi tristique. Commodo nulla facilisi nullam vehicula. Enim facilisis gravida neque convallis a cras
                            semper. Sit amet purus gravida quis blandit. Nullam non nisi est sit amet facilisis magna. Habitant morbi tristique senectus
                            et netus et malesuada. Ut sem viverra aliquet eget sit amet. Tincidunt eget nullam non nisi est. Nisl vel pretium lectus
                            quam id leo in vitae turpis. Sagittis purus sit amet volutpat consequat. Pulvinar pellentesque habitant morbi tristique.
                        </p>
                    </div>
                </div>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
