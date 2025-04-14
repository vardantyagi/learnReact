import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const initialState = {
  pastes: localStorage.getItem('pastes')?
    JSON.parse(localStorage.getItem('pastes')):
    []
}

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state,action) =>{
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem('pastes',JSON.stringify(state.pastes));
      console.log(state.pastes);
      
      toast.success('paste created successfully!')
    },
    updateToPastes: (state,action) =>{
      const paste = action.payload;
      const index = state.pastes.findIndex((item)=>item._id===paste._id);
      if(index>=0){
        state.pastes[index] = paste;
        localStorage.setItem('pastes',JSON.stringify(state.pastes))
        toast.success('Paste Updated Successfully')
      }
    },
    resetAllPastes: (state,action) =>{
      state.pastes = [];
      localStorage.removeItem('pastes');

    },
    removeFromPastes: (state,action) =>{
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item)=>item._id===pasteId);
      if(index>=0){
        state.pastes.splice(index,1)
        localStorage.setItem('pastes',JSON.stringify(state.pastes));
        toast.success('paste deleted successfully');
      }
    },
  }
})
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions
export default pasteSlice.reducer