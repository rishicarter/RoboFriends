import { Component } from 'react';
import CardList from '../components/CardList';
import Searchfield from '../components/Searchfield';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../containers/errorBoundary';

class App extends Component{
    constructor(){
        super();
        this.state={
            robots : [],
            searchbox : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchbox : event.target.value});
    }

    render(){
        const { robots, searchbox } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchbox.toLowerCase());
        })
        return (!robots.length) ?
         <h1>LOADING....</h1> :
        (
            <>
                <h1 className='tc'>Robo-Friends!!!</h1>
                <Searchfield searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </>
        );
    }
}

export default App;