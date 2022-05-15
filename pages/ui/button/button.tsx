import React, {FC} from 'react';
import {Button as AdoptionButton} from "./buttonStyled";

export interface IButton {
    fontWeight: "bold" | "normal",
    children: React.ReactNode, 
}

export const Button: FC<IButton> = ({fontWeight, children}) => {
    return (
        <>
        <AdoptionButton fontWeight={fontWeight}> 
           {children}    
        </AdoptionButton>
        </>
        
    )
}