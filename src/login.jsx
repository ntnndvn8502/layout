import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { decodeToken } from 'react-jwt';
import { useNavigate, redirect } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';








function Login() {
    const nav = useNavigate();
    const token = sessionStorage.getItem('token');
    const Logout = () => {
        googleLogout();
        sessionStorage.removeItem('token');
        nav('/login');
    }

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                background: 'url(https://s3-alpha-sig.figma.com/img/3e8a/4b8b/4924fde71348a791a30d322e7b5567ea?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HaCsYo2e9fBd8YeOBym10Rq1nrLdLjma~FF1OioExl2W9uAyZqJRz67aZNT~5mSwJX4OjldXLNys5Ylo6v~TUOKvNLoAEzceATwlUd7HHuh-8AzOI5Yg~SYKq7Dok50k1ehDnWFbCZ5qswz0yv0MlDEo55Vg3QxHz~XQm5VPkvjgoQaoiM~6s3C2RHVjkt0o0IwEZ~XWY5Csb~Hw90xWXRYXTySkzYN-zWo56udrH14I7y8~LehorNjZtjLXS~vsZSitpY8EWj2LJUPA3-kdu56KWTDeLE~M5iVtnbGUCtLv8042mGBFo1~K4H6Tho32437raZiADtzBZfIcYUBgsA__) lightgray 50% / cover no-repeat',
            }}
        >
            <Grid container >
                <Grid item xs={7}>
                    <Box sx={{ mt: 3, ml: 2 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="93" height="24" viewBox="0 0 93 24" fill="none">
                            <g filter="url(#filter0_d_18906_157829)">
                                <path d="M67.0987 1.13769C63.516 1.82214 60.6538 3.85506 58.8424 7.0015C57.3713 9.55542 56.8509 13.7745 57.6915 16.3182C58.2219 17.9323 59.3628 19.2195 60.964 20.0163C62.3951 20.7416 63.1757 20.9153 65.3274 20.9664C66.4682 21.0072 67.519 20.9766 68.1295 20.8948C69.1803 20.762 71.7123 20.1389 72.743 19.7507L73.3835 19.5157L74.4043 15.0208C74.9648 12.5486 75.4551 10.4033 75.4852 10.2399L75.5552 9.96405H71.1518C68.73 9.96405 66.7484 9.98448 66.7484 9.9947C66.7484 10.0151 66.5683 10.8324 66.3481 11.8029C66.128 12.7734 65.9478 13.5906 65.9478 13.6111C65.9478 13.6213 66.7785 13.6417 67.7993 13.6417C68.82 13.6417 69.6507 13.6621 69.6507 13.6928C69.6507 13.7132 69.4705 14.5305 69.2504 15.4907C69.0302 16.4612 68.8501 17.2683 68.8501 17.2785C68.8501 17.2989 68.2696 17.3194 67.5691 17.3194C64.3866 17.3194 62.8955 16.2773 62.5352 13.8154C62.3251 12.375 62.7154 10.1173 63.4259 8.68709C64.1364 7.24667 65.2473 6.06165 66.5383 5.3772C67.6692 4.78469 68.4297 4.62124 69.9509 4.67232C71.0217 4.71318 71.332 4.76426 72.0625 5.02987C72.9832 5.35677 74.014 6.00036 74.8347 6.74611C75.225 7.10365 75.4151 7.20581 75.6853 7.20581H76.0356L76.546 5.06052C76.8262 3.87549 77.0564 2.83349 77.0564 2.75177C77.0564 2.45551 75.0448 1.62804 73.4036 1.26028C72.1726 0.984453 68.2996 0.902727 67.0987 1.13769Z" fill="#F01B23" />
                                <path d="M9.3033 1.42518C9.3033 1.44562 8.33256 5.75664 7.15165 10.9871C5.97075 16.2175 5 20.5285 5 20.549C5 20.5694 6.12086 20.5898 7.48191 20.5898H9.97382L10.6643 17.4945L11.3649 14.4093L13.6066 14.348C15.9784 14.2765 16.8691 14.154 18.2602 13.6942C21.0223 12.7748 22.9738 10.8543 23.5643 8.48423C23.7644 7.67719 23.7644 5.80772 23.5542 5.0109C23.234 3.73393 22.4734 2.83495 21.1724 2.21179C19.6613 1.47626 19.5412 1.45583 14.137 1.41497C11.475 1.38432 9.3033 1.39454 9.3033 1.42518ZM17.0092 5.22543C18.02 5.5319 18.5904 6.39002 18.4803 7.45245C18.4003 8.23906 18.06 8.97459 17.5396 9.46494C16.709 10.2413 15.7683 10.5274 13.6566 10.6295C12.2456 10.7113 12.1855 10.701 12.2356 10.5172C12.2756 10.415 12.5458 9.19933 12.856 7.82021C13.1663 6.44109 13.4365 5.22543 13.4765 5.12327C13.5265 4.93939 13.6066 4.93939 15.0177 5.00068C15.8383 5.04154 16.729 5.1437 17.0092 5.22543Z" fill="#F01B23" />
                                <path d="M30.321 5.84727C29.2601 5.99029 27.0685 6.39892 26.9984 6.47043C26.9584 6.51129 26.7682 7.31833 26.5781 8.25818L26.2478 9.9642H26.5581C26.7282 9.9642 27.4988 9.7701 28.2694 9.53514C29.6504 9.1163 29.6905 9.1163 31.2717 9.10608C33.0831 9.09587 33.6735 9.20824 34.1239 9.66795C34.4441 10.0051 34.5742 10.4341 34.4742 10.8836C34.4141 11.1697 34.3841 11.1901 33.9137 11.1901C33.6435 11.1901 32.7528 11.2616 31.9422 11.3433C28.0792 11.7519 26.1478 12.4058 24.8067 13.744C23.7659 14.7962 23.3456 15.9812 23.4357 17.6158C23.5157 19.0153 24.2263 20.0675 25.4973 20.6703C26.0076 20.9154 26.2078 20.9461 27.4488 20.9767C28.6397 21.0074 28.9199 20.9869 29.5404 20.7928C30.321 20.5477 31.3117 20.0675 32.0223 19.5772C32.2725 19.4035 32.4826 19.3014 32.5026 19.3524C32.5227 19.4035 32.4726 19.6998 32.3825 20.0165L32.2424 20.5885H34.5642H36.896L38.0369 15.5624C39.2778 10.0664 39.3979 9.20824 39.0877 8.24796C38.7474 7.21618 37.8067 6.49086 36.2555 6.0618C35.585 5.87792 35.1447 5.84727 33.0731 5.82684C31.7521 5.80641 30.5111 5.81663 30.321 5.84727ZM33.7236 14.0913C33.7236 14.3161 33.1131 16.7474 33.033 16.8496C32.973 16.9211 32.5627 17.1561 32.1123 17.3706C30.411 18.1878 28.4595 17.9324 28.2694 16.87C28.0592 15.7769 28.9099 14.8167 30.421 14.4591C31.4718 14.2037 33.7236 13.9585 33.7236 14.0913Z" fill="#F01B23" />
                                <path d="M48.033 5.85019C47.2124 5.94213 45.9214 6.34055 45.0607 6.75939C43.8698 7.34169 43.0692 8.11808 42.5988 9.11922C42.2986 9.77302 42.2786 9.88539 42.2786 10.9376C42.2786 11.9183 42.3086 12.1226 42.5088 12.5006C42.839 13.1238 43.4295 13.6959 44.15 14.0636C45.0007 14.5029 45.3309 14.6153 47.2824 15.1363C49.2439 15.6573 49.8344 15.9229 49.9645 16.3213C50.1446 16.9036 49.5642 17.5165 48.6235 17.7208C47.7628 17.9149 45.9714 17.8639 45.0207 17.6187C44.0499 17.3735 42.6889 16.7503 42.1285 16.3009C41.9083 16.117 41.6281 15.9944 41.458 15.9944H41.1677L40.7374 17.9047C40.237 20.1011 40.197 19.9376 41.3179 20.285C42.839 20.7753 43.8198 20.9184 45.9514 20.9694C47.6127 21.0103 48.2131 20.9899 49.0238 20.8571C52.7166 20.2237 54.6581 18.3644 54.518 15.6062C54.4479 14.2169 53.9776 13.4915 52.6566 12.7969C51.8459 12.3678 51.1454 12.1328 49.2439 11.6629C47.6627 11.2645 47.0523 10.9785 46.8521 10.5494C46.6419 10.1101 46.9422 9.57892 47.5827 9.25202C48.003 9.03749 48.2532 8.99663 49.314 8.96598C50.0446 8.93534 50.7951 8.96598 51.1654 9.04771C51.996 9.21116 53.1669 9.68108 53.8375 10.1204C54.488 10.5392 54.9083 10.5903 54.9883 10.2429C55.4287 8.32239 55.7389 6.93306 55.7389 6.8309C55.7389 6.65723 54.2878 6.20774 52.9568 5.97278C52.0861 5.82976 51.4056 5.77868 50.1046 5.79911C49.1539 5.79911 48.2232 5.82976 48.033 5.85019Z" fill="#F01B23" />
                                <path d="M84.6591 5.8399C83.1579 6.12594 82.0771 6.56521 80.8962 7.37225C79.5952 8.24059 78.6845 9.3541 77.9539 10.9069C77.2734 12.3473 77.1233 13.1339 77.1133 15.0749C77.1133 16.5664 77.1433 16.832 77.3335 17.3632C77.6637 18.2622 77.9639 18.7423 78.6445 19.3961C79.8053 20.5301 81.2665 21 83.6383 21C86.6506 21 88.502 20.2747 90.3634 18.3541C91.7045 16.975 92.415 15.6265 92.8153 13.6958C93.0555 12.5414 93.0655 10.5187 92.8253 9.71165C92.2849 7.89325 91.1541 6.72866 89.3226 6.11572C88.5821 5.87054 88.3519 5.85011 86.7106 5.81946C85.7199 5.80925 84.7992 5.81946 84.6591 5.8399ZM87.0609 9.27237C87.8815 9.70143 88.1618 10.3757 88.1618 11.9591C88.1618 13.2667 87.9616 14.1963 87.4712 15.2486C86.7106 16.8524 85.5698 17.731 84.2387 17.731C83.1779 17.731 82.4474 17.3223 82.0771 16.5051C81.8269 15.9432 81.8569 13.9409 82.1471 12.8274C82.5875 11.1418 83.4982 9.8138 84.579 9.30302C85.3096 8.95569 86.4204 8.94547 87.0609 9.27237Z" fill="#F01B23" />
                            </g>
                            <defs>
                                <filter id="filter0_d_18906_157829" x="0" y="0" width="93.0005" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="-3" dy="1" />
                                    <feGaussianBlur stdDeviation="1" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18906_157829" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18906_157829" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </Box>
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', py: '4rem' }} item xs={4}>
                    <Box sx={{ borderRadius: 5, bgcolor: 'rgba(255, 255, 255, 0.75);', height: '100%', width: '100%', p: 4, display: 'flex', flexDirection: 'column' }}>
                        <h2 className='welcome'>Chào mừng bạn đến với <span>Pasgo</span> </h2>
                        <h1 className='login'>Đăng nhập</h1>
                        <Box>
                            <GoogleLogin
                                onSuccess={credentialResponse => {

                                    // const jsontoken = decodeToken(credentialResponse.credential);
                                    // console.log(jsontoken);
                                    sessionStorage.setItem('token', credentialResponse.credential);
                                    window.location.href = '/home';

                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />


                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <div style={{ fontWeight: '400' }}> Nhập tên người dùng hoặc địa chỉ email của bạn </div>
                            <TextField placeholder='Tên người dùng hoặc địa chỉ email' size="small" sx={{ mt: 1 }} fullWidth></TextField>
                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <div style={{ fontWeight: '400' }}> Nhập mật khẩu của bạn </div>
                            <TextField placeholder='Mật khẩu' size="small" sx={{ mt: 1 }} fullWidth></TextField>
                        </Box>
                        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Box>
                                <div className='noAcc'>Không có tài khoản?</div>
                                <a className='noAcc' href='#'>Đăng kí</a>
                            </Box>
                            <Box>
                                <a style={{ color: "#4285F4", textDecoration: 'none' }} href='#'>Quên mật khẩu</a>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 2, textAlign: 'right' }}>
                            <Button variant="contained" color="secondary" sx={{ textTransform: 'none', px: 4, py: 1 }}>Đăng nhập</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <TextField label="Username" variant="outlined" />
            <TextField label="Password" variant="outlined" type="password" />
            <Button variant="contained" color="primary">
                Login
            </Button>
        </Box>
    );
}

export default Login;