import * as React from 'react';
import { styled } from '@mui/material/styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {BiEditAlt} from 'react-icons/bi';
import {BsTrash} from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';
import {  useNavigate } from 'react-router-dom';
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
        minWidth: 100,
       
        color:
          theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
          padding: '4px 0',
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

export default function Admin_categoryItem_action({category_slug,handleCategoryDelete}) {

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
                sx={{fontSize:'1rem',marginLeft:'0.25rem',color:'#494949',"&:hover":{bgcolor:'transparent'}}}
            >
                Action <BsChevronDown className='ml-1 text-[#494949] text-base' /> 
            </IconButton>
            <StyledMenu
                id="collapsable-menu"
                MenuListProps={{
                    'aria-labelledby': 'collapsable-menu-button',
                }}
                sx={{color:'#292D32'}}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}

            >
                <MenuItem  onClick={() => naviagteTo(`/admin/category-list/${category_slug}/edit`)} disableRipple p={0} className=''>

                    <ListItemIcon>
                       <BiEditAlt/>
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap pr={2}  sx={{fontSize:'0.875rem'}}>
                        Edit
                    </Typography>

                </MenuItem>
                
                <MenuItem onClick={()=>handleCategoryDelete(category_slug)} sx={{color:'#FF754C'}} disableRipple m={0}>

                    <ListItemIcon >
                        <BsTrash style={{color: '#FF754C'}}/>
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap pr={2} sx={{fontSize:'0.875rem'}} >
                        Remove
                    </Typography>

                </MenuItem>



            </StyledMenu>
        </>
    );
}