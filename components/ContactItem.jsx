"use client";

import React from "react";

function ContactItem({ contactUrl, contactIcon, contactName }) {
  return (
    <div>
      <a href={contactUrl} target="_blank" rel="noreferrer">
        <div className="flex justify-center items-center p-2 text-xl hover:text-primary-light cursor-pointer">
          {contactIcon}
          <span className="ml-3">{contactName}</span>
        </div>
      </a>
    </div>
  );
}

export default ContactItem;
