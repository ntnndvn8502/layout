import Dropdown from 'react-multilevel-dropdown';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { Button, Box } from '@mui/material';
export default function MultilevelList() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',

        boxShadow: 24,
        height: 400,
        '&:focus-visible': {
            outline: 0,
        }

    };
    const Show = (event) => {
        var currentElement = event.target; // Đảm bảo rằng bạn có thể truy cập vào phần tử hiện tại thông qua event.target
        var parents = [];
        var show = [event.target];
        var text = "";



        while (currentElement && currentElement.classList && !currentElement.classList.contains("menu-list")) {
            parents.push(currentElement.parentNode);
            if (currentElement.parentNode.tagName === "LI") {
                show.push(currentElement.parentNode);
            }
            currentElement = currentElement.parentNode;
        }
        show.forEach((element) => {
            if (element.getElementsByTagName("div").length > 0) {
                const selected = element.querySelector("li > div");
                if (selected) {
                    const string = selected.innerText;
                    const result = element.innerText.replace(string, "");
                    text = result.trim() + "/ " + text;

                }


            } else {
                text = element.innerText;

            }
        });
        document.getElementById("openModal").innerHTML = text;
        setOpen(false);

    }
    return (


        <>
            <Box id='openModal' onClick={handleOpen}>Phân loại</Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ textAlign: "right" }}>
                        <Button onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </Button>
                    </Box>
                    <Box sx={{ width: "100%", p: 4 }}>
                        <Box className="menu" sx={{ width: "200px", py: 1.5 }}>
                            <ul className='dish-list'>
                                <Dropdown.Item className='item'

                                >
                                    Item 1
                                    <Dropdown.Submenu className='menu menu-right' position='right'>
                                        <Dropdown.Item className='item' onClick={Show}>
                                            Subitem 1
                                        </Dropdown.Item>
                                        <Dropdown.Item className='item'>
                                            Item 2
                                            <Dropdown.Submenu className='menu menu-right' position='right'>
                                                <Dropdown.Item className='item' onClick={Show} >
                                                    Subitem 1
                                                </Dropdown.Item>
                                            </Dropdown.Submenu>
                                        </Dropdown.Item>
                                    </Dropdown.Submenu>
                                </Dropdown.Item>
                                <Dropdown.Item className='item'>
                                    Item 2
                                    <Dropdown.Submenu className='menu menu-right' position='right'>
                                        <Dropdown.Item className='item' onClick={Show}>
                                            Subitem 1
                                        </Dropdown.Item>
                                        <Dropdown.Item className='item'>
                                            Item 2
                                            <Dropdown.Submenu className='menu menu-right' position='right'>
                                                <Dropdown.Item className='item' onClick={Show}>
                                                    Subitem 1
                                                </Dropdown.Item>
                                            </Dropdown.Submenu>
                                        </Dropdown.Item>
                                    </Dropdown.Submenu>
                                </Dropdown.Item>

                            </ul>

                        </Box>
                    </Box>



                </Box>
            </Modal>

        </>


    )
}

