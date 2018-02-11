import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HelloMessage from './base/header/header'

// let users = [
//   {
//     name: 'wq',
//     color: 'yellow',
//     age: 26,
//     height: 178,
//     id: 1
//   },
//   {
//     name: 'wq',
//     color: 'yellow',
//     age: 26,
//     height: 178,
//     id: 2
//   },
//   {
//     name: 'wq',
//     color: 'yellow',
//     age: 26,
//     height: 178,
//     id: 3
//   },
//   {
//     name: 'wq',
//     color: 'yellow',
//     age: 26,
//     height: 178,
//     id: 4
//   }
// ]

let count = 0

//  for (let i = 0; i <= 30; i++) {
//    users.push(users[0])
//  }


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='myApp-header'>
          首页
        </header>
        {/* <div className='content'>
          <ul>
            {
              users.map((user, index) => {
                return <li key={index}>{index}、名字：{user.name} 肤色：{user.color} 年龄：{user.age} 身高：{user.height}</li>
              })
            }
          </ul>
        </div> */}
        <HelloMessage />
        <footer className='footer'>
          <span onClick={console.log(1)}>增加</span>
          版权所有 @孙卫其
          <span>{count}</span>
        </footer>
      </div>
    );
  }
}

export default App;
