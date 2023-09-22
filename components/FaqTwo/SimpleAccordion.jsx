import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { GoTriangleDown } from "react-icons/go";

export default function SimpleAccordion({ header, body }) {
  const [on, setOn] = React.useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div className={on && "selected__accent"}></div>
      <Accordion sx={{ padding: "20px", borderRadius: "20px" }}>
        <AccordionSummary
          onClick={() => {
            setOn(!on);
          }}
          expandIcon={<GoTriangleDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "500",
              fontFamily: "Poppins",
              color: "darkBlue",
            }}
          >
            {header}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Poppins" }}>{body}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
