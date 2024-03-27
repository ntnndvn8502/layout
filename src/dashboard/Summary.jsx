import FullWCard from "./FullWCard";
import { Box, Grid, FormControlLabel, Checkbox } from "@mui/material";
import { StyledTab, StyledTabs } from "./HeadTabs";
import * as React from 'react';
import InputImage from "./InputImage";


function Summary() {

    const [list, setList] = React.useState(0);
    const handleList = (event, newList) => {
        if (newList !== null) {
            setList(newList);
        }
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
            <Box sx={{ mt: 1 }}>
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
                <Box>
                    <InputImage />
                </Box>

            </Box>
        </FullWCard>
    )
}
export default Summary