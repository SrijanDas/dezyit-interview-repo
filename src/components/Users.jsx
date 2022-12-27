import React from "react";

function Users({ users }) {
  // console.log(users);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Users</h1>
      <div className="flex flex-col gap-4">
        {users.map((user, i) => (
          <div
            className="flex flex-col p-5 gap-2 rounded-md shadow-md border border-gray-300"
            key={user.id}
          >
            <span className="text-xl font-semibold">
              username: {user.username}
            </span>
            <span>Name: {user.name}</span>
            <span>email: {user.email}</span>
            <span>phone: {user.phone}</span>
            <span>website: {user.website}</span>
            {/* <span>Address: {`${user.address.suit}, ${user.address.street}`}</span>
            <span>Company: company</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
