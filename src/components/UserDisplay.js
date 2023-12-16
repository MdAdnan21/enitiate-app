// components/UserDisplay.js
import React from 'react';

const UserDisplay = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p><strong>User ID:</strong> {user.userId}</p>
      <p><strong>Post ID:</strong> {user.id}</p>
      <p><strong>Title:</strong> {user.title}</p>
      <p><strong>Body:</strong> {user.body}</p>
    </div>
  );
};

export default UserDisplay;
