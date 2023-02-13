import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>React - EAdangal Input data 👇</h1>
            <p>An example app to test Eadangal API</p>
            <p><Link to="users">&gt;&gt; Test Data</Link></p>
        </div>
    );
}

export { Home };