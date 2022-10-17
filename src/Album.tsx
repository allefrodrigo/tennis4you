import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardActionArea, CardActions } from '@mui/material';
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/CalendarMonth';
import SendIcon from '@mui/icons-material/Send';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import DeleteIcon2 from '@mui/icons-material/Delete';
import axios from "axios";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import whatsapp from '../src/images/whatsapp.png'
import phone from '../src/images/phone.png'
import email from '../src/images/email.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Section = styled.section`
  background: #004E18;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


const baseURL = "https://tennis4you-heroku.herokuapp.com/contacts";


const tiers = [
  {  
    title: 'Telemóvel',	
    price: '0',
    src: phone,
    desc: 'Aluguer de espaços para as festas de aniversários, organização de ligas, torneios e clínicas desportivas para as jovens nas suas férias escolares',
      description: [
     'Sed ut perspiciatis unde',
     'omnis iste natus error sit',
     'voluptatem accusantium',
     'doloremque laudantium'
    ],
    buttonText: 'Faça nos uma ligação',
    buttonInfo: 'tel:+351-968-804-083',
    buttonVariant: 'contained',
    buttoIcon: LocalPhoneIcon,
  },
  {
    title: 'E-mail',
    subheader: 'Mais popular',
    price: '15',
    src: email,
    desc: 'No clube Tenis4You temos programas intensivos para um melhor desenvolvimento, um reforço na evolução, além de cursos de treinadores e arbitragem.',
    description: [
      'Sed ut perspiciatis unde',
     'omnis iste natus error sit',
     'voluptatem accusantium',
     'doloremque laudantium'
    ],
    buttonText: 'Envie-nos um e-mail',
    buttonInfo: 'mailto:tenis4you2008@gmail.com',
    buttonVariant: 'contained',
  },
  {
    title: 'Whatsapp',
    price: '30',
    src: whatsapp,
    desc: 'O clube Ténis4you conta com 2 campos de relva sintética de última geração, 2 paredes e sede social.',
    description: [
      'Sed ut perspiciatis unde',
      'omnis iste natus error sit',
      'voluptatem accusantium',
      'doloremque laudantium'
    ],
    buttonText: 'Contacto Através do Whatsapp',
    buttonInfo: 'https://api.whatsapp.com/send?phone=351968804083&text=Ol%C3%A1%2C%20vim%20do%20s%C3%ADtio%20de%20internet%20%3Cmensagem%20customizada%3E',
    buttonVariant: 'contained',
  },
];


const cards = [1, 2, 3];

const theme = createTheme();

export default function Album() {
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = React.useState(null);
  const [value, setValue] = React.useState<Date | null>(new Date());

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        email: "Hello World!",
        name: "This is a new post.",
        tipo: 66645456,
        data: '10/02/2032'
      })
      .then((response) => {
        setPost(response.data);
      });
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
      
        <Section>

        <Container sx={{ py: 4 }} maxWidth="lg">
          {/* End hero unit */}
          <Typography
         component="h1"
         variant="h2"
         fontSize={32}
         fontWeight={400}
         align="center"
         color="#FFFFFF"
         gutterBottom
        >
Entre em contacto
        </Typography>
          <Grid container spacing={4}>
            {tiers.map((tier) => (
              
              <Grid
              item
              key={tier.title}
              xs={12}
              md={4}
            >
                 {/* <Typography gutterBottom variant="h5" component="div">
            {tier.title}
          </Typography> */}
 <Card sx={{ minHeight: 200 }}>
 <a style={{textDecoration: 'none', color: 'inherit' }} href={tier.buttonInfo}>

      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={tier.src}
        />
        <CardContent>
          Reserve agora pelo
          <Typography gutterBottom variant="h5" component="div">
          {tier.title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {tier.desc}
          </Typography>
        */}
        </CardContent>
        
      </CardActionArea>
  </a>
   
    



    </Card>
    {/* <a style={{textDecoration: 'none'}} href={tier.buttonInfo}>
    <Button style={{marginTop: 10}} variant="contained" sx={{ backgroundColor: '#fff', color: 'black', '&:hover': {
      backgroundColor: '#3F3F3F',color: '#fff'}}} startIcon={tier.title === 'Telemóvel'?(<LocalPhoneIcon/>): tier.title === 'Whatsapp'? (<WhatsappIcon/>):(<EmailIcon />)}>
         {tier.buttonText}
        </Button>
    </a> */}
              </Grid>
            ))}
          </Grid>
        
        </Container>
        </Section>
      </main>
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
          
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
          <Typography gutterBottom variant="h5" component="div">
            Formulário de reserva
          </Typography>
      <TextField fullWidth label="Email" id="fullWidth"  margin="normal" />
      <TextField fullWidth label="Nome" id="fullWidth"  margin="normal" />
      <TextField fullWidth label="Telefone" id="fullWidth"  margin="normal" />
      <TextField
      margin="normal"
      fullWidth
        id="date"
        label="Data da reserva"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
   


      </Box>
      <Stack direction="row" spacing={1} justifyContent="flex-end">

      <Button variant="outlined" startIcon={<DeleteIcon2 />}>
      Limpar
      </Button>
      <Button onClick={createPost} color="success" variant="contained" endIcon={<SendIcon />}>
      Enviar
      </Button>
      </Stack>

      {/* <TextField fullWidth label="fullWidth" id="fullWidth"  margin="normal" /> */}
      

        </Box>
      </Modal>
    </div>
   
      {/* End footer */}
    </ThemeProvider>
  );
}