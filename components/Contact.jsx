import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-teal-600 text-2xl font-bold text-center p-12 sm:pt-24">
        Contact Me
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-md p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-md p-3"
            type="emil"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-md p-3 w-full my-2"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-md p-3 w-full"
          cols="30"
          rows="10"
          placeholder="Message"
        />
        <button className="text-teal-600 font-bold border shadow-md p-3 w-full mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
