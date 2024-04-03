import { useState } from 'react';
import { Box, Drawer, Button, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, AppBar } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, Router, Outlet } from 'react-router-dom';



function DrawerMUI() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Box>
                <AppBar>
                    <IconButton onClick={handleOpen}>Drawer</IconButton>
                    <Drawer anchor='left' open={open} onClick={handleClose}>
                        <List>
                            <ListItem >
                                <ListItemButton>
                                    <ListItemIcon><HomeIcon /></ListItemIcon>
                                    <ListItemText primary='Etusivu' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem >
                                <ListItemButton>
                                    <ListItemIcon><ListIcon /></ListItemIcon>
                                    <ListItemText primary='Listaus' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem  >
                                <ListItemButton>
                                    <ListItemIcon><SearchIcon /></ListItemIcon>
                                    <ListItemText primary='Reseptihaku' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem  >
                                <ListItemButton>
                                    <ListItemIcon><CreateIcon /></ListItemIcon>
                                    <ListItemText primary='Lisää resepti' />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem >
                                <ListItemButton>
                                    <ListItemIcon><FavoriteIcon /></ListItemIcon>
                                    <ListItemText primary='Suosikit' />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Drawer>
                    <Outlet />
                </AppBar>
            </Box >
        </>
    )
}

export default DrawerMUI