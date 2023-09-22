import React from "react";

function ScamAlerts() {
  return (
    <div
      className="pt-16 px-16"
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(180deg, rgba(7, 103, 168, 0.19) 0%, rgba(7, 103, 168, 0) 100%)",
      }}
    >
      <div className="A1 flex items-center justify-center">
        <p className="w-3/5 pt-16 text-center pb-12 text-4xl text-[#27374C] font-extrabold">
          Scam Alerts
        </p>
      </div>

      <div className="px-16 leading-7 pb-16">
        <div className="opacity-70 shadow-md p-4 border text-justify">
          <div className="container">
            <p>
              The growth of the online lending industry has brought a multitude
              of benefits to American consumers. Unfortunately, it has also
              created many new opportunities for fraudsters to attempt to scam
              and defraud our customers. These unsavory individuals attempt to
              collect personal information or money from you to use for their
              own gain, and can cause you huge headaches and financial losses.
            </p>
            <br />
            <p>
              Fortunately, poorcreditquickloans.com is here to help! We make
              protecting our customers a top priority, which is why we have
              created this helpful resource to advise you of common scammer
              tactics and the things you should look out for so that you can
              avoid falling victim to a scam. The sections below provide helpful
              information about the types of scams that are most often reported,
              and explain some of the tactics that scammers commonly use. By
              knowing what to look out for, you can avoid falling victim to one
              of these scams.
            </p>
            <br />
            <span className="text-2xl font-extrabold">
              Common Tactics and Things to Look Out For
            </span>
            <br />
            <br />
            <ul>
              <li>
                <b>
                  Threatening or harassing phone calls stating that you owe
                  money
                </b>
                <p>
                  All of the lenders in our network and in the other third-party
                  lender networks in our extended network are required by law to
                  engage in fair debt collection practices and are not permitted
                  by law to make threats or harass you, even if you do owe
                  money. If you get a threatening or harassing phone call from
                  someone claiming to be associated with PoorCreditQuickLoans or
                  one of our lenders, it is most likely a scam. We recommend
                  that you report the caller, and make sure you do not provide
                  the caller with any of your personal information.
                </p>
              </li>
              <br />
              <li>
                <b>Phone calls offering you a loan</b>
                <p>
                  At PoorCreditQuickLoans, our loan request process is entirely
                  online and we do not solicit customers over the phone. If you
                  get a call from someone who claims to be PoorCreditQuickLoans
                  and is offering you a loan, it is a scam. Do not provide the
                  caller with any personal information.
                </p>
              </li>
              <br />
              <li>
                <b>Phone calls requesting you to send money</b>
                <p>
                  Many scammers will call customers and claim that the customer
                  has been approved for a loan but needs to pay money in order
                  to receive it. The caller may request that you send a wire
                  transfer or check to them. None of the lenders in the
                  PoorCreditQuickLoans network make you pay before you receive a
                  loan, so If someone calls you requesting you to send them
                  money for this purpose, it is a scam. Do not provide the
                  caller with any personal information and do not provide them
                  with any funds.
                </p>
              </li>
              <br />
              <li>
                <b>
                  Callers who claim to be from PoorCreditQuickLoans or to be
                  calling on behalf of PoorCreditQuickLoans
                </b>
                <p>
                  At poorcreditquickLoans.com, we do not make any outbound calls
                  to customers unless you have specifically requested that we
                  contact you. If you get an unsolicited phone call, or a phone
                  call from any number other than 800-380-CASH, the call is not
                  from PoorCreditQuickLoans. Do not provide the caller with your
                  personal information.
                </p>
              </li>
              <br />
              <li>
                <b>
                  Requests for bank account information or online log-in
                  information
                </b>
                <p>
                  If you receive a call from someone claiming that you have been
                  approved for a PoorCreditQuickLoans and requesting your bank
                  account information, or online banking log-in information,
                  it’s a scam. The lenders in our network obtain all the
                  information they need from you online during the loan request
                  process, and would never need access to your online banking.
                  Do not provide these callers with your banking information.
                </p>
              </li>
              <br />
            </ul>
            <b>What to Do if You’ve Been Scammed</b>
            <p>
              As a proud member of the OLA, PoorCreditQuickLoans is serious
              about protecting your personal information. If you believe you
              have received a fraudulent phone call like those discussed above,
              we advise you to report the caller to the Online Lenders Alliance
              consumer hotline. The information you provide can help to inform
              other consumers so that they can avoid future scam attempts.
            </p>
            <br />
            <p>
              To learn more about the OLA and its Consumer Hotline, visit:{" "}
              <a
                target="_blank"
                href="https://onlinelendersalliance.org/resources/ola-consumer-hotline-1-866-299-7585/"
                rel="noopener noreferrer nofollow"
              >
                http://onlinelendersalliance.org/resources/ola-consumer-hotline-1-866-299-7585
              </a>
              .
            </p>
            <br />
            <p>
              To report a fraud or scam, call the OLA Consumer Hotline at:
              1-866-299-7585
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScamAlerts;
