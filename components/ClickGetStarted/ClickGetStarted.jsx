import React from "react";

function ClickGetStarted() {
  return (
    <div className="bg-white p-4">
      <p>
        By clicking{" "}
        <em>
          <strong>Get Started</strong>
        </em>
        , you consent and agree:
      </p>

      <div className="flex gap-2 p-2">
        <p>
          <input className="top-0" type="radio" checked="checked" />
        </p>
        <p>
          To permit poorcredit, QuickLoans to use my current account details to
          check if I already have an account with one of its connected websites.
        </p>
      </div>

      <div className="flex gap-2 p-2">
        <p>
          <input className="top-0" type="radio" checked="checked" />
        </p>
        <p>
          To receive marketing messages for loans as well as other
          credit-related items like banking, credit monitoring, debt relief, and
          credit repair.
        </p>
      </div>

      <div className="flex gap-2 p-2">
        <p>
          <input className="top-0" type="radio" checked="checked" />
        </p>
        <p>
          To the &nbsp;
          <a href="/privacypolicy" style={{ textDecoration: "underline" }}>
            Privacy Policy
          </a>
          ,{" "}
          <a href="/termsofuse" style={{ textDecoration: "underline" }}>
            Terms of Use
          </a>
          ,{" "}
          <a href="/addisclosure" style={{ textDecoration: "underline" }}>
            Ad Disclosure
          </a>
          ,{" "}
          <a
            href="/creditauthorization"
            style={{ textDecoration: "underline" }}
          >
            Credit Authorization
          </a>
          ,{" "}
          <a href="/ratesandfees" style={{ textDecoration: "underline" }}>
            Rates & Fees
          </a>{" "}
          and{" "}
          <a style={{ textDecoration: "underline" }} href="/econsent">
            E-Consent
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default ClickGetStarted;
