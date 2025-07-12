import React, { useState, useEffect } from "react";

const AddUserForm = ({ user, onSubmit }) => {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");

  useEffect(() => {
    setName(user.name || "");
    setEmail(user.email || "");
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onSubmit({ id: Date.now(), name, email });
      setName("");
      setEmail("");
    } else {
      alert("Both fields are required!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />

      <button type="submit">
        {user.id ? "Update" : "Add"}
        User
      </button>
    </form>
  );
};

export default AddUserForm;