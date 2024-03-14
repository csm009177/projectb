import React, { useContext, useEffect, useState } from "react";
import { FetchApiDatasContext } from "../context/APIContext";

const CreateData: React.FC = () => {
  const {apiData, setApiData} = useContext(FetchApiDatasContext)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiData({
      ...apiData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
        
      }
      alert("Data created successfully");
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleInputChange}
      />
      <button type="submit">Create Data</button>
    </form>
  );
};

export default CreateData;