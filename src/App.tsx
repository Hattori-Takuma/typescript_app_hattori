import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserType } from "./types/UserType";
import axios from 'axios';
import getData from './getData.json'
import Login from './compornent/Login'


const App: React.FC <{}>= () =>  {




  type DataType = typeof getData;

  const isFlag1: boolean = true;
  const isFlag2: boolean = false;
  // const isFlag3: boolean = 'aaa';

  const num1: number = 10;
  const num2: number = -10;
  // const num3: number = 'aaa';

  const str1: string = 'aaa';
  // const str2: string = -10;
  // const str3: string = false;

  let temp: string[] = ['adf', 'kdk', 'iku'];
  let temp2: Array<string> = ['adf', 'kdk', 'iku'];

  let taple: [string, number] = ['hattori', 9999];

  let profile1: any = 123456;
  let profile2: any = 'test';
  let profile3: any = false;


  // const test = (): void => {
  //   return 'hello'
  // };

  // const error = (number: string): never => {
  //   throw new Error();
  // };

  // console.log(error('hello'));

  let object2: { id: number, name: string } = { id: 1, name: 'hattori' };

  type TestType = {
    id: number,
    name: string
  }

  let object1: TestType = { id: 1, name: 'hattori' };

  interface ObjectInterface {
    id: number;
    name: string;
  }
  let object3: ObjectInterface = { id: 1, name: 'hattori' };

  const kansu = (): number => 43;

  let numberAny: any = kansu();
  let numberUnkouwn: unknown = kansu();

  let sum1 = 10 + numberAny;
  // let sum2 = 10 + numberUnknown;

  type Pitcher1 = {
    throwingSpeed: number;
  };

  type Batter1 = {
    battingAverage: number;
  };

  type TwoWayPlayer = Pitcher1 & Batter1;

  let ootani: TwoWayPlayer = {
    throwingSpeed: 154,
    battingAverage: 3.65,
  }

  interface MondaiInterface{
    id: number;
    name: string;
    url: string;
    isStart: boolean;
  }

  const mondai:MondaiInterface = {
    id: 1,
    name: 'mondai',
    url: 'https://mondai.com',
    isStart: true,
  }

  const mondai2:UserType = {
    id: 1,
    name: 'mondai',
    url: 'https://mondai.com',
    isStart: true,
  }

  const handleAxios = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data: DataType = res.data
    console.log(data)
}

  <Login id="1" name="hattori" age={25} isLive={true} />
  




  
  




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleAxios} >Data取得</button>
      </header>
    </div>
  );
}

export default App;
