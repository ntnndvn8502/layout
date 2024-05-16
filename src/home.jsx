import React from 'react';
import { Typography, Container, Card, CardContent, Box } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Home() {
    return (
        <Container sx={{ pl: '0 !important', pr: '0 !important' }}>
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography variant="h2" align="center">
                        Welcome to My Website!
                    </Typography> <br />
                    <Typography variant="h4" align="center">
                        Chuyển đến quản lí tài khoản để xem thêm
                    </Typography>
                    <Box>
                        <Splide options={{ perPage: 2, gap: '0.75rem' }}>
                            <SplideSlide>
                                <img className='slideImg' src="https://www.moma.org/d/assets/W1siZiIsIjIwMjIvMDQvMDUvNTdnMml4eThtb180NzJfMTk0MV9DQ0NSX1ByZXNzX1NpdGUuanBnIl0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDkwIC1yZXNpemUgMTE4NHg2NjZeIC1ncmF2aXR5IE5vcnRoIC1jcm9wIDExODR4NjY2KzArNzkiXV0/472_1941_CCCR-Press%20Site.jpg?sha=5bdb603f03db6661" alt="Image 1" />
                            </SplideSlide>
                            <SplideSlide>
                                <img className='slideImg' src="https://cdn.britannica.com/78/69678-050-491A5ED8/Bedroom-oil-canvas-Vincent-van-Gogh-Art-1889.jpg" alt="Image 2" />
                            </SplideSlide>
                            <SplideSlide>
                                <img className='slideImg' alt='Image 3' src="https://www.artnews.com/wp-content/uploads/2024/04/1024px-Vincent-van-gogh-cafe-terrace-on-the-place-du-forum-arles-at-night-the.jpg" />
                            </SplideSlide>
                        </Splide>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}

export default Home;