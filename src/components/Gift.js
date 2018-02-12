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
            <div>
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
            </div>
        );
    }
}

export default Gift;