import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

const app = shallow(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});

it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to `state` when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.state().gifts).toEqual([{id: 1}]);
});

it('increments the id each time a gift is added', () => {
    app.find('.btn-add').simulate('click');
    expect(app.state().gifts).toEqual([{id: 1}, {id: 2}]);
});