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
import { ThreeDRotation } from '@mui/icons-material';
import Favorite from '@mui/icons-material/Favorite';
import { Button, CardActionArea, CardActions } from '@mui/material'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import styled from '@emotion/styled'
import axios from "axios";
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SkipNextIcon from '@mui/icons-material/WhatsApp';
import Delete from '@mui/icons-material/Delete';
import SkipPreviousIcon from '@mui/icons-material/Email';
import overview from '../src/images/overview2.jpeg'
import FavoriteIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/WhatsApp';
import ExpandMoreIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButtonProps } from '@mui/material/IconButton';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}


const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({

  marginLeft: 'auto'
}));



const baseURL = "https://tennis4you-heroku.herokuapp.com/contacts";

const Section = styled.section`
  background: #f5bb00;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

let posts = [] as any;
const cards = [1, 2, 3];

const theme = createTheme();

export default function Contacts() {
  const [results, setResults] = useState<any[]>([]);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

      let resposta
      Object.keys(response.data).map(function(key, index) {
      resposta = {...response.data}
      posts.push(response.data[key])
     // console.log(key, index, response.data[key].email)
      });     

    //   console.log(posts)
       setResults(posts)
    });
  }, []);


  console.log(results)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
   
    <Section>
      
    <Grid container spacing={4}>
            {results?.map((result) => (
              
              <Grid
              item
              key={result._id}
              xs={12}
              md={4}
            >
      
      <Card >
      <CardContent sx={{ alignItems: 'center'}}>
        
        <Typography variant="h5" fontWeight={500} fontSize={18} component="div">
        {result.name}
        </Typography>
       
        <Typography variant="body2">
        {result.name}
          <br />
        </Typography>
      
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
        sx={{ color: "#1d1d1" }}        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
              </Grid>
            ))}
          </Grid>
    
    
    
     
    </Section>
      </main>
      {/* End footer */}
    </ThemeProvider>
  );
}


