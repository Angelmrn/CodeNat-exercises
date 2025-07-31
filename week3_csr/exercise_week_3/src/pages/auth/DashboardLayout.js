import { Toolbar, Box} from '@mui/material';
import React from 'react';
import AppB from '../../components/user/AppBar'
import Draw from '../../components/user/Draw';
import Product from './ProductCard';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;
//Prueba de repositorio 

function DashboardLayout({children}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); //Detect if the screen is small (mobile)
    const [open, setOpen] = React.useState(false); 

    const handleDrawerToggle = () => { // Function to toggle the drawer open/close
        setOpen(!open);
    };

    return (
       <Box sx = {{display: 'flex'}}>
            <AppB isMobile = {isMobile}
                onMenuClick = {handleDrawerToggle}
            />
            <Draw 
                variant = {isMobile ? 'temporary' : 'permanent'}
                open = {isMobile ? open : true} 
                onClose = {handleDrawerToggle}
                drawerWidth = {drawerWidth}
            />
            
            <Box component="main"
                sx={{
                    flexGrow: 1,
                    padding: { xs: 2, sm: 3 },
                    marginLeft: { xs: 0, sm: `${drawerWidth}px` }, // Make sure the content is not hidden behind the drawer
   
                }}
            >
                <Toolbar/>
                <Product />
                {children }   
            </Box>
       </Box>
    );
}
export default DashboardLayout;