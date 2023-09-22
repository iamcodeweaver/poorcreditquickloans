import React from "react";
import CCPAForm from "./CCPAForm";

const CCPA = () => {
  return (
    <>
      <div
        className="pt-16 px-16"
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(7, 103, 168, 0.19) 0%, rgba(7, 103, 168, 0) 100%)",
        }}
      >
        <div className="row">
          <div className="A1 flex items-center justify-center">
            <p className="w-3/5 pt-16 text-center pb-12 text-4xl text-[#27374C] font-extrabold">
              California Consumer Protection Act (CCPA) -
              Opt&#8209;Out&nbsp;Request
            </p>
          </div>

          <div className="px-16 leading-7 pb-16">
            <p className="pb-8 text-justify">
              If you are a California resident, you have the right to direct us
              to not sell your personal information to third parties by filing
              an &quot;Opt-Out Request&quot; under the California Consumer
              Privacy Act. More information about what we collect and how we
              share your personal information is available in the Privacy Policy
              of the website from which you reached this page. If you are a
              California resident and do not wish for us to sell your personal
              information to third parties, please complete and submit the form
              below.
            </p>
            <hr />
            <div className="shadow-md pb-8 p-8">
              {/* ---------------------------- */}
              <CCPAForm />
              {/* ---------------------------- */}
            </div>
            <div className="pt-8 text-justify text-xs">
              <strong>IMPORTANT:</strong> After completing this form, you will
              receive an automated email so we can verify your email address.
              Please follow the instructions in that email in order to verify
              that you are the proper account holder and to complete your form
              submission. We will review your submission and if the information
              provided matches personal information in our databases, we will
              not sell your information to any third parties. We will respond to
              and take action on all verified requests within 45 days of form
              submission and verification.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CCPA;
