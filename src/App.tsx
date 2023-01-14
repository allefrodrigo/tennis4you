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
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import padel from '../src/images/padel.png'
import tenis from '../src/images/tenis.png'
import proshop from '../src/images/proshop.png'
import eventos from '../src/images/eventos.png'
import aluguel from '../src/images/aluguel.png'

import ReactPlayer from 'react-player/lazy'
import Tennis4YouVideo from "../src/media/tennis4you-final.mp4";


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
  width: '90%',
  height: 'auto',
  bgcolor: '#282828',
};

const tier = [
  {
    title: 'Padel',
    image: `url(${padel})`,
    desc: 'Gostava de aprender o desporto com maior crescimento em portugal? A nossa equipa proporciona-lhe uma experiência única! O nosso método de ensino irá otimizar e potenciar toda a sua componente técnica e táctica. Eleve o  seu nível de jogo num dos desportos de topo do ranking de sucesso imediato.'
  },
  {
    title: 'Tenis',
    image: `url(${tenis})`,
    desc: 'Gostava de aprender este desporto apaixonante? Na ténis4you o ensino é de excelência! A nossa metodologia foi concebida por profissionais altamente qualificados e com uma vasta experiência nos diferentes níveis de aprendizagem. Não é necessário já ter jogado, pois temos a combinação perfeita entre a simplicidade no ensino, resultados imediatos em todas as idades, sem queimar etapas! Aprenda ao seu ritmo, sempre com a garantia de evolução máxima. '
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




const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = React.useState(false);

  const [openAboutModal, setOpenAboutModal] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const openAbout = Boolean(anchorEl2);

  const [modalInfo, setModalInfo] = React.useState({nome: '',  imgsource: '', description: ''})

  function handleOpenAboutModal() {
    setOpenAboutModal(true);

  }

  function handleOpenModal(infoModal  : number) {
    console.log('info',infoModal)

    if (infoModal == 1) {
      console.log('Tenis')
      setModalInfo({nome: 'Ténis', imgsource: tenis, description: 'Gostava de aprender este desporto apaixonante? Na ténis4you o ensino é de excelência! A nossa metodologia foi concebida por profissionais altamente qualificados e com uma vasta experiência nos diferentes níveis de aprendizagem. Não é necessário já ter jogado, pois temos a combinação perfeita entre a simplicidade no ensino, resultados imediatos em todas as idades, sem queimar etapas! Aprenda ao seu ritmo, sempre com a garantia de evolução máxima.'})

    } else if (infoModal == 2) {
      setModalInfo({nome: 'Padel', imgsource: padel, description: 'Gostava de aprender o desporto com maior crescimento em portugal? A nossa equipa proporciona-lhe uma experiência única! O nosso método de ensino irá otimizar e potenciar toda a sua componente técnica e táctica. Eleve o  seu nível de jogo num dos desportos de topo do ranking de sucesso imediato.'})
    } else if (infoModal == 3) {
      setModalInfo({nome: 'Pro Shop', imgsource: proshop, description: 'Neste espaço temos todo o tipo de material desportivo ligado às modalidades de ténis e padel, bem como todo o aconselhamento técnico de material para o mais alto nível de rendimento, numa vertente mais social, de lazer, ou competitiva.'})
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
    const handleCloseAboutModal = () => setOpenAboutModal(false);


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleClickAbout = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);

  };
  


  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box
        component="img"
        sx={{
          width: { lg: "5%",
            md: "5%",
            sm: "10%",
            xs: "15%"},
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
             
            >
           
            </Menu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => {
                handleOpenAboutModal()}
              }
            >
              <PlayCircleFilledWhiteIcon />
            </IconButton>
            {/* <Menu
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
           
            </Menu> */}
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
 
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
                key={'about'}
                id="basic-button2"
                aria-controls={openAbout ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openAbout ? 'true' : undefined}
                onClick={handleClickAbout}
                sx={{ my: 2, color: 'white', display: 'block' }}
                
              >
                Quem Somos
              </Button>

              <Menu
        id="basic-menu"
        anchorEl={anchorEl2}
        open={openAbout}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button2',
        }}
       >
        <MenuItem onClick={()=>{
          handleOpenAboutModal()
        }}>Sobre Nós</MenuItem>
         

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
        open={openAboutModal}
        onClose={handleCloseAboutModal}
      >

        <div>

        <Box style={style}>
      <Card sx={{ display: 'flex' }} variant="outlined">{
    <React.Fragment>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>

<CardContent sx={{   alignItems: 'center', justifyContent: 'center' }}>
<Box >
<Typography align="center"     component="h1"
  variant="h1"
  fontSize={32}
  fontWeight={400}
  color="#1d1d1d"
  gutterBottom>
    
  Sobre nós  
 </Typography>

 <ReactPlayer width='70%' height='80%' url={Tennis4YouVideo} playing={true}/>
</Box>


</CardContent>


</Box>

</React.Fragment>




      }
      
      </Card>

    </Box>
 
  
      </div>
      </Modal>


        <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',

        }}
      >

        <div>

        <Box style={style}>
        <React.Fragment>

      <Card sx={{ display: 'flex' }} variant="outlined">
<Box sx={{ display: 'flex', flexDirection: 'column' }} >

<CardContent sx={{   alignItems: 'center', justifyContent: 'center' }} >
<Box sx={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
<Typography align="center"     component="h1"
  variant="h1"
  fontWeight={400}
  color="#1d1d1d"
  sx={{
    fontSize: {
      lg: 30,
      md: 20,
      sm: 15,
      xs: 15
    }}}
gutterBottom>
Conheça o {modalInfo.nome}
</Typography>

<Typography    component="h2"
  variant="h2"
  fontSize={20}
  align="center"
  color="#text.primary"
  sx={{
    fontSize: {
      lg: 20,
      md: 20,
      sm: 15,
      xs: 11
    }}}
  gutterBottom>
{modalInfo.description}
</Typography>
</Box>
<a style={{textDecoration: 'none', color: 'inherit' }} href={`https://api.whatsapp.com/send?phone=351968804083&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20s%C3%ADtio%20de%20internet%20e%20quero%20saber%20sobra%20as%20aulas%20de%20`+`${modalInfo.nome}`}>

<CardActions sx={{ justifyContent: 'center' }}>
{ modalInfo.nome === 'Padel' ? (<Button size="small">Marque já a sua aula experimental</Button>) : modalInfo.nome==='Ténis' ? (<Button size="small">Marque já a sua aula experimental gratuita</Button>) : (<></>) }
</CardActions>
</a>

</CardContent>


</Box>
 




      
      </Card>
</React.Fragment>

    </Box>
 
  
      </div>
      </Modal>

      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
