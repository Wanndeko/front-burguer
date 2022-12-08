import React from "react";

import { Button as Pedido_button } from "./style";

function Button ({children, ...props}){

    return <Pedido_button{... props}>{children}</Pedido_button> 

}

export default Button