import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const initialState = {
  pasteItems: localStorage.getItem('pasteItems')?JSON.parse(localStorage.getItem('pasteItems')):[]
}

export const pasteSlice = createSlice({
  name:'pasteApp',
  initialState,
  reducers:{
    addToPastes:(state,action)=>{
      const paste = action.payload;
      state.pasteItems.push(paste);
      localStorage.setItem('pasteItems',JSON.stringify(state.pasteItems));      
      toast('paste added successfully!');
    },
    updateToPastes:(state,action)=>{      
      const paste = action.payload;
      const index = state.pasteItems.findIndex((p)=>p._id==paste._id);
      if(index>=0){
        state.pasteItems[index] = paste;
        localStorage.setItem('pasteItems',JSON.stringify(state.pasteItems));
        toast('paste updated successfully!');
      }
    },
    removeFromPastes:(state,action)=>{
      const id = action.payload;
      const index = state.pasteItems.findIndex((paste)=>paste._id===id);
      if(index>=0){
        state.pasteItems.splice(index,1);
        localStorage.setItem('pasteItems',JSON.stringify(state.pasteItems));
        toast('paste deleted successfully!');
      }
    },
    resetAllPastes:(state,action)=>{
      console.log('called reset all');
      
      state.pasteItems = [];
      localStorage.removeItem('pasteItems');
      toast('all pastes deleted successfully!');
    },
  }
})

export const { addToPastes, updateToPastes, removeFromPastes, resetAllPastes } = pasteSlice.actions
export default pasteSlice.reducer