import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
export function Notification(){
    
    const notify = () => toast.info("Wow so easy!");
    const notify12 = () => toast.success("Wow so easy!");
    const notify3 = () => toast.warning("Wow so easy!");
    const notify4 = () => toast.error("Wow so easy!");
    const notify5 = () => toast("Wow so easy!");
    return(
        <div>
            <button onClick={notify4}>Notify!</button>
        <ToastContainer />
        </div>
    )
}

// import 'react-notifications/lib/notifications.css';
// import {NotificationContainer, NotificationManager} from 'react-notifications';

// let showNotification = ()=>{
//     // NotificationManager.info('Data saved');
// }

{/* <NotificationContainer/> */}

// 4:42:14