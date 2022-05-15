import React, {FC} from "react";
import {Icon} from "../button/iconButtonStyled"

interface Icon {
    children: React.ReactNode,
}

export const IconButton: FC<Icon> = ({children}) => {
    return (
        <Icon>
            {children}
        </Icon>
    )
}