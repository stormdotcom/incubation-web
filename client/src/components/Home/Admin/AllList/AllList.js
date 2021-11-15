import React from 'react'
import "./style.css"
import {TableRow, TableHead, TableContainer, TableCell, TableBody, Table} from '@mui/material';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material"
import {changePendingStatus, approveCompany} from "../../../../api/adminAPI"
import Swal from "sweetalert2"
function createData(id, userID,name, email, logo, commpanyName, approved, allocated) {
    return { id,userID, name, email, logo, commpanyName, approved, allocated };
}

function AllList({applicationList}) {

    // sort pending list
    let pendingList = applicationList.filter(ele =>ele.pending)
     const rows =   pendingList.map((element) => {
       return createData(element.index, element._id, element.fullname, element.email, element.logo, element.commpanyName,element.approved, element.allocated )
        })
    
    //sort new list
        let newList = applicationList.filter(ele =>!ele?.pending)
        const newApplicant =   newList.map((element) => {
            return createData(element.index, element._id, element.fullname, element.email, element.logo, element.commpanyName,element.approved, element.allocated )
             })
const handleView=(user)=>{
    let currentUser = applicationList.filter(ele => ele._id === user.userID);
    let {pending, _id, logo, __v, index,...rest} =currentUser[0];
    let htmlCode = "";
    for (const [key, value] of Object.entries(rest)) {
        htmlCode += "<tr> <td> "+key+"</td>  <td className='rawVal'>"+value+"</td>   </tr> <tr>"
      }
    Swal.fire({
        title:rest.companyName + " LLP",
        imageUrl: rest.logo,
        imageHeight: 20,
        html:
             '<table name="mytab" id="myTab1">' +
             htmlCode+
            '</table>',
      })
}   
const handlePending = (userID, key)=>{

    changePendingStatus(userID)

}
const handleApprove = async ({userID, email})=>{
     approveCompany(userID, email)

}
             
    return (
        <>
            <div className="main">
                {/* New Applicant */}
                <div className="tableContainer">
                    <h3 style={{ textAlign: "center", margin: "20px 10px", padding: "15px 0 5px 0"}}> New Applicant </h3>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 300 }} md={{ minWidth: 300 }} aria-label="simple table" style={{fontSize: "smaller"}}>
                            <TableHead>
                                <TableRow className="">
                                    <TableCell>#</TableCell>
                                    <TableCell>Applicant Name</TableCell>
                                    <TableCell align="center">Company Name</TableCell>
                                    <TableCell align="center">Company Registered</TableCell>
                                    <TableCell align="center">Registeration Approved</TableCell>
                                    <TableCell align="center">View</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {newApplicant.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index+1}</TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="center">{row.companyName}</TableCell>
                                        <TableCell align="center">Yes</TableCell>
                                        <TableCell align="center">{row.approved ? "Yes" : "No"}</TableCell>
                                        <TableCell align="center"> <Button onClick={()=>handleView(row) } size="small">View</Button></TableCell>
                                        <TableCell align="center"> <Button onClick={()=>handlePending(row.userID, index)} variant="contained" size="medium">Pending</Button> </TableCell> 
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <div className=" mt-5">
                    <p>Progress</p>
                    <div className="progress">
                 
                        <div className="progress-bar" role="progressbar"  style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div> */}
                    
                </div>
                {/* Approved */}

                <div className="tableContainer">
                    <h3 style={{ textAlign: "center", margin: "20px 10px", padding: "15px 0 5px 0"}}> Pending List </h3>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 300 }} md={{ minWidth: 300 }} aria-label="simple table" style={{fontSize: "10px"}}>
                            <TableHead>
                                <TableRow className="">
                                    <TableCell>#</TableCell>
                                    <TableCell>Applicant Name</TableCell>
                                    <TableCell align="center">Logo</TableCell>
                                    <TableCell align="center">Company Name</TableCell>
                                    <TableCell align="center">Registeration Approved</TableCell>
                                    <TableCell align="center">Slot Allocation Approved</TableCell>
                                    <TableCell align="center">View</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                    <TableCell align="center">Comments</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index+1}</TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="center">{row.logo}</TableCell>
                                        <TableCell align="center">{row.companyName}</TableCell>
                                        <TableCell align="center">{row.approved ? "Yes" : "No"}</TableCell>
                                        <TableCell align="center">{row.allocated ? "Yes" : "No"}</TableCell>
                                        <TableCell align="center"> <Button  onClick={()=>handleView(row)} size="small">View</Button></TableCell>
                                        <TableCell align="center"> {row.approved ?  <Button variant="contained" size="medium">Allocate</Button> : <Button  onClick={()=>handleApprove(row)} size="small">Approve</Button> }</TableCell>
                                        {row.approved ?  (<TableCell align="center">{row.allocated ?  "Fully approved " : "Space allocation Pending"}</TableCell>)
                                        :(<TableCell align="center">  Please Approve for space allocation</TableCell>) }
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <div className=" mt-5">
                    <p>Progress</p>
                    <div className="progress">
                 
                        <div className="progress-bar" role="progressbar"  style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div> */}
                    
                </div>
                
            </div>
        </>
    )
}

export default AllList
