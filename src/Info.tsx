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
import {  CardActionArea, List, ListItem, ListItemText,  } from '@mui/material'
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player/lazy'

import joao from '../src/media/teachers/joao-galante-img.png'
import jose from '../src/media/teachers/jose-galante-img.png'
import pedro from '../src/media/teachers/pedro-ferreira-img.png'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

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
    description: [
      '1993 a 1995 – Clube Tap Air Portugal.',
      '1995 a 2008 – Treinador do Centro de Ténis das Olaias.',
      '2008 a … Founder Partner, CEO e Treinador na Ténis4You.',
    ],
    cursos: [
      'Curso de treinadores de ténis de nível III da Federação Portuguesa de Ténis.',
'Curso de treinadores de ténis de nível I da Federação Portuguesa de Padel.',
'Curso de treinador de ténis internacional de nível I e system five da nick bollettieri tennis academy.',
'Curso de treinador de ténis internacional de nível II do Registo Profissional de Ténis.',
'Curso de treinadores de ténis European Registry of Tennis Profissional.',
'Curso de treinadores da United States Professional Tennis Association.',
'Participação em vários cursos, simpósios, workshops e ações de formação nacionais, ibéricos e internacionais.'


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
    description: [
      'Integra a equipa desde 2019  - Treinador de Ténis e Padel na Ténis4You - Dá treinos a todas as faixas etárias desde a iniciação ao aperfeiçoamento.',
     'Organiza atividades de ténis e padel no clube promovendo o lado social do clube.',
     'Perfeccionista calmo e muito paciente transmite uma base técnica para os alunos desfrutarem ao máximo do ténis e do padel. ',
    ],
    cursos: [
      'Curso de treinadores de ténis de nível I da Federação Portuguesa de Ténis.'
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
    description: [
    '1988 – Treindor CIF/ Centro de Ténis de Monsanto.',
    '1993 a 1996 – Treinador Clube Escola de Ténis de Leiria, Selecionador Regional da Associação de Ténis de Leiria, Founder Partner e Treinador do Centro Internacional de Ténis de Leiria.',
    '1996 a 2002 – Diretor Técnico e Treinador do Clube de Ténis de Azeméis, Selecionador Regional da Associação de Ténis de Aveiro, Seleccionador Nacional da Federação Portuguesa de Ténis.',
    '2000 e 2001 Reconhecido pelo Instituto Nacional do Desporto como Treinador do ano da Associação de Ténis de Aveiro.',
    '2003 a 2008 – Diretor Técnico e Treinador do Centro de Ténis das Olaias, Selecionador Regional da Associação de Ténis de Lisboa, Seleccionador Nacional da Federação Portuguesa de Ténis.',
    '2008 a … Founder Partner, CEO e Treinador na Ténis4You.'
    ],
    cursos: [
'Curso de treinadores de ténis de nível III da Federação Portuguesa de Ténis.',
'Curso de treinadores de ténis de nível I da Federação Portuguesa de Padel.',
'Curso de treinador de ténis internacional de nível I e system five da nick bollettieri tennis academy.',
'Curso de treinador de ténis internacional de nível II do Registo Profissional de Ténis.',
'Curso de treinadores de ténis European Registry of Tennis Profissional.',
'Participação em vários cursos, simpósios, workshops e ações de formação nacionais, ibéricos e internacionais.',
'Curso de Árbitro de Cadeira e Juiz - Árbitro de Ténis da Federação Portuguesa de Ténis.',
    ],
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
  borderRadius: 2,
  padding: 1,
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: 'auto',
  bgcolor: '#090909',
};


function CallAbout() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [professor, setProfessor] = React.useState({nome: '',  video: '', description: [''], cursos: ['']});
  console.log(professor.description)
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
      video: tier.video,
      description: tier.description,
      cursos: tier.cursos
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" 
                 component="h2"
                 variant="h2"
                 fontSize={30}
                 align="center"
                 color="#FFFFFF"
                 gutterBottom>
            Conheça {professor.nome}
          </Typography>
        <ReactPlayer width='100%' url={professor.video} />

        
          <Typography id="modal-modal-title" 
                 component="h2"
                 variant="h2"
                 fontSize={20}
                 align="center"
                 color="#text.primary"
                 gutterBottom>

<Accordion sx={{margin: 4}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"

        >
            <Typography
          component="h2"
          variant="h2"
          fontSize={20}
          align="center"
          color="#text.primary"
          gutterBottom
          >Informações sobre {professor.nome}</Typography>
        </AccordionSummary>
        <AccordionDetails >
            
          {professor.description.map((desc:any)=>(
            <List>
            <ListItem>
              <Typography > {desc}</Typography>
            </ListItem>
            </List>
          ))}
            
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{margin: 4}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"

        >
            <Typography
          component="h2"
          variant="h2"
          fontSize={20}
          align="center"
          color="#text.primary"
          gutterBottom
          >Cursos de {professor.nome}</Typography>
        </AccordionSummary>
        <AccordionDetails >
            
          {professor.cursos.map((desc:any)=>(
            <List>
            <ListItem>
              <Typography > {desc}</Typography>
            </ListItem>
            </List>
          ))}
            
        </AccordionDetails>
      </Accordion>
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