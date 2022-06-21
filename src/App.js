import React from "react";
import Post from "./Post";
import { QqOutlined } from '@ant-design/icons'

function App() {
  return (
    <div className="App">
      <QqOutlined style={{ color: '#00bfff', fontSize: '70px' }} />
      <h1>Вход</h1>
      <Post />

    </div>
  );
}

export default App;
