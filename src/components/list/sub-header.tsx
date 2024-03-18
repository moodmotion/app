import { ListSubheader, Typography } from "@mui/material"

type SubHeaderProps = {
    label: string
}

export const SubHeader = ({ label }: SubHeaderProps) => {

    return (
        <ListSubheader>
            <Typography variant={'h5'}>{label}</Typography>
        </ListSubheader>
    )
}
