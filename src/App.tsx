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

import padel from '../src/images/padel.png'
import tenis from '../src/images/tenis.png'
import proshop from '../src/images/proshop.png'
import eventos from '../src/images/eventos.png'
import aluguel from '../src/images/aluguel.png'

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

const tier = [
  {
    title: 'Padel',
    image: `url(${padel})`,
    desc: 'Gostaria de aprender o desporto com maior crescimento em Portugal? A nossa equipa proporciona-lhe uma progressão surpreendente! O nosso método de ensino irá otimizar e potenciar todos os aspetos técnicos e táticos deste desporto. Eleve o seu nível de jogo num dos desportos de topo do ranking de sucesso imediato. Contribuímos para desfrutar o máximo deste maravilhoso desporto de grande componente social, divertido e competitivo.'
  },
  {
    title: 'Tenis',
    image: `url(${tenis})`,
    desc: 'Gostaria de aprender este desporto apaixonante? Ténis4You ensino de excelência! A nossa metodologia foi concebida por uma equipa de profissionais qualificados e com uma vasta experiencia nos diferentes níveis de ténis. Não precisa de qualquer experiencia previa. A nossa equipa criou a combinação perfeita na simplicidade no ensino de forma a acelerar resultados sem queimar etapas para todas as idades e géneros. Para que aprenda depressa e ao seu ritmo com a garantia de um nível de evolução máxima. Garantimos resultados imediatos! Marque já a sua aula experimental Gratuita!'
  },
  {
    title: 'Pro Shop',
    image: `url(${proshop})`,
    desc: 'Um spot acolhedor onde os atletas podem descansar e recarregar as energias. Para os visitantes e familiares o Sweet Spot é um lugar único com uma vista deslumbrante e pratos que nos cativam o paladar. Comida caseira com o melhor da cozinha tradicional portuguesa.'
  },
  {
    title: 'Eventos',
    image: `url(${eventos})`,
    desc: 'Gostaria de aprender o desporto com maior crescimento em Portugal? A nossa equipa proporciona-lhe uma progressão surpreendente! O nosso método de ensino irá otimizar e potenciar todos os aspetos técnicos e táticos deste desporto. Eleve o seu nível de jogo num dos desportos de topo do ranking de sucesso imediato. Contribuímos para desfrutar o máximo deste maravilhoso desporto de grande componente social, divertido e competitivo.'
  },
  {
    title: 'Aluguel',
    image: `url(${aluguel})`,
    desc: 'Aluguer de espaços para as festas de aniversários, organização de ligas, torneios e clínicas desportivas para as jovens nas suas férias escolares'
  }
];

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

      {/* Gostaria de aprender o desporto com maior crescimento em Portugal ?
A nossa equipa proporciona-lhe uma progressão surpreendente !!!

O nosso método de ensino irá otimizar e potenciar todos os aspetos técnicos e táticos deste desporto.
Eleve o seu nível de jogo num dos desportos de topo do ranking de sucesso imediato. 
Contribuímos para desfrutar o máximo deste maravilhoso desporto de grande componente social, divertido e competitivo. */}

      </Typography>
      <CardActions>
      <Button size="small">Marque sua aula experimental gratuita</Button>
    </CardActions>
    </CardContent>


</Box>
<CardMedia
        component="img"
        sx={{ width: 350 }}
        image={padel}
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

  const [modalInfo, setModalInfo] = React.useState({nome: '',  imgsource: '', description: ''})


  function handleOpenModal(infoModal  : number) {
    console.log('info',infoModal)

    if (infoModal == 1) {
      console.log('Tenis')
      setModalInfo({nome: 'Tenis', imgsource: tenis, description: 'Gostaria de aprender este desporto apaixonante? Ténis4You ensino de excelência! A nossa metodologia foi concebida por uma equipa de profissionais qualificados e com uma vasta experiencia nos diferentes níveis de ténis. Não precisa de qualquer experiencia previa. A nossa equipa criou a combinação perfeita na simplicidade no ensino de forma a acelerar resultados sem queimar etapas para todas as idades e géneros. Para que aprenda depressa e ao seu ritmo com a garantia de um nível de evolução máxima. Garantimos resultados imediatos! Marque já a sua aula experimental Gratuita!'})

    } else if (infoModal == 2) {
      setModalInfo({nome: 'Padel', imgsource: padel, description: 'Gostaria de aprender o desporto com maior crescimento em Portugal? A nossa equipa proporciona-lhe uma progressão surpreendente! O nosso método de ensino irá otimizar e potenciar todos os aspetos técnicos e táticos deste desporto. Eleve o seu nível de jogo num dos desportos de topo do ranking de sucesso imediato. Contribuímos para desfrutar o máximo deste maravilhoso desporto de grande componente social, divertido e competitivo.'})
    } else if (infoModal == 3) {
      setModalInfo({nome: 'Pro Shop', imgsource: proshop, description: 'Gostaria de aprender o desporto com maior crescimento em Portugal? A nossa equipa proporciona-lhe uma progressão surpreendente! O nosso método de ensino irá otimizar e potenciar todos os aspetos técnicos e táticos deste desporto. Eleve o seu nível de jogo num dos desportos de topo do ranking de sucesso imediato. Contribuímos para desfrutar o máximo deste maravilhoso desporto de grande componente social, divertido e competitivo.'})
    } else if (infoModal == 4){
      setModalInfo({nome: 'Eventos', imgsource: eventos, description: 'Na Ténis4You temos espaços para as festas de aniversários, organização de ligas, torneios e clínicas desportivas para as jovens nas suas férias escolares'})
    } else if (infoModal == 5){
      setModalInfo({nome: 'Aluguel', imgsource: aluguel, description: 'Aluguer de espaços para as festas de aniversários, organização de ligas, torneios e clínicas desportivas para as jovens nas suas férias escolares'}) 
    } else {
      console.log('Nada')
    }
 
    setOpenModal(true);
  
  };
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
         
{/* 
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
              </Button> */}
              {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={handleClose}>Institucional</MenuItem>
        </Menu> */}

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
        <MenuItem onClick={()=>{
          handleOpenModal(1)
        }}>Ténis</MenuItem>
        
        <MenuItem onClick={()=>{
          handleOpenModal(2)
        }}>Padel</MenuItem>

        <MenuItem onClick={()=>{
          handleOpenModal(3)
        }}>Pro Shop</MenuItem>

        <MenuItem onClick={()=>{
          handleOpenModal(4)
        }
        }>Eventos</MenuItem>

      <MenuItem onClick={()=>{
          handleOpenModal(5)
        }
        }>Aluguel</MenuItem>

     

      </Menu>
            
            


            
   
          </Box>

          
        </Toolbar>
        <Modal
        open={openModal}
        onClose={handleCloseModal}
      >

        <div>

        <Box style={style}>
      <Card sx={{ display: 'flex' }} variant="outlined">{
    <React.Fragment>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>

<CardContent sx={{   alignItems: 'center', justifyContent: 'center' }}>
<Box>
<Typography align="center"     component="h1"
  variant="h1"
  fontSize={32}
  fontWeight={400}
  color="#1d1d1d"
  gutterBottom>
Conheça o {modalInfo.nome}
</Typography>

<Typography    component="h2"
  variant="h2"
  fontSize={20}
  align="center"
  color="#text.primary"
  gutterBottom>
{modalInfo.description}
</Typography>
</Box>
<CardActions>
<Button size="small">Marque sua aula experimental gratuita</Button>
</CardActions>

</CardContent>


</Box>
   <CardMedia
   component="img"
   sx={{ width: 350 }}
   image={modalInfo.imgsource}
   alt="Live from space album cover"
 />
</React.Fragment>




      }
      
      </Card>

    </Box>
 
  
      </div>
      </Modal>

      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
