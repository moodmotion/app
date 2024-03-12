import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type ShelfItemProps = {
    children: ReactNode
    path: string
}

export function ShelfItem({ children, path }: ShelfItemProps) {

    const navigate = useNavigate()

    return (
        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
                onClick={() => navigate(path)}
                sx={{
                    minHeight: 48,
                    justifyContent: 'center',
                    px: 2.5,
                }}>
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: 'auto',
                        justifyContent: 'center',
                    }}>
                    {children}
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    )
}