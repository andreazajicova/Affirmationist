import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

it('renders Dashboard without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard></Dashboard>, div);
})