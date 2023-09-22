import React from "react";

function SiteMap() {
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
          Site Map
        </p>
      </div>

      <div className="px-16 leading-7 pb-16">
        <div className="opacity-70 shadow-md p-4 border text-justify">
          {/* <div className="container"> */}
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tbody>
              <tr>
                <td className="lpage">
                  <a href="/">Home</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/about">About Us</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/personalloans">How It Works</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/faq">FAQ</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/badcredit">Bad Credit</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/onlineloans">Online Loans</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/fastcash">Fast Cash</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/taxloans">Tax Loans</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/paydayloans">Payday Loans</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/debtconsolidation">Debt Consolidation</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/emergency">Emergency</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/homeimprovement">Home Improvement</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/privacypolicy">Privacy Policy</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/termsofuse">Terms of Use</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/ratesandfees">Rates and Fees</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="#contact-info">Contact us</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/lending-policy">Responsible Lending Policy</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/badcredit">How to Get a Loan with Bad Credit</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/econsent">E-Consent</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/scam-alerts">Scam Alerts</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/thirdparties">Third Parties</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/disclosure">Ad Disclosure</a>
                </td>
              </tr>
              <tr>
                <td className="lpage">
                  <a href="/creditauthorization">Credit Authorization</a>
                </td>
              </tr>
            </tbody>
          </table>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default SiteMap;
