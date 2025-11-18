import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700"><strong>Email:</strong> {email}</p>
      <p className="text-gray-600 mt-1">
        <strong>Address:</strong> {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
