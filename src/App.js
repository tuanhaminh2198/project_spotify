import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import { Songs } from './context';
import DataSongs from './data/songs.json'
import { useContext,useState} from 'react';
import Playing from './components/Playing';

function App() {
  const [song, setSong] = useState(DataSongs[0])

    const handleSetSong = (idSong) => {
      const song = DataSongs.find(song => song.id === idSong)
      if(!song) 
             setSong(DataSongs[0])
      else
             setSong(song)
    }
  return (
    <div className="App ">
   
        
       <Songs.Provider value={{ DataSongs,song,handleSetSong }}>
       <Navbar/>
        <div className='grid grid-cols-3 bg-slate-600  h-screen-navbar-player overflow-hidden '>
                {/*span 1 */} 
              <DetailSong/>
                {/*span 2 */} 
               <ListSong/>
               
             </div>
             <Playing/>
       </Songs.Provider>
    </div>
  );
}
export default App;

// export default App;
// import "./App.css";
// import Navbar from "./components/Navbar";
// import DetailSong from "./components/DetailSong";
// import ListSongs from "./components/ListSong";
// import { Songs } from "./context_1";
// import DataSongs from "./data/songs.json";
// import { Provider } from "react";
// // import Playing from "./components/Playing";
// import { useState } from "react";
// function App() {
//   const [song, setSong] = useState(DataSongs[0])

//   const handleSetSong = (idSong) => {
//     const song = DataSongs.find(song => song.id === idSong)
//     if(!song) 
//            setSong(DataSongs[0])
//     else
//            setSong(song)
//   }
//   return (
//     <div className="App">
//       <Songs.Provider value={{ DataSongs, song, handleSetSong}}>
//         <Navbar />
//         <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
//           {/* span 1 */}
//           <DetailSong />
//           {/* span 2 */}
//           <ListSongs />
//         </div>
        
//       </Songs.Provider>
//     </div>
//   );
// }

// export default App;
