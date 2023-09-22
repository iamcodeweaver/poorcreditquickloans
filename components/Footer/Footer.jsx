import React from "react";
import Image from "next/image";
import Logo from "@/public/images/pcql_header_logo.png";
import FooterBase from "@/components/Footer/FooterBase";
const Footer = () => {
  return (
    <div className="px-16 pt-4 bg-[#d5e6f1]">
      <div className="flex gap-12 text-xs leading-6">
        <div>
          <Image src={Logo.src} alt="" height={100} width={100} />
        </div>
        <div>
          <p className="font-bold leading-7">Loan Guides</p>
          <ul className="opacity-70">
            <li>
              <a href="/badcredit">Bad Credit</a>
            </li>
            <li>
              <a href="/fastcash">Fast Cash</a>
            </li>
            <li>
              <a href="/debtconsolidation">Debt Consolidation</a>
            </li>
            <li>
              <a href="/emergency">Emergency</a>
            </li>
            <li>
              <a href="/homeimprovement">Home Improvement</a>
            </li>
            <li>
              <a href="/onlineloans">Online Loans</a>
            </li>
            <li>
              <a href="/taxloans">Tax Loans</a>
            </li>
            <li>
              <a href="/paydayloans">Payday Loans</a>
            </li>
          </ul>
        </div>
        <div className="break-all">
          <p className="font-bold leading-7">Legal</p>
          <ul className="opacity-70">
            <li>
              <a href="/ratesandfees">Rates & Fees</a>
            </li>
            <li>
              <a href="/privacypolicy">Privacy Policy</a>
            </li>
            <li>
              <a href="/termsofuse">Terms of Use</a>
            </li>
            <li>
              <a href="/econsent">E-consent</a>
            </li>
            <li>
              <a href="/addisclosure">Ad Disclosure</a>
            </li>
            <li>
              <a href="/thirdparty">Third Parties</a>
            </li>
            <li>
              <a href="/creditauthorization">Credit Authorization</a>
            </li>
            <li>
              <a href="/ccpa">
                California Residents: Do Not Sell My <br />
                Personal Information
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold leading-7">Our Company</p>
          <ul className="opacity-70">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/howitworks">How It works</a>
            </li>
            <li>
              <a href="/thefaq">FAQ</a>
            </li>
            <li>
              <a href="/lendingpolicy">Responsible Lending</a>
            </li>
            <li>
              <a href="/scamalerts">Scam Alerts</a>
            </li>
            <li>
              <a href="/sitemap">Sitemap</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold leading-7">Contact Information</p>
          <ul className="opacity-70">
            <li>
              <a>Address: 2661 N Pearl St. #431 Tacoma, WA 98407</a>
            </li>
            <li>
              <a>Telephone number: 1-800-722-2274</a>
            </li>
            <li>
              <a>Email address: support@poorcreditquickloans.com</a>
            </li>
            <hr />
            <li>
              <a href="/contactus">Contact us</a>
            </li>
            <li>
              <a href="/affiliateprogramme">Affiliate Programme</a>
            </li>
            <li>
              <a href="/unsubscribe">Unsubscribe</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-2">
        <hr />
      </div>
      <FooterBase />
      <div className="">
        <small>Copyright © 2023 Peddle Technologies</small>
      </div>
    </div>
  );
};

export default Footer;
