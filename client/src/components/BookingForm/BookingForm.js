import React from "react";
import "./style.css";
import Swal from "sweetalert2";

  function slotHandle() {
    Swal.fire({
      title: "Are you sure?",
      text: "Click Allocate for confirm allocating this slot or Cancel!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Allocate!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Confirmed!",
          "Your slot booked be Patient for further confirmation.",
          "success"
        );
      }
    });
  }
  return (
    <>
      <div className="main">
        <div className="formBody">
          <h3> Booking Slot</h3>
          <div className="subMain">
            <div className="sideBox">
              <table>
                <tbody>
                  <tr>
                    <td className="blue"></td>
                    <td>Availble</td>{" "}
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
              {array.map((ele, i) => (
                <div
                  key={i}
                  onClick={slotHandle}
                  className={i % 3 === 0 ? "box" : "box01"}
                >
                  {" "}
                  <p> {ele.id} </p>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
