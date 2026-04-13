"use client";


import GAClient from "../components/GAclient";

export default function ClientProviders({ children }) {
  return (
    <>
    {children}
    <GAClient />
    </>
      
   
  );
}
