import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function SanPham() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
       Home
          </Typography>
          
          <TextField id="standard-basic" label="Tìm kiếm" variant="standard" style={{ marginLeft: "1000px" }} /><Button variant="contained"
                                class="btn btn-outline-warning" style={{ marginTop: "10px" }} startIcon={<SearchIcon />}

                            ></Button>
                              <p style={{marginTop:"30px", marginLeft:"10px"}}>vipp2001</p>
          <img src="#" width="80px"/>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
                                <ListItem disablePadding>
                                    <ListItemButton >
                                        <ListItemIcon>
                                        <AssignmentIcon />
                                        </ListItemIcon>
                                       <ListItemText  primary="Quản  Lý Sản Phẩm " />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <AccountBoxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Quản Lý Tài Khoản" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <AssignmentIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Quản Lý Đơn Hàng" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <AssignmentIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Quản Lý Danh Mục" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <AssignmentIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Quản Lý Ưu Đãi" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <BarChartIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Thống Kê" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                        <AccountBoxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Đăng Xuát" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <main class="container"   >
                <div class=" mt-4 offset-1 mb -4" style={{ marginLeft: "-20px" }}>   <Button variant="contained" class="btn btn-outline-warning" startIcon={< ControlPointIcon />}

                >Thêm sản phẩm</Button></div>
                <div style={{ marginLeft: "-10px", marginTop: "-50px", height: "20px" }}>            
                </div>
                <section class="row " style={{ marginLeft: "-140px" , width:"100%"}}>

                    <div class="offset-1 mt-5  " >
                        <form >
                            <div class="card">
                                <div class="card-header" >
                                    <b>Danh sách sản phẩm</b>
                                </div>
                                <div class="card-body">

                                    <div class="row">

                                        <div class="col">
                                            <TextField id="standard-basic" label="Tìm kiếm" variant="standard" style={{ marginLeft: "850px" }} /><Button variant="contained"
                                                class="btn btn-outline-warning" style={{ marginTop: "10px" }} startIcon={<SearchIcon />}

                                            ></Button>
                                            <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                                                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>ID</TableCell>
                                                            <TableCell align="right">Ảnh&nbsp;</TableCell>


                                                            <TableCell align="right">Tên sản phẩm</TableCell>
                                                            <TableCell align="right">Giá&nbsp;(vnd)</TableCell>
                                                            <TableCell align="right">Cân nặng(kg)&nbsp;</TableCell>
                                                            <TableCell align="right">Danh mục&nbsp;</TableCell>

                                                            <TableCell align="right">Ngày sản xuất&nbsp;</TableCell>
                                                            <TableCell align="right">Trạng thái&nbsp;</TableCell>
                                                            <TableCell align="right">Hành động&nbsp;</TableCell>
                                                            <TableCell align="right">Hành động&nbsp;</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>

                                                        <TableRow

                                                        >
                                                            <TableCell align="right">1</TableCell>
                                                            <TableCell align="right"><img src="..." class="img-fluid" /></TableCell>

                                                            <TableCell align="right">gạo</TableCell>
                                                            <TableCell align="right">250</TableCell>
                                                            <TableCell align="right">25</TableCell>
                                                            <TableCell align="right">Gạo nứt</TableCell>

                                                            <TableCell align="right">22/5/2021</TableCell>
                                                            <TableCell align="right">Còn hàng</TableCell>
                                                            <TableCell>

                                                                <Button variant="contained" class="btn btn-outline-primary" startIcon={<CreateSharpIcon />}

                                                                >  Sửa</Button>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Button variant="outlined" class="btn btn-outline-danger" startIcon={<DeleteIcon />}>
                                                                    Xóa
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>

                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="card-footer text-muted">
                                <ul className="pagination" style={{ position: 'absolute', marginLeft: "60%", marginTop: '10%' }}>
                                    <li class="page-item">
                                        <a class="page-link">Trang truoc</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link">Trang sau</a>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
      </Box>
    </Box>
  );
}
export default SanPham;