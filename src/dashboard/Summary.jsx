import FullWCard from "./FullWCard";
import { Box, Grid, FormControlLabel, Checkbox } from "@mui/material";
import { StyledTab, StyledTabs } from "./HeadTabs";
import * as React from 'react';
import InputImage from "./InputImage";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import LimitedInput from "./LimitedInput";
import CustomSwitch from "./CustomSwitch";
import MultilevelList from "./MultilevelList";


function Summary() {

    const [list, setList] = React.useState(0);
    const handleList = (event, newList) => {
        if (newList !== null) {
            setList(newList);
        }
    };
    const [cor, setCor] = React.useState('');

    const handleCor = (event) => {
        setCor(event.target.value);
    };
    return (
        <FullWCard>
            <h4>2. Tóm tắt</h4>
            <Box sx={{ mt: 1, maxWidth: '1080px' }}>
                <Grid container columnSpacing={4}>
                    <Grid item md={3}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Gần bạn" />
                    </Grid>
                    <Grid item md={3}>
                        <FormControlLabel control={<Checkbox />} label="Hiện đại" />
                    </Grid>
                    <Grid item md={3}>
                        <FormControlLabel control={<Checkbox />} label="Tiệc" />
                    </Grid>
                    <Grid item md={3}>
                        <FormControlLabel control={<Checkbox />} label="Truyền thống " />
                    </Grid>
                    <Grid item md={3}>
                        <FormControlLabel control={<Checkbox />} label="Sang trọng " />
                    </Grid>
                    <Grid item md={3}>
                        <FormControlLabel control={<Checkbox />} label="Thiên nhiên " />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 2 }}>
                <div>Ảnh gian hàng</div>
                <Box>
                    <StyledTabs
                        value={list}
                        onChange={handleList}
                        aria-label="styled tabs example"
                    >
                        <StyledTab label="Danh mục 1" />
                        <StyledTab label="Danh mục 2" />
                        <StyledTab label="Danh mục 3" />

                    </StyledTabs>
                </Box>
                <Box sx={{ mt: 1 }}>
                    <InputImage />
                </Box>

            </Box>
            <Box sx={{ mt: 3 }}>
                <div>Trạng thái mặt hàng</div>
                <Box>
                    <RadioGroup
                        sx={{ display: 'flex', gap: '32px', flexDirection: 'row', mt: 1 }}
                        name="controlled-radio-buttons-group"
                        value={cor}
                        onChange={handleCor}
                    >
                        <FormControlLabel value="1" control={<Radio color="success" />} label="Đang hợp tác" />
                        <FormControlLabel value="2" control={<Radio color="success" />} label="Dừng hợp tác" />
                        <FormControlLabel value="3" control={<Radio color="success" />} label="Đang đàm phán" />
                        <FormControlLabel value="4" control={<Radio color="success" />} label="Sắp hợp tác" />
                    </RadioGroup>
                </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
                <div>Nội dung bài viết</div>
                <CKEditor editor={ClassicEditor}>
                </CKEditor>
            </Box>
            <Box sx={{ mt: 2 }}>
                <div>Nguyên liệu, món chính</div>
                <LimitedInput length={70} />
            </Box>
            <Box sx={{ mt: 2 }}>
                <div>Hiển thị lên trang chủ</div>
                <FormControlLabel sx={{ ml: 1, mt: 1 }}
                    control={<CustomSwitch />}
                    label="Hiện thị trang chủ"
                />
            </Box>
            <Box sx={{ my: 1 }}>
                <MultilevelList />
            </Box>
        </FullWCard>
    )
}
export default Summary