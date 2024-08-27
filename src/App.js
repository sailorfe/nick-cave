import './styles/App.css';
import './styles/index.css';
import JSONDATA from '../src/nick-cave-lyrics/lyrics.json';
import React, {useState} from 'react';

function App() {

    const [searchTerm,setSearchTerm] = useState('')

    return (
        <div className="App">
            <input type="text" placeholder="search word or phrase..." onChange={e=>setSearchTerm(e.target.value)} />
            <section>
            {JSONDATA.filter((val)=>{
                if(searchTerm == ""){
                    return 
                }
                else if(val.lyric.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            }).map((val,key)=>{
                return <article>
                        <h2>{val.song}</h2>
                        <ul>
                            <li>{val.prev}</li>
                            <li>{val.lyric}</li>
                            <li>{val.next}</li>
                        </ul>
                        <ol>
                            <li><em>{val.album}</em></li>
                            <li>{val.artist}</li>
                        </ol>
                    </article>
            })
            }
            </section>
        </div>
    );
}
export default App;
