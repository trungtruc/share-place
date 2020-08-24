import React from 'react';
import User from '../UserItem/UserItem';
import Card from '../../../shared/components/UIElements/Card';
import './UserList.css';


const UserList = (props) => {
  if(props.items.length === 0) {
    return (
      <div className='center'>
      <h2>No users found.</h2>
      </div>
    )
  }
  return <ul className='users-list'>
    {props.items.map(user => {
      return <User key={user.id}  
      id={user.id}
      name={user.name}
      image={user.image}
      placeCount={user.places}
      />
    })}
  </ul>
  
}
export default UserList;