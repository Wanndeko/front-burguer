import React, { useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


import Burguer from '../assets/burguer-cd.png'

import Button from "../components/Button";

import {
    Container,
    Input,
    Input_label,
    H1,
    Container_itens,
    Image
} from "./styles";


const App = () => {

    const [orders, setOrders] = useState([]);
    const history = useHistory();
    const input_order = useRef();
    const input_name = useRef();

    async function add_new_order() {

        const { data: new_order } = await axios.post('http://localhost:3002/orders',
            {
                order: input_order.current.value,
                name: input_name.current.value,
            });

        setOrders([...orders, new_order])
        history.push('/pedidos')

    }


    return (
        <Container>
            <Image src={Burguer} />
            <H1>Faça seu pedido!</H1>
            <Container_itens Container_itens >


                <Input_label>Pedido</Input_label>
                <Input ref={input_order} placeholder='ex: 1 Coca-cola, 1 x-salada' />

                <Input_label>Nome do cliente</Input_label>
                <Input ref={input_name} placeholder='ex: Percy Jackson' />

                <Button onclick={add_new_order}>Novo pedido</Button>

            </Container_itens>




        </Container>


    )

}

export default App