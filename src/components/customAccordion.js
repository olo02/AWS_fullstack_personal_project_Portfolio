import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

const CustomAccordion = (props) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
            >
                <Typography>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{props.content}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomAccordion;