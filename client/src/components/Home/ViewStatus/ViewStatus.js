import React from 'react'
import "./style.css"
import NavBar from "../NavBar/Navbar"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, fullname, auth, commpanyName, CompanyRegistered, RegisterationApproved, slotRequested, slotAllocationApproved, fullyApproved) {
    return { id, fullname, auth, commpanyName, CompanyRegistered, RegisterationApproved, slotRequested, slotAllocationApproved };
}

const rows = [
    createData(1212, "Ajmal Nasumudeen", "Yes", "Tesla", true, false, false, false)
];

function ViewStatus() {
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
                                    <TableCell>Applicant Name</TableCell>
                                    <TableCell align="right">Authentication</TableCell>
                                    <TableCell align="right">Company Name</TableCell>
                                    <TableCell align="right">Company Registered</TableCell>
                                    <TableCell align="right">Registeration Approved</TableCell>
                                    <TableCell align="right">Slot Requested</TableCell>
                                    <TableCell align="right">Slot Allocation Approved</TableCell>
                                    <TableCell align="right">Fully Approved</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{row.id}</TableCell>
                                        <TableCell align="right">{row.fullname}</TableCell>
                                        <TableCell align="right">{row.auth}</TableCell>
                                        <TableCell align="right">{row.commpanyName}</TableCell>
                                        <TableCell align="right">{row.RegisterationApproved ? "Yes" : "No"}</TableCell>
                                        <TableCell align="right">{row.RegisterationApproved ? "Yes" : "No"}</TableCell>
                                        <TableCell align="right">{row.slotRequested ? "Yes" : "No"}</TableCell>
                                        <TableCell align="right">{row.slotAllocationApproved ? "Yes" : "No"}</TableCell>
                                        <TableCell align="right">{row.fullyApproved ? "Yes" : "No"}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className=" mt-5">
                    <p>Progress</p>
                    <div className="progress">
                 
                        <div className="progress-bar" role="progressbar"  style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ViewStatus
