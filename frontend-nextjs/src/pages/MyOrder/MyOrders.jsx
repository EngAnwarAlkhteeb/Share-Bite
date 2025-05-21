import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/assets'
import './MyOrders.css'

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);
    const steps = ["Food Processing", "Food Ready", "Delivering In Process", "Delivered"];
    const duration = [8, 10, 12];
    const updateStatus = async (data, step) => {
        const lastStep = 3;
        const datas = data.filter((order) => order.status == steps[step]);
        const updates = datas.map((order) => { return ({ orderId: order._id, status: steps[step + 1] }) });
        console.log(updates)
        for (const update of updates) {
            const response = await axios.post(url + "api/order/status", update, { headers: { token } });
        }
        const response = await axios.post(url + "api/order/userorders", {}, { headers: { token } });
        setData(response.data.data);
        step++;
        if (step < lastStep)
            setTimeout(() => updateStatus(response.data.data, step), duration[step] * 1000);
    };
    const fetchOrders = async () => {
        const response = await axios.post(url + "api/order/userorders", {}, { headers: { token } });
        setData(response.data.data);
        setTimeout(() => updateStatus(response.data.data, 0), duration[0] * 1000);
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])
    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order, index) => {
                    return (
                        <div key={index} className='my-orders-order'>
                            <img src={assets.parcel_icon} alt="" />
                            <p>{order.items.map((item, index) => {
                                if (index === order.items.length - 1) {
                                    return item.name + " x " + item.quantity + ", "
                                }
                            })}</p>
                            <p>${order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                            <button onClick={fetchOrders}>Track Order</button>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default MyOrders


// const updateStatus = async (data) => {
//     const datas = data.filter((order) => order.status == "Food Processing");
//     const updates = datas.map((order) => { return ({ orderId: order._id, status: "Food Ready" }) });
//     console.log(updates)
//     for (const update of updates) {
//         const response = await axios.post(url + "api/order/status", update, { headers: { token } });
//     }
//     const response = await axios.post(url + "api/order/userorders", {}, { headers: { token } });
//     setData(response.data.data);
// };