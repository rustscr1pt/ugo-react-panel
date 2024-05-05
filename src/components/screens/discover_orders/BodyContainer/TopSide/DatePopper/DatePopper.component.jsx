import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import "./DatePopper.style.sass";
import BasicDateCalendar from "./date-picker";
import PopperButton from "./PopperButton";
import DateCloseButton from "./DateCloseButton";

const DatePopper = (props) => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    return (
        <div className="date-popper-container">
            <PopperButton id={id} handleClick={handleClick}/>
            <Popper
                style={{zIndex : 10, paddingTop : "0.5%"}}
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="bottom-end"
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display : "flex", flexDirection : "column", alignItems : "center" }}>
                            <DateCloseButton
                                setAnchorEl={setAnchorEl}
                                setOpen={setOpen}
                                setPage={props.setPage}
                                setFilterCondition={props.setFilterCondition}
                                setFilteredQuery={props.setFilteredQuery}
                            />
                            <BasicDateCalendar
                                setFilterType={props.setFilterType}
                                setFilteredQuery={props.setFilteredQuery}
                                setFilterCondition={props.setFilterCondition}
                            />
                        </Box>
                    </Fade>
                )}
            </Popper>
        </div>
    );
}

export default DatePopper;