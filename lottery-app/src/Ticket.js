import React, { Component } from 'react';

class Ticket extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div className="ticket">
                <div>
                    <p>Lotto</p>
                </div>
                
                <div className="ticket-numbers">
                    <div className="number">1</div>
                    <div className="number">2</div>
                    <div className="number">3</div>
                    <div className="number">4</div>
                    <div className="number">5</div>
                    <div className="number">6</div>
                </div>

                <div>
                    <button className="main-button">Generate numbers. Good luck!</button>
                </div>
            </div>
        )
    }
}

export default Ticket;