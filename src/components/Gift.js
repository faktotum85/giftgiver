import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Gift extends Component {
    state = {
        person: '',
        present: ''
    }

    onInputChange = event => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        return (
            <div className="gift">
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl 
                            name="person" 
                            className="input-person" 
                            onChange={this.onInputChange} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Present</ControlLabel>
                        <FormControl
                            name="present"
                            className="input-present"
                            onChange={this.onInputChange}
                        />
                    </FormGroup>
                </Form>
                <Button 
                    className="btn-remove" 
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                >
                    Remove
                </Button>
            </div>
        );
    }
}

export default Gift;