import Link from "next/link";
import React from "react";

function Services() {
  return (
    <div className="px-16">
      <div className="px-[400px] py-8 text-2xl font-bold text-center text-[#27374C]">
        <p>Your strategy for obtaining the funds you require</p>
      </div>
      {/* ############################## */}
      <div className="grid grid-cols-3 gap-6 text-sm leading-6">
        <div className="border-[.05rem] px-8 pb-8 pt-4 hover:border-zinc-950 shadow-md">
          <p className="font-bold text-[16px] leading-7 py-2 text-[#27374C]">
            Our service is free to use
          </p>
          <div className="opacity-70">
            <p>
              No extra costs. No up-front expenses. There is none. Before
              accepting any money, review your loan offer.
            </p>
            <br />
            <p>Review Rates & Fees and Terms of Use for more information.</p>
          </div>
        </div>

        <div className="border-[.05rem] px-8 pb-8 pt-4 hover:border-zinc-950 shadow-md">
          <p className="font-bold text-[16px] leading-7 py-2 text-[#27374C]">
            Get funding fast, directly to your account
          </p>
          <div className="opacity-70">
            <p>
              You can quickly connect with funding opportunities by filling out
              our simple online form. If accepted, you could have your money as
              soon as the following working day.
            </p>
          </div>
        </div>

        <div className="border-[.05rem] px-8 pb-8 pt-4 hover:border-zinc-950 shadow-md">
          <p className="font-bold text-[16px] leading-7 py-2 text-[#27374C]">
            Request a loan for any occasion
          </p>

          <div className="opacity-70">
            <p>
              You can use Poorcredit, QuickLoans for everything that comes your
              way. Whether you need money for an emergency, home improvement,
              new business venture, unanticipated payment, or family vacation,
              we can help you.
            </p>
          </div>
        </div>

        <div className="border-[.05rem] px-8 pb-8 pt-4 hover:border-zinc-950 shadow-md">
          <p className="font-bold text-[16px] leading-7 py-2 text-[#27374C]">
            Competitive Rates Available
          </p>{" "}
          <div className="opacity-70">
            <p>
              In our network and the various third-party lender networks we use,
              there are a wide range of lenders. Some of these lenders might
              provide rates that are reasonable. Learn more about our
              Responsibility Pledge and How It Works.
            </p>
          </div>
        </div>

        <div className="border-[.05rem] px-8 pb-8 pt-4 hover:border-zinc-950 shadow-md">
          <p className="font-bold text-[16px] leading-7 py-2 text-[#27374C]">
            Access our extended lender network
          </p>

          <div className="opacity-70">
            <p>
              We send your request out to our extended network of third-party
              non-lender lender networks in the event that we are unable to
              locate a lender in our direct lender network who may be ready to
              offer you a loan. This improves your chances of being put in touch
              with a lender and allows us to monetize our free service. Learn
              more in our Ad Disclosure.
            </p>
          </div>
        </div>

        <div className="border-[.05rem] px-8 pb-8 pt-4 hover:border-zinc-950 shadow-md">
          <p className="font-bold text-[16px] leading-7 py-2 text-[#27374C]">
            Learn about other credit-related product
          </p>
          <div className="opacity-70">
            <p>
              We will present you with offers for additional credit-related
              goods and services when you use our service. This additional
              marketing enables us to generate revenue from our free service.
              Learn more in our Ad Disclosure.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="w-full py-12 items-center justify-center flex">
        <Link href={"/applicationform"}>
          <button className="bg-[#0767a8] text-white text-sm font-semibold p-3 w-[320px]">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
