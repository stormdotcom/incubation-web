import React, {useEffect, useState} from "react";
import "./style.css";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addSlots, getAllSlots, getAllusers, slotSelection} from "../../../../api/adminAPI";

function SlotAllocation() {
  let [slots, setSlots]=useState([]);
  let [click, setCLicked]=useState(false)
  let [allusers, setAllUser] =useState([])
  useEffect(() => {
    getAllSlots().then((result) =>setSlots(() => [...result]))
    getAllusers().then((result)=> setAllUser(()=> [...result]))
  }, [click])
  const selectSlot=async (i)=>{
      let user = allusers[i]
      slotSelection(user._id)
  }
  let slotId;
  let inputUsers = allusers.map((ele)=> ele.fullname)
  function slotHandle({_id}) {
    slotId = _id
    console.log(slotId)
    Swal.fire({
      title:"Select Users",
      input: 'select',
      inputOptions: inputUsers
    }).then((result) => {
      selectSlot(result.value, slotId)
    });
  }
  
  const handelAddSlot= async ()=>{
    await addSlots()
    setCLicked((prev)=>!prev)
    Swal.fire({
      title: 'Add Slots',
      icon: 'add',
      input: 'range',
      inputLabel: 'Number of slot',
      inputAttributes: {
        min: 1,
        max: 50,
        step: 1
      },
      inputValue: 5
    })

  }
  return (
    <>
      <div className="main">
        <div className="formBody">
          <h3> Booking Slot</h3>
          <Button onClick={handelAddSlot} color="primary" variant="contained" size="medium"> <AddCircleIcon color="#fff" /> Add Slots</Button>
          <div className="subMain">
            
            <div className="sideBox">
              <table>
                <tbody>
                  <tr>
                    <td className="blue"></td>
                    <td>Available</td>{" "}
                  </tr>
                  <tr>
                    <td className="grey"></td>
                    <td>Not availble</td>
                  </tr>
                  <tr>
                    <td className="yellow"></td>
                    <td> Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Small Box */}
            <div className="mainBox">
              {slots.map((ele, index) => (
                <div
                  key={index}
                  onClick={()=> slotHandle(ele)}
                  className={ele.available? "box01 text-center " : "box text-center"}
                >
                  <p>  {ele.companyName} </p>
                </div>

                // ele.pending  && (
                //   <div
                //   key={index}
                //   className="box0w text-center"
                // >
                //   <p> {ele.companyName} </p>
                // </div>    
                // )
               
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlotAllocation;
