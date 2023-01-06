import { useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, CardHeader, Paper, Typography } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';

export const Post = ({ post }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ marginBlock: '1em' }}>
      <Box sx={{ display: 'flex' }}>
        <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5em' }}>
          <NorthEastIcon />
          {post.upfoots}
          <SouthWestIcon />
        </Paper>
        <Box>
          <CardHeader
            title={post.title}
            subheader={
              <Box sx={{ display: 'flex', gap: '1em' }}>
                <Typography variant="h5" onClick={() => navigate(`/${post.subfeddit}`)}>
                  {post.subfeddit}
                </Typography>
                <Typography variant="h6">{post.poster}</Typography>
              </Box>
            }
          />
          <CardContent>
            <Typography variant="h4">{post.content}</Typography>
          </CardContent>
          <CardActions>Comments</CardActions>
        </Box>
      </Box>
    </Card>
  );
};
