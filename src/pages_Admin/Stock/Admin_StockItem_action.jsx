import * as React from 'react';
import { styled } from '@mui/material/styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { IconButton, ListItemIcon, Typography } from '@mui/material';

const StyledMenu = styled((props) => (
    <Menu

        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}

        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 100,

        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 16,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },

        },
    },
}));

export default function Admin_StockItem_action({ slug_name, handleProductDelete }) {

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const naviagteTo = path => {
        setAnchorEl(null);
        navigate(path)

    };

    return (
        <>
            <IconButton
                id="collapsable-menu-button"
                aria-controls={open ? 'collapsable-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}

                onClick={handleClick}
                disableRipple
                sx={{ fontSize: '1rem', marginLeft: '0.25rem', color: '#494949', "&:hover": { bgcolor: 'transparent' } }}
            >
                Action <BsChevronDown className='ml-1 text-[#494949] text-base' />
            </IconButton>
            <StyledMenu
                id="collapsable-menu"
                MenuListProps={{
                    'aria-labelledby': 'collapsable-menu-button',
                }}
                sx={{ color: '#292D32' }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}

            >
                <MenuItem onClick={() => naviagteTo(`/admin/inventory/${slug_name}/add`)} disableRipple p={0} className=''>

                    <ListItemIcon>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.29785 8H11.0286" stroke="#434343" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.16357 10.8656V5.13477" stroke="#434343" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.01444 15.1639H10.3125C13.8943 15.1639 15.327 13.7312 15.327 10.1495V5.85136C15.327 2.26961 13.8943 0.836914 10.3125 0.836914H6.01444C2.4327 0.836914 1 2.26961 1 5.85136V10.1495C1 13.7312 2.4327 15.1639 6.01444 15.1639Z" stroke="#434343" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </ListItemIcon>
                    <Typography variant="inherit" noWrap pr={0} sx={{ fontSize: '0.875rem' }}>
                        Add
                    </Typography>

                </MenuItem>




            </StyledMenu>
        </>
    );
}