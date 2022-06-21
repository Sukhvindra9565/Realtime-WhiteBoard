import Forms from './Components/forms';
import {Route, Routes} from "react-router-dom";
import './App.css'
import RoomPage from './Pages/RoomPage';

const App = ()=> {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Forms/>}></Route>
        <Route path="/:roomId" element={<RoomPage/>}></Route>
      </Routes>
    </div>
  );
};

export default App
//yarn dev to run server