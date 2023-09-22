"use client";
import React from "react";

function UnsubscribeForm() {
  return (
    <form id="unsubscribe_form">
      <label htmlFor="subsciber_email" className="font-bold">
        Email address :
      </label>
      <div className="p-2 border w-full">
        <input
          className="w-full px-2"
          placeholder="unsubscribe@email.com"
          required
          type="email"
          id="subsciber_email"
          name="subsciber_email"
        />
      </div>

      <br />
      <div className="pt-8">
        <button
          className="w-full py-2 text-xs text-white font-semibold bg-[#0767A8]"
          type="submit"
        >
          Unsubscribe
        </button>
      </div>
    </form>
  );
}

export default UnsubscribeForm;
