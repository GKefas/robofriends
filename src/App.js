import React, { Component } from "react";
import SearchBox from './SearchBox';
import CardList from './Cardlist';
import Scroll from './Scroll';



class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({ robots: users }));


    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }


    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return <h1 className="f1 tc">Loading</h1>;
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                    <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;