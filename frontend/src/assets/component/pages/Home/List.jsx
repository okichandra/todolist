import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function List({ task }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='mt-4 flex flex-col gap-2'>
            {
                task.map((ell, i) => (
                    <Accordion key={i} className='bg-main-color' expanded={expanded === `panel${i + 1}`} onChange={handleChange(`panel${i + 1}`)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            className='flex rounded-lg bg-main-color'
                        >
                            <div className="">
                            <Typography className='capitalize'>{ell.taskName}</Typography>
                            <Typography >{ell.dueDate.date} {ell.dueDate.moonth}</Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {ell.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    );
}
export default List