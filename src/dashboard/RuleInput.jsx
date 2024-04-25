
import { Grid, TextField, Box, Button } from "@mui/material";
import * as React from 'react';

export default function RuleInput() {
    const [name, setName] = React.useState("");
    const [rules, setRules] = React.useState([]);
    const [contents, setContents] = React.useState("");

    React.useEffect(() => {
        fetch("https://test2-4689a-default-rtdb.firebaseio.com/regulation.json")
            .then((res) => res.json())
            .then((data) => {
                const collection = [];
                for (const key in data) {
                    const item = {
                        id: key,
                        ...data[key]
                    };
                    collection.push(item);
                };
                setRules(collection);
            })
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const content = contents.split('\n');
        const regulation = { name, content };
        fetch("https://test2-4689a-default-rtdb.firebaseio.com/regulation.json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(regulation)
        }).then(() => {
            fetch("https://test2-4689a-default-rtdb.firebaseio.com/regulation.json")
                .then((res) => res.json())
                .then((data) => {
                    const collection = [];
                    for (const key in data) {
                        const item = {
                            id: key,
                            ...data[key]
                        };
                        collection.push(item);
                    };
                    setRules(collection);
                    setName("");
                    setContents("")
                })
        });
    }
    return (
        <Grid container spacing={2}>
            <Grid item md={3}>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <div>Tiêu đề</div>
                        <TextField fullWidth sx={{ mt: 1 }} size="small" value={name} onChange={e => setName(e.target.value)} />
                    </Box>
                    <Box>
                        <div>Nội dung</div>
                        <textarea rows={5} id="RuleContent" value={contents} onChange={e => setContents(e.target.value)}></textarea>
                    </Box>
                    <Button variant="contained" type="submit">Thêm</Button>
                </form>

            </Grid>
            <Grid item md={9}>
                <div>Nội dung quy định</div>
                <Box sx={{ border: "1px solid #DAE1F5", borderRadius: 1, p: 2, mt: 1 }}>

                    {rules && rules.map((i) => <div>
                        <div>{i.name}</div>
                        <ul>
                            {i.content.map((u) => <li>
                                {u}
                            </li>)}
                        </ul>
                    </div>)}


                </Box>


            </Grid>
        </Grid>
    )
}