import { useState, createContext, useContext } from "react";

const Customer = createContext();
export const CustomerContext =  () => {
    const user = useContext(CustomerContext);
 
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }