import { Card, Link, IconButton, Container } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";

function Notification() {
  return (
    <Card sx={{ bgcolor: '#f2dede', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        <span>Thông báo đã hết hạn</span>
        <Link sx={{ ml: 1 }} href="#" underline="hover">
          {'Xem thêm'}
        </Link>
      </Box>

      <IconButton>
        <CloseIcon />
      </IconButton>
    </Card>
  )
}
export default Notification
