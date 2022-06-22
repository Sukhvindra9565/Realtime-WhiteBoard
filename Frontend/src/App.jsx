import io from "socket.io-client";
import Forms from "./Components/forms";
import RoomPage from "./Pages/RoomPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const server = "http://localhost:5000";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const socket = io(server, connectionOptions);
const App = () => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    socket.on("userIsJoined", (data) => {
      console.log(data.success);
      if (data.success) {
        console.log("userjoined");
      } else {
        console.log("error");
      }
      // setuser(data);
    });
  }, []);
  const uuid = () => {
    var S4 = () => {
      return (((1 + Math.random()) * 0x1000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={<Forms uuid={uuid} socket={socket} setuser={setuser} />}
        ></Route>
        <Route path="/:roomId" element={<RoomPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
//yarn dev to run server
