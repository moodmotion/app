import { styled } from "@mui/material"
import { grey } from "@mui/material/colors"

export const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}))
