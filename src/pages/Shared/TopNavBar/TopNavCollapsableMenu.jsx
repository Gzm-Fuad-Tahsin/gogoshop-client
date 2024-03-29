import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { BsThreeDotsVertical } from 'react-icons/bs'
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { IconButton, ListItemIcon, Typography } from '@mui/material';

const StyledMenu = styled((props) => (
    <Menu

        anchorOrigin={{
            vertical: 'bottom',
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
        minWidth: 180,
       
        color:
          theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
          padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
          '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: theme.palette.text.secondary,
            marginRight: theme.spacing(1.5),
          },
          
        },
      },
}));

export default function TopNavCollapsableMenu() {
    const { cart } = React.useContext(AuthContext);
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

                className='px-1 m-0 '
            >
                <BsThreeDotsVertical className='text-gray-950' />
            </IconButton>
            <StyledMenu
                id="collapsable-menu"
                MenuListProps={{
                    'aria-labelledby': 'collapsable-menu-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}

            >
                <MenuItem onClick={() => naviagteTo('cart')} disableRipple p={0} className=''>

                    <ListItemIcon>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.47154 15.4348C5.83024 15.4348 6.12179 15.7264 6.12179 16.0851C6.12179 16.4438 5.83024 16.7345 5.47154 16.7345C5.11284 16.7345 4.82214 16.4438 4.82214 16.0851C4.82214 15.7264 5.11284 15.4348 5.47154 15.4348Z" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.0361 15.4348C15.3948 15.4348 15.6863 15.7264 15.6863 16.0851C15.6863 16.4438 15.3948 16.7345 15.0361 16.7345C14.6774 16.7345 14.3858 16.4438 14.3858 16.0851C14.3858 15.7264 14.6774 15.4348 15.0361 15.4348Z" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.5 1.34998L3.268 1.65598L4.08655 11.408C4.15285 12.2028 4.8167 12.8131 5.614 12.8131H14.8892C15.6508 12.8131 16.2968 12.2538 16.4064 11.499L17.2131 5.92468C17.3126 5.23703 16.7796 4.62163 16.0851 4.62163H3.5519" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.1692 7.76318H13.5262" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap pr={2}  >
                        Cart
                    </Typography>

                </MenuItem>
                <hr />
                <MenuItem onClick={() => naviagteTo('/')} disableRipple m={0}>

                    <ListItemIcon>
                        <svg width="18" height="18" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4375 2.0071L11.9578 2.58264L12.5203 2.00806C14.0906 0.442102 16.2656 -0.270612 18.4031 0.0934188C21.6328 0.644021 24 3.50351 24 6.85604V7.13422C24 9.12464 23.1937 11.0287 21.7687 12.386L13.2984 20.4772C12.9469 20.8129 12.4828 21 12 21C11.5172 21 11.0531 20.8129 10.7016 20.4772L2.23078 12.386C0.807656 11.0287 0 9.12464 0 7.13422V6.85604C0 3.50351 2.36812 0.644021 5.59687 0.0934188C7.69219 -0.270612 9.90937 0.442102 11.4375 2.0071ZM11.9578 5.83925L9.84844 3.59464C8.83125 2.59607 7.3875 2.12221 5.96719 2.36393C3.82266 2.72988 2.25 4.63061 2.25 6.85604V7.13422C2.25 8.48675 2.79891 9.78172 3.76594 10.7026L12 18.5683L20.2359 10.7026C21.2016 9.78172 21.75 8.48675 21.75 7.13422V6.85604C21.75 4.63061 20.175 2.72988 18.0328 2.36393C16.6125 2.12221 15.1687 2.59607 14.1516 3.59464L11.9578 5.83925Z" fill="#434343" />
                        </svg>
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap pr={2} >
                        Wishlist
                    </Typography>

                </MenuItem>



            </StyledMenu>
        </>
    );
}