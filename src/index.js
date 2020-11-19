import React from 'react'
import ReactDOM from 'react-dom';
import TableDisplay from './TableDisplay.js'

const App = () => {
    return <div> <TableDisplay /></div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));