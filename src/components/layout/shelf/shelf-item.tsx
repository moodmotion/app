import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";

type ShelfItemProps = {
    children: ReactNode
    path: string
}

export function ShelfItem({ children, path }: ShelfItemProps) {

    const navigate = useNavigate()

    return (
        <NavLink to={path} className={({ isActive }) => (isActive ? "active-menu" : "")}>
            <ListItemButton sx={{
                minHeight: 48,
                justifyContent: 'center',
                px: 2.5,
            }}>
                <ListItemIcon sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',
                }}>
                    {children}
                </ListItemIcon>
            </ListItemButton>
        </NavLink>
    )
}

