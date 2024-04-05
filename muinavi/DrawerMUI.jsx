import { useState } from 'react';
import { Box, Drawer, Grid, IconButton, Container, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, AppBar, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
//import { InboxIcon, MailIcon, ChevronLeftIcon, ChevronRightIcon } from '@mui/icons-material/'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, Outlet } from 'react-router-dom';



function DrawerMUI() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem component={Link} to='/'>
                    <ListItemButton>
                        <ListItemIcon><ListIcon /></ListItemIcon>
                        <ListItemText primary='Listaus' />
                    </ListItemButton>
                </ListItem>
                <ListItem component={Link} to='hae'>
                    <ListItemButton>
                        <ListItemIcon><SearchIcon /></ListItemIcon>
                        <ListItemText primary='Reseptihaku' />
                    </ListItemButton>
                </ListItem>
                <ListItem component={Link} to='lisaa'>
                    <ListItemButton>
                        <ListItemIcon><CreateIcon /></ListItemIcon>
                        <ListItemText primary='Lisää resepti' />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem component={Link} to='suosikit'>
                    <ListItemButton>
                        <ListItemIcon><FavoriteIcon /></ListItemIcon>
                        <ListItemText primary='Suosikit' />
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    );

    return (
        <>
            <AppBar position="sticky" sx={{ padding: 1 }}>
                <Grid container justify="flex-end" alignItems="flex-end">
                    <IconButton onClick={toggleDrawer(true)} sx={{ bottom: 1, left: 7 }}><MenuIcon /></IconButton>
                </Grid>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </AppBar>
            <Outlet />
        </>
    )
}
/*
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
} */

export default DrawerMUI