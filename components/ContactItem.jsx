"use client";

import React from "react";

function ContactItem({ contactUrl, contactIcon, contactName }) {
  return (
    <div>
      <a href={contactUrl} target="_blank" rel="noreferrer">
        <div className="flex justify-center items-center p-2 text-xl text-gray-600 hover:text-primary-light hover:font-bold cursor-pointer hover:scale-y-110 ease-in duration-300">
          {contactIcon}
          <span className="ml-3">{contactName}</span>
        </div>
      </a>
    </div>
  );
}

export default ContactItem;
