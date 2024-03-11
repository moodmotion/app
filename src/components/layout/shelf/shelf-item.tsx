import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { ReactNode } from "react";

type ShelfItemProps = {
    children: ReactNode
}

export function ShelfItem({ children }: ShelfItemProps) {

    return (
        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
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