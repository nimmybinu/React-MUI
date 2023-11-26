import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
function Post() {
  return (
    <Card sx={{margin:5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src="https://material-ui.com/static/images/avatar/7.jpg">
           
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title=" Jammu & Kashmir"
      subheader="Nov 14, 2023"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      Where the glacier meets the sky, the land ceases to be earthly, and the earth becomes one with the heavens; no sorrows live there anymore, and therefore joy is not necessary; beauty alone reigns there, beyond all demands.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />}/>
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
      
    </CardActions>
    
  </Card>
  )
}

export default Post