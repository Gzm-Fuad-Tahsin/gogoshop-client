import * as React from 'react';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { IconButton } from '@mui/material';


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

export default function TopNavUserProfileButton() {
    const { user } = React.useContext(AuthContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>

            <IconButton
                id="profile-menu-button"
                aria-controls={open ? 'profile-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}

                onClick={handleClick}
                disableRipple={true}

            >
                {user?.imgURL ?
                    <img className="w-8 h-8   rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={user?.imgURL} alt="profile Photo" />
                    :

                    <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500">
                        <svg className="absolute w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" ></path></svg>
                    </div>
                }
            </IconButton>
            <StyledMenu
                id="profile-menu"
                MenuListProps={{
                    'aria-labelledby': 'profile-menu-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <Link to='/profile'>
                    <MenuItem onClick={handleClose} disableRipple>
                        <p className="block px-4 py-2 text-sm  hover:bg-gray-100 " role="menuitem">Profile</p>
                    </MenuItem>
                </Link>

                <Link to='/update-profile'>
                    <MenuItem onClick={handleClose} disableRipple>
                        <p className="block px-4 py-2 text-sm  hover:bg-gray-100 " role="menuitem">Update information</p>
                    </MenuItem>
                </Link>

                <Link to='/orders'>
                    <MenuItem onClick={handleClose} disableRipple>
                        <p className="block px-4 py-2 text-sm  hover:bg-gray-100 " role="menuitem">My orders</p>
                    </MenuItem>
                </Link>

                <Link to='/order-history'>
                    <MenuItem onClick={handleClose} disableRipple>
                        <p className="block px-4 py-2 text-sm  hover:bg-gray-100 " role="menuitem">Order History</p>
                    </MenuItem>
                </Link>
                
                <MenuItem onClick={handleClose} disableRipple>
                    <Link className="block px-4 py-2 text-sm  hover:bg-gray-100 " role="menuitem">Sign out</Link>
                </MenuItem>

            </StyledMenu>
        </>
    );
}