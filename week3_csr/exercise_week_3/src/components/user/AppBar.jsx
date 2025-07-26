import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function AppB({isMobile, onMenuClick}) {
  return (
      <AppBar position="fixed" 
              sx = {{zIndex: (theme) => theme.zIndex.drawer + 1}}> {/* Make sure AppBar is above Drawer */}
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onMenuClick}
              sx={{ mr: 2 }}
            >
            <MenuIcon />
          </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Exercise 1: Responsive Dashboard Layout
          </Typography>
        </Toolbar>
      </AppBar>
  );
}