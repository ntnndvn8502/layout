import * as React from 'react';
import { Container, Select, MenuItem, FormControl, Button, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function SearchBar() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container sx={{ display: 'grid', gridTemplateColumns: '100px auto 50px' }}>
      <FormControl fullWidth >

        <Select
          displayEmpty
          id="demo-simple-select"
          value={age}
          placeholder='Age'
          onChange={handleChange}
          sx={{ height: '40px', borderRadius: "16px 0 0 16px" }}

        >
          <MenuItem value="">Tất cả</MenuItem>
          <MenuItem value={1}>Quản lí tài khoản</MenuItem>
          <MenuItem value={2}>Cài đặt</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <OutlinedInput
          id="component-outlined"
          placeholder='Tìm kiếm chức năng bất kì'
          sx={{ height: '40px', borderRadius: 0 }}
        />
      </FormControl>
      <Button className='search-btn' variant="outlined">
        <SearchIcon />
      </Button>
    </Container>
  )
}
export default SearchBar
