import React, {FC} from "react";
import {Icon} from "../button/iconButtonStyled"

interface Icon {
    children: any,
}

export const IconButton: FC<Icon> = ({children}) => {
    return (
        <Icon>
            {children}
        </Icon>
    )
}