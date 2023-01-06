import { useNavigate } from 'react-router-dom';
import { Box, Container, Drawer, Typography } from '@mui/material';

import { seed, randCatchPhrase, randWord, randUserName, randParagraph, randNumber } from '@ngneat/falso';

import { Post } from './Post';

export const Home = () => {
  const postData = [];

  // seed('feddit'); // uncomment this for consistent random stuff
  for (let i = 0; i < 20; i++) {
    postData.push({
      title: randCatchPhrase(),
      subfeddit: `f/${randWord()}`,
      poster: randUserName(),
      content: randParagraph(),
      upfoots: randNumber({ min: -20000, max: 20000 }),
    });
  }

  const navigate = useNavigate();

  return (
    <>
      <Drawer variant="permanent">
        <Box sx={{ padding: '2em' }}>
          <Typography component="h4" variant="h4" sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
            Feddit
          </Typography>
          <Typography>Item 1</Typography>
          <Typography>Item 2</Typography>
        </Box>
      </Drawer>
      <Container>
        {postData.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </Container>
    </>
  );
};
