import logo from './logo.svg';
import './App.css';
import './index.css';
import JSONDATA from '../src/nick-cave-lyrics/lyrics.json';
import React, {useState} from 'react';

function App() {

    const [searchTerm,setSearchTerm] = useState('')

    return (
        <div className="App">
            <input type="text" placeholder="seach..." onChange={e=>setSearchTerm(e.target.value)} />
            {JSONDATA.filter((val)=>{
                if(searchTerm == ""){
                    return val
                }
                else if(val.lyric.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            }).map((val,key)=>{
                return <div>{val.lyric} </div>
            })
            }
        </div>
    );
}
export default App;
