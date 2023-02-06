import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');

    //for DEV ONLY!!
    await pause(1000);
    
    return response.data;
});


//Helper Function for DEV ONLY!!

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}



// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.rejected === 'users/fetch/rejected'

export { fetchUsers };





