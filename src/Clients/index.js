import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


import Bag from '../assets/bag-sg.png'

import Trash from '../assets/trash.svg'

import Button from '../components/Button'

import {
    Container, Requests,

} from './style'



const  Client_sg = () => {

    const [orders, setOrders] =useState([]);
    const history = useHistory()

    useEffect(()=>{
        async function fetch_order(){
            const {data: response_order} = await axios.get('http://localhost:3002/orders');
            setOrders(response_order)

        }

        fetch_order()

    },[])

    async function dele_order(order_id){
        
        await axios.delete(`http://localhost:3002/orders/${order_id}`)

        const new_order = orders.filter(order=> order.id !== order_id)
        setOrders(new_order);
        }

        function go_back_page(){
            history.push('/')
    }


    return(
        <Container>
            <img src={Bag}/>

            <h1>Pedidos</h1>

            <ul>
                {orders.map((orders =>{
                    <Requests key={orders.id}>
                        <p>{orders.order}</p>
                        <p>{orders.name}</p>
                        
                        <button onClick={()=> dele_order (orders.id)}>
                        <img src={Trash} alt="trash icon"/>
                        </button>
                    </Requests>
                    
                }))}
                
            </ul>

            <Button is_back={true} onClick={go_back_page}>Voltar</Button>
            
        </Container>

    )

}


export default Client_sg