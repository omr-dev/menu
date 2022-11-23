import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';
import {useState} from 'react';

function App() {
    const [filter,setFilter]=useState<string>("all")

    return (
        <div className="App">
            <Header setFilter={setFilter} filter={filter}/>
            <Body filter={filter}/>
        </div>
    );
}

export default App;
