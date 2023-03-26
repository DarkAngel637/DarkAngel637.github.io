/*
 * @Author: Dark Angel
 * @Date: 2023-03-21 22:39:14
 * @LastEditTime: 2023-03-25 04:30:45
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\src\App.js
 */
import logo from './logo.svg';
import './App.css';
import CustomTable from './components/CustomTable';
import { Watermark } from 'antd';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Watermark content='darkangel637'>
      <CustomTable/>
      </Watermark>
    </div>
  );
}

export default App;
