import './App.css';
import './index.css';
import JSONDATA from '../src/nick-cave-lyrics/lyrics.json';
import React, {useState} from 'react';

function App() {

    const [searchTerm,setSearchTerm] = useState('')

    return (
        <div className="App">
            <input type="text" placeholder="search lyrics..." onChange={e=>setSearchTerm(e.target.value)} />
            {JSONDATA.filter((val)=>{
                if(searchTerm == ""){
                    return 
                }
                else if(val.lyric.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            }).map((val,key)=>{
                return <article>
                        <h2>{val.song} – <em>{val.album}</em></h2>
                        <ul>
                            <li>{val.prev}</li>
                            <li>{val.lyric}</li>
                            <li>{val.next}</li>
                        </ul>
                    </article>
            })
            }
        </div>
    );
}
export default App;
