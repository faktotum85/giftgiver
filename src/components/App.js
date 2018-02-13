import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Gift from './Gift';

class App extends Component {
    state = {
        gifts: []
    }

    addGift = () => {
        const gifts = [...this.state.gifts];
        const ids = gifts.map(gift => gift.id);
        const nextId = Math.max(...ids, 0) + 1;

        gifts.push({id: nextId});
        this.setState({gifts});
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({gifts});
    }

    render() {
        const gifts = this.state.gifts.map(gift => (
            <Gift 
                key={gift.id}
                gift={gift}
                removeGift={this.removeGift}
            />
        ));

        return (
            <div>
                <h1>Gift Giver</h1>
                <ul className='gift-list'>
                    {gifts}
                </ul>
                <Button onClick={this.addGift} className='btn-add'>Add Gift</Button>
            </div>
        )
    }
}

export default App;