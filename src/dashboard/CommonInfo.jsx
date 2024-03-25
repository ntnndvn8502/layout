import { Card, Box, FormControl, Select, MenuItem, TextField, InputAdornment, Grid } from "@mui/material";
import FullWCard from "./FullWCard";
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SelectBtn from "./SelectBtn";

function CommonInfo() {
    const [province, setProvince] = React.useState(1);
    const handleProvince = (event, newProvince) => {
        if (newProvince !== null) {
            setProvince(newProvince);
        }
    };
    const [major, setMajor] = React.useState(1);
    const handleMajor = (event, newMajor) => {
        if (newMajor !== null) {
            setMajor(newMajor);
        }
    };
    const [brand, setBrand] = React.useState('');

    const handleBrand = (event) => {
        setBrand(event.target.value);
    };
    const [venue, setVenue] = React.useState('');

    const handleVenue = (event) => {
        setVenue(event.target.value);
    };
    const [add1, setAdd1] = React.useState('');

    const handleAdd1 = (event) => {
        setAdd1(event.target.value);
    };
    const [add2, setAdd2] = React.useState('');

    const handleAdd2 = (event) => {
        setAdd2(event.target.value);
    };
    const [add3, setAdd3] = React.useState('');

    const handleAdd3 = (event) => {
        setAdd3(event.target.value);
    };
    const [add4, setAdd4] = React.useState('');

    const handleAdd4 = (event) => {
        setAdd4(event.target.value);
    };
    const [level, setLevel] = React.useState('');

    const handleLevel = (event) => {
        setLevel(event.target.value);
    };
    const provinces = [
        {
            id: 1,
            name: 'Hà Nội'
        },
        {
            id: 2,
            name: 'Hồ Chí Minh'
        },
        {
            id: 3,
            name: 'Đà Nẵng'
        },
        {
            id: 4,
            name: 'Khánh Hòa'
        },
    ]
    const majors = [
        {
            id: 1,
            name: 'Nhà hàng'
        },
        {
            id: 2,
            name: 'Phòng khám'
        },
        {
            id: 3,
            name: 'Tổ chức sự kiện'
        },
        {
            id: 4,
            name: 'Khách sạn'
        }
    ]
    return (
        <FullWCard>
            <h4>1. Thông tin chung <span style={{ color: 'red' }}>*</span> </h4>
            <Box sx={{ mt: 1 }}>
                <div>Tỉnh/ thành phố</div>
                <ToggleButtonGroup
                    sx={{ mt: 1, display: 'flex', gap: 2 }}
                    color="warning"
                    value={province}
                    exclusive
                    onChange={handleProvince}
                    aria-label="Platform"
                >
                    {provinces.map((item) => <SelectBtn value={item.id} key={item.id}>{item.name}</SelectBtn>)}

                </ToggleButtonGroup>
            </Box>
            <Box sx={{ mt: 1 }}>
                <div>Ngành hàng</div>
                <ToggleButtonGroup
                    sx={{ mt: 1, display: 'flex', gap: 2 }}
                    color="warning"
                    value={major}
                    exclusive
                    onChange={handleMajor}
                    aria-label="Platform"
                >
                    {majors.map((item) => <SelectBtn value={item.id} key={item.id}>{item.name}</SelectBtn>)}

                </ToggleButtonGroup>
            </Box>
            <Box sx={{ mt: 1 }}>
                <div>Thương hiệu (Lấy dữ liệu từ đối tác cũ trên PasGo)</div>
                <FormControl sx={{ mt: 1 }} fullWidth>

                    <Select
                        sx={{ height: '44px' }}
                        id="brand-select"
                        value={brand}
                        displayEmpty
                        onChange={handleBrand}
                    >
                        <MenuItem disabled value=""><em> Vui lòng chọn Thương hiệu</em></MenuItem>
                        <MenuItem value='gogi'>Gogi</MenuItem>
                        <MenuItem value="kfc">KFC</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ mt: 1 }}>
                <div>Tên gian hàng (Thương hiệu + Địa chỉ tóm tắt  + Loại hình)</div>
                <TextField size="small" sx={{ mt: 1, height: '44px' }} fullWidth></TextField>

            </Box>
            <Box sx={{ mt: 1 }}>
                <div>
                    Khoảng giá
                </div>
                <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <TextField
                        size="small"
                        type="number"
                        sx={{ width: '220px' }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">đ</InputAdornment>,
                        }}
                        variant="outlined"
                    />
                    <div>-</div>
                    <TextField
                        size="small"
                        type="number"
                        sx={{ width: '220px' }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">đ</InputAdornment>,
                        }}
                        variant="outlined"
                    />
                </Box>
            </Box>
            <Box sx={{ mt: 1 }}>
                <div>Độ sang trọng</div>
                <FormControl sx={{ mt: 1, width: '250px' }} >

                    <Select size="small"

                        id="level-select"
                        value={level}
                        displayEmpty
                        onChange={handleLevel}

                    >
                        <MenuItem value="">Sang trọng</MenuItem>
                        <MenuItem value='gogi'>Bình dân</MenuItem>

                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ mt: 1 }}>
                <div> Địa chỉ ngắn     <span style={{ color: 'red' }}> * </span> </div>
                <TextField size="small" sx={{ mt: 1 }} fullWidth></TextField>

            </Box>
            <Box sx={{ mt: 1 }}>
                <div>Khu vực nổi tiếng gần nhất</div>
                <FormControl fullWidth sx={{ mt: 1, }} >

                    <Select
                        size="small"
                        id="venue-select"
                        value={venue}
                        displayEmpty
                        onChange={handleVenue}

                    >
                        <MenuItem value="">Hồ Hoàn Kiếm, Time City, Vinhome OcenPark 3</MenuItem>
                        <MenuItem value='etc'>V.v</MenuItem>

                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ mt: 1, mb: 2 }}>
                <div>Địa chỉ hành chính <span style={{ color: 'red' }}> *</span> </div>
                <Grid sx={{ mt: 1 }} container>
                    <Grid sx={{ pr: 2 }} item md={3}>
                        <div>Quận/ Huyện</div>
                        <FormControl fullWidth sx={{ mt: 1 }} >

                            <Select
                                size="small"
                                value={add1}
                                displayEmpty
                                onChange={handleAdd1}

                            >
                                <MenuItem value="">Hoàn Kiếm</MenuItem>
                                <MenuItem value='etc'>V.v</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid sx={{ pr: 2 }} item md={3}>
                        <div>Phường/ xã</div>
                        <FormControl fullWidth sx={{ mt: 1 }} >

                            <Select
                                size="small"
                                value={add2}
                                displayEmpty
                                onChange={handleAdd2}

                            >
                                <MenuItem value="">Tràng Tiền</MenuItem>
                                <MenuItem value='etc'>V.v</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid sx={{ pr: 2 }} item md={3}>
                        <div>Xóm/ tổ</div>
                        <FormControl fullWidth sx={{ mt: 1 }} >

                            <Select
                                size="small"
                                value={add3}
                                displayEmpty
                                onChange={handleAdd3}

                            >
                                <MenuItem value="">Tổ 3</MenuItem>
                                <MenuItem value='etc'>V.v</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid sx={{ pr: 2 }} item md={3}>
                        <div>Đường phố</div>
                        <FormControl fullWidth sx={{ mt: 1 }} >

                            <Select
                                size="small"
                                value={add4}
                                displayEmpty
                                onChange={handleAdd4}

                            >
                                <MenuItem value="">Trần Duy Hưng</MenuItem>
                                <MenuItem value='etc'>V.v</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>

            </Box>

        </FullWCard>


    )
}
export default CommonInfo