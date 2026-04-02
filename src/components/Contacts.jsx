'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('/contacts.json')
            .then(response => response.json())
            .then(data => setContacts(data["subsidiaries"]))
            .catch(error => console.error('Error fetching contacts:', error));
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-2 lg:justify-start justify-center lg:items-start items-center p-4 my-10 lg:w-10/12 mx-auto">
            
            
                {contacts.map((contact, index) => (
                    <div 
                    className="flex flex-col justify-center lg:justify-start lg:items-start items-center  lg:gap-2 w-9/12 mb-4 lg:text-base text-sm mx-auto text-center"
                    key={index}>
                    <Image
                        src={contact.image}
                        alt={`${contact.name} Logo`}
                        width={182}
                        height={134}
                        className=" rounded-xl w-[182px] h-[134px] shadow-lg"/>
                        <h3 className="lg:text-left text-center w-full text-2xl font-semibold mb-2 ">{contact.country}</h3>
                        <p className="lg:text-lg font-semibold"><span className="font-semibold"></span> {contact.name}</p>
                        {contact.contact && <p className="text-"><span className="font-semibold"></span> {contact.contact}</p>}
                        <p className="text-xs"><span className="font-semibold "></span> {contact.email}</p>
                        {contact.phone && <p className=""><span className="font-semibold"></span> {contact.phone}</p>}
                        {contact.address && <p className=""><span className="font-semibold"></span> {contact.address}</p>}
                            
                        
                        </div>
                ))}
            
        </div>
    );
}