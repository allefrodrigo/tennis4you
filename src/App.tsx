import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import t4you from '../src/images/tenis4you_white.png'
import pdadel from '../src/images/padel.png'
import tenis from '../src/images/tenis.png'

import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const pages = ['Quem Somos', 'Serviços'];
const style = {
  borderRadius: 2,
  padding: 1,
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: 'auto',
  bgcolor: '#282828',
};

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>

        <CardContent sx={{   alignItems: 'center', justifyContent: 'center' }}>
   
      <Typography align="center"     component="h1"
          variant="h1"
          fontSize={32}
          fontWeight={400}
          color="#1d1d1d"
          gutterBottom>
        Conheça o Padel
      </Typography>

      <Typography    component="h2"
          variant="h2"
          fontSize={20}
          align="center"
          color="#text.primary"
          gutterBottom>
      Gostaria de aprender o desporto com maior crescimento em Portugal ?
A nossa equipa proporciona-lhe uma progressão surpreendente !!!

O nosso método de ensino irá otimizar e potenciar todos os aspetos técnicos e táticos deste desporto.
Eleve o seu nível de jogo num dos desportos de topo do ranking de sucesso imediato. 
Contribuímos para desfrutar o máximo deste maravilhoso desporto de grande componente social, divertido e competitivo.

      </Typography>
      <CardActions>
      <Button size="small">Marque sua aula experimental gratuita</Button>
    </CardActions>
    </CardContent>


</Box>
<CardMedia
        component="img"
        sx={{ width: 350 }}
        image={pdadel}
        alt="Live from space album cover"
      />
  </React.Fragment>
);


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box
        component="img"
        sx={{
          width: '5%',
          padding: 1,
        }}
        alt="The house from the offer."
        src={t4you}
      />   
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            tenis4you
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
 
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         

              <Button
                key={'quem-somos'}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Quem Somos
              </Button>
              <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={handleClose}>Institucional</MenuItem>

      </Menu>

      <Button
                key={'servicos'}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Serviços
              </Button>
              <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={handleOpenModal}>Ténis</MenuItem>
        <MenuItem onClick={handleOpenModal}>Padel</MenuItem>
        <MenuItem onClick={handleClose}>Pró Shop</MenuItem>
        <MenuItem onClick={handleClose}>Eventos</MenuItem>
        <MenuItem onClick={handleClose}>Aluguel Quadra</MenuItem>

      </Menu>
            
            


            
   
          </Box>

          
        </Toolbar>
        <Modal
        open={openModal}
        onClose={handleCloseModal}
      >
        {/* <Box sx={style}>
        <Typography id="modal-modal-title" 
                 component="h2"
                 variant="h2"
                 fontSize={30}
                 align="center"
                 color="#FFFFFF"
                 gutterBottom>
            Pádel
          </Typography>

        
          <Typography id="modal-modal-text" 
                 component="h2"
                 variant="h2"
                 fontSize={20}
                 align="center"
                 color="#FFFFFF"
                 gutterBottom>

Gostaria de aprender o desporto com maior crescimento em Portugal ?
A nossa equipa proporciona-lhe uma progressão surpreendente !!!

O nosso método de ensino irá otimizar e potenciar todos os aspetos técnicos e táticos deste desporto.
Eleve o seu nível de jogo num dos desportos de topo do ranking de sucesso imediato. 
Contribuímos para desfrutar o máximo deste maravilhoso desporto de grande componente social, divertido e competitivo.

          </Typography>
          <Button> Entre em contato</Button>
      

        </Box> */}
        <div>

        <Box style={style}>
      <Card sx={{ display: 'flex' }} variant="outlined">{card}</Card>

    </Box>
  
      </div>
      </Modal>

      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
