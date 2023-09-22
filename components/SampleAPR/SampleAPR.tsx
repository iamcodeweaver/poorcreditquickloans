import React from "react";
// import "./standardTable.css";

const SampleAPR = () => {
  return (
    <div className="px-16 py-4">
      <div className="p-8 text-center font-bold text-2xl text-[#27374C]">
        Example of a Personal Loan APR Range
      </div>
      <div className="items-center justify-center flex">
        <table className="opacity-80 shadow-md leading-10" width={"60%"}>
          <thead className="leading-5">
            <tr className="bg-white border-[0.1rem]">
              <th className="border" scope="col">
                Term
              </th>
              <th className="border" scope="col">
                Loan Amount
              </th>
              <th className="border" scope="col">
                Rate(APR){" "}
                <span>
                  <p style={{ fontSize: 8 }}>(Qualified Customers only)</p>
                </span>
              </th>
              <th className="border" scope="col">
                No of Payments
              </th>
              <th className="border" scope="col">
                Monthly Payment
              </th>
              <th className="border" scope="col">
                Total Payments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-[0.1rem]">
              <td className="border" data-label="Term">
                2 Years
              </td>
              <td className="border" data-label="Loan Amount">
                $8,500
              </td>
              <td className="border" data-label="Rate(APR)">
                6.99%
              </td>
              <td className="border" data-label="Payments">
                24
              </td>
              <td className="border" data-label="Montly Pay">
                $380.53
              </td>
              <td className="border" data-label="Total Pay">
                $9,312.68
              </td>
            </tr>
            <tr className="bg-white border-[0.1rem]">
              <td className="border" scope="row" data-label="Term">
                3 Years
              </td>
              <td className="border" data-label="Loan Amount">
                $10,000
              </td>
              <td className="border" data-label="Rate(APR)">
                8.34%
              </td>
              <td className="border" data-label="Payments">
                36
              </td>
              <td className="border" data-label="Montly Pay">
                $314.93
              </td>
              <td className="border" data-label="Total Pay">
                $11,337.64
              </td>
            </tr>
            <tr className="bg-white border-[0.1rem]">
              <td className="border" scope="row" data-label="Term">
                4 Years
              </td>
              <td className="border" data-label="Loan Amount">
                $15,000
              </td>
              <td className="border" data-label="Rate(APR)">
                10.45%
              </td>
              <td className="border" data-label="Payments">
                48
              </td>
              <td className="border" data-label="Montly Pay">
                $383.69
              </td>
              <td className="border" data-label="Total Pay">
                $18,417.05
              </td>
            </tr>
            <tr className="bg-white border-[0.1rem]">
              <td className="border" scope="row" data-label="Term">
                5 Years
              </td>
              <td className="border" data-label="Loan Amount">
                $20,000
              </td>
              <td className="border" data-label="Rate(APR)">
                8.54%
              </td>
              <td className="border" data-label="Payments">
                60
              </td>
              <td className="border" data-label="Montly Pay">
                $410.72
              </td>
              <td className="border" data-label="Total Pay">
                $24,646.98
              </td>
            </tr>

            <tr className="bg-white border-[0.1rem]">
              <td className="border" scope="row" data-label="Term">
                6 Years
              </td>
              <td className="border" data-label="Loan Amount">
                $30,000
              </td>
              <td className="border" data-label="Rate(APR)">
                7.99%
              </td>
              <td className="border" data-label="Payments">
                72
              </td>
              <td className="border" data-label="Montly Pay">
                $525.85
              </td>
              <td className="border" data-label="Total Pay">
                $37,861.25
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SampleAPR;
