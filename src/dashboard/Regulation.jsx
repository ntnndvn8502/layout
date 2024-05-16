import LineGraph from "./LineGraph";
import FullWCard from "./FullWCard";
import MultilevelList from "./MultilevelList";
import RuleInput from "./RuleInput";
import { Box } from "@mui/material";
import Data from "./Data";


export default function Regulation() {
    return (
        <FullWCard>
            <h4>
                3. Quy định

            </h4>

            <RuleInput />
            <Box sx={{ my: 2 }}>
                <Data />
            </Box>
            <Box sx={{ mt: 1 }}>
                <LineGraph />
            </Box>

        </FullWCard>
    )
}