import React, { Component } from 'react';
import { fruits } from './foods';
import { generateRandomFruit, removeFruit } from './helpers';

class App extends Component {
    render() {
        const fruit = generateRandomFruit(fruits);

        return (
            <div>
                <h1>Hello from React App.</h1>
                {console.log(`I would like some ${fruit}, please.`)}
                {console.log(`Here you go: ${fruit}`)}
                {console.log(`Delicious! May I have another?`)}
                {console.log(`I am sorry we have only ${removeFruit(fruits, fruit)} left.`)}
            </div>
        );
    }
}

export default App;