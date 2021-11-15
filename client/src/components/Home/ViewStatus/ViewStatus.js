import React, {useEffect, useState} from 'react'
import "./style.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getCurrentCompany} from "../../../api/api"

function createData(id, fullname, auth, commpanyName, CompanyRegistered, RegisterationApproved, slotRequested, slotAllocationApproved) {
    return { id, fullname, auth, commpanyName, CompanyRegistered, RegisterationApproved, slotRequested, slotAllocationApproved };
}



function ViewStatus({currentUser}) {
let [currentCompany, setCurrentCompany]=useState({});
useEffect(() => {
    getCurrentCompany(currentUser._id).then((company)=> setCurrentCompany(company))  

}, [currentUser])
const rows = [
    createData("01", currentUser.fullname, currentUser.email, currentCompany.companyName, currentUser.Registered, currentCompany.approved,
    currentCompany.allocated,  currentUser.slotAlloacated, currentCompany.allocated)
];
let status =currentUser.Registered ? 25 : 0;
  status+=currentCompany.approved ? 25 : 0;
  status+=currentUser.slotAlloacated ? 25 : 0;
  status+=currentCompany.allocated ? 25 : 0;
  console.log(status)

    return (
        <>
            <div className="main">
                <div className="tableContainer">
                    <h3 style={{ textAlign: "center", margin: "20px 10px" }}> Status </h3>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">

                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="left">Applicant Name</TableCell>
                                    <TableCell align="center">Authentication</TableCell>
                                    <TableCell align="center">Company Name</TableCell>
                                    <TableCell align="center">Company Registered</TableCell>
                                    <TableCell align="center">Registeration Approved</TableCell>
                                    <TableCell align="center">Slot Requested</TableCell>
                                    <TableCell align="center">Slot Allocation Approved</TableCell>
                                    <TableCell align="center">Fully Approved</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{row.id}</TableCell>
                                        <TableCell align="left">{row.fullname}</TableCell>
                                        <TableCell align="center">{row.auth}</TableCell>
                                        <TableCell align="center">{row.companyName}</TableCell>
                                        <TableCell align="center">{row.CompanyRegistered ? "Yes" : "No"}</TableCell>
                                        <TableCell align="center">{row.RegisterationApproved ? "Yes" : "No"}</TableCell>
                                        <TableCell align="center">{row.slotRequested ? "Yes" : "No"}</TableCell>
                                        <TableCell align="center">{row.slotAllocationApproved ? "Yes" : "No"}</TableCell>
                                        <TableCell align="center">{row.fullyApproved ? "Yes" : "No"}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="progressBar mt-5">
                    <p>Progress</p>
                    <div className="progress">
                 
                        <div className="progress-bar" role="progressbar"  style={{width: `${status}%`}} aria-valuenow={status}aria-valuemin="0" aria-valuemax="100"> {status} % Completed</div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ViewStatus
