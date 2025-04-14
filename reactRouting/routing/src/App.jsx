import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import { PassWordGenerator } from './passwordComp/PasswordGenerator';

function App() {

  // .............Form with CRUD operations..........................

  const notify = () => toast("Wow so easy!");

  let [formData, setFormData] = useState(
    {
      uname: '',
      uemail: '',
      uphone: '',
      umessage: '',
      index: ''
    }
  )

  let saveData = (e) => {
    let oldData = { ...formData };
    let inputName = e.target.name;

    let inputValue = e.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  }

  let [userData, setUserData] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();

    formData.uname = formData.uname.trim();
    formData.uemail = formData.uemail.trim();
    formData.uphone = formData.uphone.trim();
    formData.umessage = formData.umessage.trim();

    if(formData.uname==''||formData.uemail==''||formData.uphone==''){
      toast('Please fill all the fields carefully!');
      return;
    }

    let indexFoundOrNot = userData.filter((v,i)=>{
      return formData.index==v.index;
    })
    if(indexFoundOrNot.length==0){
      let newUserData = {
        uname: formData.uname,
        uemail: formData.uemail,
        uphone: formData.uphone,
        umessage: formData.umessage,
        index: Date.now()
      }
  
      // validate data
  
      let filterData  = userData.filter((v)=>{
        return (v.uemail==formData.uemail || v.uphone==formData.uphone)
      })
      
      if(filterData.length==0){
        let oldUserData = [...userData, newUserData]; // old data + new data
        setUserData(oldUserData);
        clearFormInputs();
  
      }else{
        toast.error('Email or Phone already exist!');
        clearFormInputs();
        return;
      }
    }
    else{      
      let filterData = 0;

      // validate data
      for(let i=0;i<userData.length;i++){
        if(userData[i].index==formData.index){
          continue;
        }
        if(userData[i].uemail==formData.uemail || userData[i].uphone==formData.uphone){
          filterData++;
        }
      }

      if(filterData==0){
        for(let i=0;i<userData.length;i++){
          if(userData[i].index==formData.index){
            userData[i] = formData;
            break;
          }
        }
        setUserData(userData);
        clearFormInputs();
        console.log(userData);
        
        toast("Editted Successfully!");
      }
      else{
        clearFormInputs();
        toast.error('Email or Phone already exist!');
        return;
      }
    }
  }

  let  clearFormInputs = ()=>{
    setFormData(
      {
        uname: '',
        uemail: '',
        uphone: '',
        umessage: '',
        index: ''
      }
    )
  }

    let displayTableData = userData.map((v, i) => {
      return (
        <tr key={i}>
          <td>{i+1}</td>
          <td>{v.uname}</td>
          <td>{v.uemail}</td>
          <td>{v.uphone}</td>
          <td>{v.umessage}</td>
          <td>
            <button onClick={()=>deleteRow(v.index)}>Delete</button>
            <button onClick={()=>editRow(v)}>Edit</button>
          </td>
        </tr>
      )
    })

  let editRow = (v)=>{
    setFormData(v);
  }

  let deleteRow = (index)=>{
    let afterDeletionData = userData.filter((v)=>{
      return v.index!=index;
    });
    
    userData = afterDeletionData;

    setUserData(userData);
    toast.success('Data Deleted Successfully!');
  }

  return (
    <div>
       {/* .............Form with CRUD operations................ */}
      <div className='formOutermost'>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className='formOuter'>
          <h1>Form with CRUD operations</h1>
          <div>
            <label htmlFor="uname">Username</label>
            <input type="text" name='uname' value={formData.uname} onChange={saveData} />
          </div>
          <div>
            <label htmlFor="uemail">Email</label>
            <input type="email" name='uemail' value={formData.uemail} onChange={saveData} />
          </div>
          <div>
            <label htmlFor="uphone">Phone</label>
            <input type="text" name='uphone' value={formData.uphone} onChange={saveData} />
          </div>
          <div>
            <label htmlFor="umessage">Message</label>
            <textarea name="umessage" id="" value={formData.umessage} onChange={saveData} />
          </div>
          <div>
            <button value={formData.index === '' ? 'Save' : 'Update'}>{formData.index === '' ? 'Save' : 'Update'}</button>
          </div>
        </div>
      </form>
      {/* display user data in form of table */}
      <div className='tableOuter'>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserName</th>
              <th>UserEmail</th>
              <th>Phone No</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.length >= 1 ?
               displayTableData:
              <tr>
                <td colSpan={6} style={{ textAlign: 'center' }}>No Data Found</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      </div>

      {/* .....................Random Password Generator...........*/}

      <PassWordGenerator />
    </div>
  )
}

export default App

// 6:42:01
// 7:01:56