import React, { useEffect, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  addSlots,
  getAllSlots,
  getAllusers,
  slotSelection,
} from "../../../../api/adminAPI";

function SlotAllocation() {
  let [slots, setSlots] = useState([]);
  let [click, setCLicked] = useState(false);
  let [allusers, setAllUser] = useState([]);
  useEffect(() => {
    getAllSlots().then((result) => setSlots(()=> [...result]));
    getAllusers().then((result) => setAllUser(() => [...result]));
  }, [click]);
  const selectSlot = async (i, slotId) => {
    let user = allusers[i];
    slotSelection(user._id, slotId);
  };

  let inputUsers = allusers.map((ele) => ele.fullname);
  function slotHandle(id) {
    Swal.fire({
      title: "Select Users",
      input: "select",
      inputOptions: inputUsers,
    }).then((result) => {
      if (result.value) {
        selectSlot(result.value, id);

      }
    });
  }

  const handelAddSlot = async () => {

    Swal.fire({
      title: "Add Slots",
      icon: "question",
      input: "range",
      inputLabel: "how much slots?",
      inputAttributes: {
        min: 1,
        max: 10,
        step: 1,
      },
      inputValue: 2,
    }).then((result) => {
      if (result.value) {
        setCLicked(value => !value)
        addSlots(result.value);
      }
    });
  };
  return (
    <>
      <div className="main">
        <div className="formBody">
          <h3> Booking Slot</h3>
          <div className="buttonGroup">
          <Button
            onClick={handelAddSlot}
            color="primary"
            variant="contained"
            size="medium"
          >
            {" "}
            <AddCircleIcon color="#fff" /> Add Slots
          </Button>
          <Button
            onClick={()=>setCLicked(prev=> !prev)}
            color="info"
            variant="contained"
            size="medium"
          >
            {" "}
            <RefreshIcon color="#fff" /> Refresh
          </Button>
          </div>
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
                ele.available ?
                (<div
                  key={index}
                  onClick={() => slotHandle(ele._id)}
                  className="box01 ">
                  <p> {ele.companyName} </p>
                </div>)
                : (
                  <div
                  key={index}
                  className="box companyName">
                      <p> {ele.companyName} </p>
                </div>
                )

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
