"use client";
import React from "react";

function CCPAForm() {
  const submitForm = (e) => {
    e.preventDefault();

    // const formData = new FormData(e.target);
    const formData = new FormData(document.getElementById("ccpa_form"));

    console.log(formData);
  };

  return (
    <form id="ccpa_form">
      <div className="form-check">
        <input
          type="checkbox"
          required
          className="form-check-input"
          name="state"
          value="CA"
        />
        <strong> Do you certify that you are a California resident?</strong>
      </div>
      <div className="pt-4">
        <input type="hidden" name="state" value="CA" />
      </div>
      <label htmlFor="firstname">Name:&nbsp; &nbsp;</label>
      <div className="pt-2">
        <div className="p-2 border w-2/3 flex gap-4">
          <input
            className="w-full px-4"
            required
            placeholder="Jonas"
            type="text"
            name="firstname"
            id="firstname"
          />
          <input
            className="w-full px-4"
            required
            placeholder="Hodges"
            type="text"
            id="lastname"
            name="lastname"
          />
        </div>
      </div>

      <br />
      <label htmlFor="street_address">Street Address:&nbsp; &nbsp;</label>
      <div className="pt-2">
        <div className="p-2 border w-2/3 flex gap-4">
          <input
            className="w-full px-4"
            placeholder="Arlington Avenue, 2th and 37th street"
            required
            type="text"
            id="street_address"
            name="street_address"
          />
        </div>
      </div>

      <div className="pt-2">
        <div className="p-2 border w-2/3 flex gap-4">
          <input
            className="w-full px-4"
            placeholder="Seattle"
            required
            type="text"
            id="city"
            name="city"
          />

          <input
            className="w-full px-4"
            placeholder="980012"
            required
            type="text"
            id="zipcode"
            name="zipcode"
          />
        </div>
      </div>

      <br />
      <label htmlFor="email">Contact Information:</label>
      <div className="pt-2">
        <div className="p-2 border w-2/3 flex gap-4">
          <input
            className="w-full px-4"
            placeholder="sample@email.com"
            required
            type="email"
            id="email_address"
            name="email_address"
          />

          <input
            className="w-full px-4"
            placeholder="1-800-8900-123"
            required
            type="tel"
            id="phone_number"
            name="phone_number"
          />
        </div>

        <div className="text-xs pt-4 italic">
          <p className="mb-1 ">By submitting this form, you certify:</p>
          <ol className="list-disc p-4">
            <li>that you have carefully read the instructions on this page,</li>
            <li>
              all the information you provided on this page is true and
              accurate, and
            </li>
            <li>
              you are the person whose information is being submitted on this
              page.
            </li>
          </ol>
        </div>

        <div className="w-1/5">
          <button
            className="w-full py-2 text-xs text-white font-semibold bg-[#0767A8]"
            type="submit"
            // onClick={submitForm}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default CCPAForm;
