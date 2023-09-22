"use client";
import React from "react";

function ContactForm() {
  return (
    <form id="contact_form">
      <label htmlFor="contact_name" className="font-bold">
        Name:{" "}
      </label>
      <div className="p-2 border w-full">
        <input
          className="w-full px-2"
          required
          placeholder="Jonas Hodges"
          type="text"
          name="contact_name"
          id="contact_name"
        />
      </div>

      <br />
      <label htmlFor="contact_email" className="font-bold">
        Email Address:
      </label>
      <div className="p-2 border w-full">
        <input
          className="w-full px-2"
          placeholder="contactmail@email.com"
          required
          type="email"
          id="contact_email"
          name="contact_email"
        />
      </div>

      <br />
      <label htmlFor="the_message" className="font-bold">
        Message:
      </label>
      <div className="p-2 border w-full">
        <textarea
          className="w-full px-2"
          placeholder="... your request/opinion matters."
          required
          type="text"
          id="the_message"
          name="the_message"
          rows={5}
        />
      </div>

      <br />
      <div className="pt-2">
        <button
          className="w-full py-2 text-xs text-white font-semibold bg-[#0767A8]"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
