import React, {Component} from 'react';
import './header.scss'

let users = [
  {
    name: 'wq',
    color: 'yellow',
    age: 26,
    height: 178,
    id: 1
  },
  {
    name: 'wq',
    color: 'yellow',
    age: 26,
    height: 178,
    id: 2
  },
  {
    name: 'wq',
    color: 'yellow',
    age: 26,
    height: 178,
    id: 3
  },
  {
    name: 'wq',
    color: 'yellow',
    age: 26,
    height: 178,
    id: 4
  }
]


 for (let i = 0; i <= 30; i++) {
   users.push(users[0])
 }
class HelloMessage extends Component{
  render() {
    return (
      <div className='content'>
      <ul>
        {
          users.map((user, index) => {
            return <li key={index}>{index}、名字：{user.name} 肤色：{user.color} 年龄：{user.age} 身高：{user.height}</li>
          })
        }
      </ul>
    </div>
    )
  }
}

export default HelloMessage