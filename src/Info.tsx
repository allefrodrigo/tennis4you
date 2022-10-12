import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from '@emotion/styled'
import AboutImage from '../src/images/about.jpeg'
import tenis4you from '../src/images/tenis4you_color.png'
import tenis4you2 from '../src/images/construcao.png'
import {  CardActionArea,  } from '@mui/material'
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player/lazy'

import joao from '../src/media/teachers/joao-galante-img.png'
import jose from '../src/media/teachers/jose-galante-img.png'
import pedro from '../src/media/teachers/pedro-ferreira-img.png'


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
const Section = styled.section`
  background: #FFFFFF;
  color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
`



const Section3 = styled.section`
background: #004E18;
padding: 0 1rem 1rem 1rem;

`

const Section2 = styled.section`
    position: absolute;
    width: 50%;
    padding: 0 1rem 1rem 1rem;
    background-color: #FF3366;
`

const tiers = [
  {
    title: 'Pedro Ferreira',
    price: '0',
    video: 'https://streamable.com/um4xbn',
    image: `url(${pedro})`,
desc:'Garantir aos nossos frequentadores um ensino num contexto emocional positivo, experiência desportiva única, transformar o ténis em sucesso, alegria e felicidade',
    description: [
      'Sed ut perspiciatis unde',
     'omnis iste natus error sit',
     'voluptatem accusantium',
     'doloremque laudantium'
    ],
    buttonInfo: 'https://www.youtube.com/channel/UCDyRmdKkBJ53CxL5AD1twuw',
    buttonText: 'Sign up for free',
    buttonVariant: 'contained',
  },
  {
    title: 'João Galante',
    subheader: 'Mais popular',
    price: '15',
    video: 'https://streamable.com/zw9d9b',

    image: `url(${joao})`,
    desc: ' Criar um clube onde todos acreditem que podem aprender a jogar ténis, contribuir para o desenvolvimento do ténis',
    description: [
      'Sed ut perspiciatis unde',
     'omnis iste natus error sit',
     'voluptatem accusantium',
     'doloremque laudantium'
    ],
    buttonInfo: 'https://www.instagram.com/tenis4you.alcoutins/',
    buttonText: 'Agende agora!',
    buttonVariant: 'contained',
  },
  {
    title: 'José Galante',
    subheader: 'Mais popular',
    price: '15',
    video: 'https://streamable.com/0xs79e',
    image: `url(${jose})`,
    description:       'Treinadores credenciados pela Federação Portuguesa de Ténis de Nível -  III',
    desc: 'Paixão, honestidade, Alegria, Ética, Simplicidade, segurança, educação, higiene, saúde',
    buttonInfo: 'https://www.facebook.com/tenis4you.alcoutins',
    buttonText: 'Agende agora!',
    buttonVariant: 'contained',
  }
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const style = {
  
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
};


function CallAbout() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [professor, setProfessor] = React.useState({nome: '',  video: ''})
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      

      {/* <div className="row">
  <div className='column'>
  </div>
  <div className='column'>
  <div>
      Com mais de 20 anos de experiência na área do ensino dos desportos de raquetas (Ténis e Padel), José Galante e Pedro Ferreira resolveram abraçar um projecto a dois que tivesse o seu próprio cunho. Assim, no dia 30 de Outubro de 2008, nascia a empresa Ténis4You. Sediada na Quinta dos Alcoutins, lugar paradisíaco no meio do verde do campo de Golfe do Paço do Lumiar. Com cerca de 160 alunos na Escola, baseamos o nosso ensino num método muito simples, altamente eficaz e com resultados imediatos para quem experimenta pela primeira vez!    
      </div>
  </div>
</div>
    */}
  <Section>

<Container sx={{ py: 2 }} maxWidth="lg">
  {/* End hero unit */}
      
<Grid container spacing={4} >
<Grid
              item
              xs={12}
              md={12}
            >
                 <Typography
          component="h1"
          variant="h2"
          fontSize={32}
          fontWeight={400}
          align="center"
          color="#1d1d1d"
          gutterBottom
        >
          	Ténis4You
        </Typography >
        <Typography
          component="h2"
          variant="h2"
          fontSize={20}
          align="center"
          color="#text.primary"
          gutterBottom
          >

Com mais de 20 anos de experiência na área do ensino dos desportos de raquetas, José Galante e Pedro Ferreira resolveram abraçar um projecto a dois que tivesse o seu próprio cunho. Assim, no dia 30 de Outubro de 2008, nascia a empresa Ténis4You. Sediada na Quinta dos Alcoutins, lugar paradisíaco no meio do verde do campo de Golfe do Paço do Lumiar. Com cerca de 160 alunos na Escola, baseamos o nosso ensino num método muito simples, altamente eficaz e com resultados imediatos para quem experimenta pela primeira vez!

          </Typography>
          <Section>

        <Container sx={{ py: 1 }} maxWidth="lg">
          {/* End hero unit */}
          <Typography
   component="h1"
   variant="h2"
   fontSize={32}
   fontWeight={300}
   align="left"
   color="#1d1d1d"
   gutterBottom
        >
Nossa equipa
        </Typography>
              
        <Grid container   spacing={4} 

  >
            {tiers.map((tier) => (
              
              <Grid
              
              item
              key={tier.title}
              xs={12}
              md={4}
              
            >
    <Box onClick={()=>{
      setProfessor((professor)=>({
      ...professor,
      nome: tier.title,
      video: tier.video
    }))
        setOpen(!open)

  }
  }  boxShadow={2} borderRadius={1} sx={{  minHeight: '60vh', backgroundImage: tier.image, backgroundSize: 'cover',   '&:hover': {
      transform: 'scale(1.03)', transition: '0.1s all ease-in-out',
        },}} style={{ display:'flex', justifyContent:'center', textAlign: 'center'}}  >
    <Box  boxShadow={2} borderRadius={1} sx={{ width: '100%', background: '#000000',position: 'relative', opacity: 0.1 , '&:hover': {opacity: 0.5}}} >
      <Typography sx={{textShadow: '1px 1px 2px black', position: 'absolute', bottom: '8px', left: '16px' }} color={'white'} variant="h5" fontWeight={500} fontSize={40}>{tier.title}</Typography>
      {/* <CardContent > */}
        {/* {
          tier.title === 'Youtube' ? (<YouTubeIcon fontSize="large" color="error"></YouTubeIcon>) : tier.title === 'Instagram' ? (<InstagramIcon fontSize="large"></InstagramIcon>) : tier.title === 'Facebook' ?  (<FacebookIcon color='primary' fontSize="large"></FacebookIcon>) : (<FacebookIcon  fontSize="large"></FacebookIcon>)
        } */}
        
        {/* <Typography variant="h5" fontWeight={500} fontSize={18} component="div">
        
        </Typography> */}
       
        {/* <Typography variant="body2">
        {tier.desc}
          <br />
        </Typography> */}
      {/* </CardContent> */}
      </Box>
      </Box>




      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
              </Grid>
            ))}
          </Grid>
        
        </Container>
        </Section>
              </Grid>

  
  </Grid>

  
  <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
        <ReactPlayer  url={professor.video} />

          <Typography id="modal-modal-title" 
                 component="h2"
                 variant="h2"
                 fontSize={20}
                 align="center"
                 color="#text.primary"
                 gutterBottom>
            Conheça {professor.nome}
          </Typography>
      

        </Box>
      </Modal>
</Container>
</Section>
    </React.Fragment>
  );
}
export default function Info() {
  return <CallAbout />;
}