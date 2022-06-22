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
import tenis4you from '../src/images/two.jpg'


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
const Image = styled.img`
  width: 90%;
  float: left;
  border: 1px solid;
  box-shadow: 10px 10px #1d1d1d;
`;

const Section3 = styled.section`
background: #008337;
padding: 0 1rem 1rem 1rem;

`
const Imagem = styled.section`
  box-shadow: 5px 10px;
`
const Section2 = styled.section`
    position: absolute;
    width: 50%;
    padding: 0 1rem 1rem 1rem;
    background-color: #FF3366;
`

const tiers = [
  {
    title: 'Iniciante',
    price: '0',
    description: [
     'Sed ut perspiciatis unde',
     'omnis iste natus error sit',
     'voluptatem accusantium',
     'doloremque laudantium'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'contained',
  },
  {
    title: 'Profissional',
    subheader: 'Mais popular',
    price: '15',
    description: [
      'Sed ut perspiciatis unde',
     'omnis iste natus error sit',
     'voluptatem accusantium',
     'doloremque laudantium'
    ],
    buttonText: 'Agende agora!',
    buttonVariant: 'contained',
  },
  {
    title: 'Empresarial',
    price: '30',
    description: [
      'Sed ut perspiciatis unde',
      'omnis iste natus error sit',
      'voluptatem accusantium',
      'doloremque laudantium'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
  },
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

function CallAbout() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      

   

<Container sx={{ py: 4 }} maxWidth="lg">
  {/* End hero unit */}
      
<Grid container spacing={1} 
              columns={16}

direction="row"
justifyContent="center"
alignItems="center"
>
<Grid
              item
              xs={10}
            >
                 <Typography
          component="h1"
          variant="h2"
          fontSize={32}
          fontWeight={400}
          align="center"
          color="#008337"
          gutterBottom
        >
          Conheça nossos resultados
        </Typography>
+ de 30 anos de experiência, + de 10.000 alunos, + de 50 títulos nacionais, + de 50 jogadores internacionais, A perfeição não é atingível, mas, se perseguirmos a perfeição alcançamos a excelência. A excelência é obtida nos detalhes. Bom não é suficiente. Oferecemos sempre produtos e serviços de qualidade excepcional que adicionam valor a todos os envolvidos a curto, médio e longo prazo num constante e infindável caminho de aperfeiçoamento e inovação. Treinadores credenciados pela Federação Portuguesa de Ténis de Nível-  III. Treinadores com experiência de cargos de selecionadores em Associações Regionais e na Federação Portuguesa de Ténis. 
              </Grid>
<Grid
              item
              xs={6}
            >
                   <Image src={tenis4you}></Image>
              </Grid>
         

  </Grid>

  

</Container>
    </React.Fragment>
  );
}
export default function InfoTwo() {
  return <CallAbout />;
}