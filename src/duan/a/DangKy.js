import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


import {
  BrowserRouter,
  Switch,
  Route,
Link
} from "react-router-dom";
function DangKy() {
  return (

    <BrowserRouter>
    <div>
<form>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
         
        </Avatar>
        <Typography component="h1" variant="h5">
        Đăng kí tài khoản 
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
         
          <TextField
            margin="normal"
            required
            fullWidth
            id="usernaem"
            label="Họ tên"
            name="username"
            autoComplete="username"
            autoFocus
          />
      
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email "
            name="email"
            autoComplete="email"
            autoFocus
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mật khẩu"
            type="password"
            id="password"
            autoComplete="current-password"
          />  
          <TextField
            margin="normal"
            required
            fullWidth
            name="nhaplai"
            label="Nhập lại mật khẩu"
            type="password"
            id="nhaplai"
           
          />
           <TextField
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Số điện thoại"
            type="number"
            id="phone"
           
          />
         
          <Button
       
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2}} style={{width:"180px", marginRight:"36px"}}
          >
           Đăng Ký
          </Button>
          
          <Button
        
            fullWidth
            variant="contained" color="error"
            sx={{ mt: 2, mb: 2}} style={{width:"180px", }} 
          >
           Đăng Nhập
          </Button>
        </Box>
      </Box>
    </Container> 
    </form>
          </div>
 </BrowserRouter>
  );
}

export default DangKy;
