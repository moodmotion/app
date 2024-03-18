import { Avatar, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import { MouseEventHandler } from "react"

type IndexItemProps = {
    id: number
    label: string
    subHeader?: string
    index: number
    avatar: string
    itemClick: MouseEventHandler<HTMLDivElement> | undefined
}

export const IndexItem = ({ id, label, subHeader, index, avatar, itemClick }: IndexItemProps) => {

    return (
        <>
            <ListItemButton selected={index === id} onClick={itemClick}>
                <ListItemAvatar>
                    <Avatar alt={label} src={avatar} />
                </ListItemAvatar>
                <ListItemText primary={label} secondary={subHeader} />
            </ListItemButton>
        </>
    )

}
