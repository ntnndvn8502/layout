import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box, Typography } from '@mui/material';


const Data = () => {
    const [info, setInfo] = useState([]);
    const [suggestData, setSuggestData] = useState([]);
    const [suggest, setSuggest] = useState(1);
    const [open, setOpen] = useState(false);

    const [id, setId] = useState("");
    const [detail, setDetail] = useState([]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',

        boxShadow: 24,
        p: 4,
    };

    const message = {
        id: id,
        userId: "",
        deviceId: ""
    }
    const json = JSON.stringify(message);
    const ProvinceAPI = 'https://dev-apiv4.pasgo.com.vn/api/v1/DoiTuong/danh-sach-tinh';
    const suggestAPI = 'https://dev-apiv4.pasgo.com.vn/api/v1/DoiTuong/trang-chu-sitemap/';
    useEffect(() => {
        fetch(suggestAPI + suggest, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // This parses the JSON returned by the server
            })
            .then(data => {
                if (suggest !== 0) {
                    console.log(data);
                    setSuggestData(data);
                }

                // Update the state with the fetched data
                // setSuggestData(data);
            })
            .catch(error => {
                // Handle any errors
                console.error('There was a problem with your fetch operation:', error);
            });
    }, [suggest]);

    useEffect(() => {
        fetch(ProvinceAPI, {
            method: 'GET',
            headers: {

                'Content-Type': 'application/json',

            },

        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // This parses the JSON returned by the server
            })
            .then(data => {
                console.log(data);
                setInfo(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }, []);
    useEffect(() => {
        fetch('https://dev-apiv4.pasgo.com.vn/api/v1/DoiTuong/doituong-info', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: json
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // This parses the JSON returned by the server
            })
            .then(data => {
                console.log(data);
                setDetail(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }, [id]);

    return (
        <>
            <img src="https://dev-quantri.pasgo.com.vn/Upload/DoiTuong/Avatar/638476742927635811-914a92ca-ced1-4e4a-9a0c-6da37350ba6e.png" height={100} width={100} alt="logo" />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell >Tên tỉnh</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {info.items?.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell >{row.ten}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <input type="number" min={1} max={2} value={suggest} onChange={e => setSuggest(e.target.value)} />
            <br />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="suggest table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Tên</TableCell>
                            <TableCell>Mô tả</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {suggestData.items?.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Button onClick={() => { setId(row.id); setOpen(true) }} variant="text">Chi tiết</Button>
                                </TableCell>

                                <TableCell >{row.ten}</TableCell>
                                <TableCell>
                                    {row.moTa}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal

                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Khoảng giá: {detail.item?.khoangGia}
                        <br />
                        Kiểu đối tượng: {detail.item?.kieuDoiTuongId}
                    </Typography>
                </Box>
            </Modal>
        </>

    );
};

export default Data;