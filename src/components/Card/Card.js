import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@mui/material/Link';



function CardItem({item}) {
const [expanded, setExpanded] = React.useState(false);

 const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


    return (
        <>
        <Grid item xs={6} md={3}>
       <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={item.name}
        sx={{ height: '110px'}}
      />
      <CardMedia
        component="img"
        height="194"
    image={`${item?.image?.url}`}
      />
      <CardContent sx={{ height: '120px'}}>
        <Typography variant="body2"  color="text.secondary">
          {`country of origin ${item.origin}`}
        </Typography>
          <Typography variant="body2"  color="text.secondary">
               {`WEIGHT :${item.weight.metric} kg`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>

      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description of breed:</Typography>
            <Typography paragraph>
            {`TEMPERAMENT: ${item.temperament}`}
          </Typography>
          <Typography paragraph>
          {`DESCRIPTION: ${item.description}`}
          </Typography>
          <Typography paragraph>
          {`WIKIPEDIA:`}
              <Link  href={item.wikipedia_url} variant="body2">
              {'vikipedia"'}
            </Link>
          </Typography>
          <Typography>
          {`adaptability: ${item.adaptability}`}
          </Typography>
          <Typography>
          {`friendly: ${item.child_friendly}`}
          </Typography>
                    <Typography>
          {`health: ${item.health_issues}`}
          </Typography>
                    <Typography>
          {`hypoallergenic: ${item.hypoallergenic}`}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>         
        </Grid>
          </>
      );

}

export default CardItem;
