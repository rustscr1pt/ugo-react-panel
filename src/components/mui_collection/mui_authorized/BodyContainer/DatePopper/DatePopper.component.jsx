import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import "./DatePopper.style.sass";
import BasicDateCalendar from "./date-picker";
import PopperButton from "./PopperButton";

const DatePopper = () => {
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
                style={{zIndex : 10}}
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="bottom-end"
                transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                            <BasicDateCalendar/>
                        </Box>
                    </Fade>
                )}
            </Popper>
        </div>
    );
}

export default DatePopper;