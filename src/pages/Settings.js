import { TabContext, TabList, TabPanel } from '@mui/lab'
import {  Card, CardContent, IconButton, Tab, TextField } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';

export default function Settings() {
    const [value, setValue] = React.useState('1');
    const [value1, setValue1] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const handleChange1 = (event, newValue) => {
        setValue1(newValue);
      }
      const [text, setText] = React.useState('');

      
    
      const handleChangeText = (event) => {
        setText(event.target.value);
      };
      const [rows, setRows] = React.useState([]);
      const [adminrows, setadminRows] = React.useState([]);
      const [departmentrows, setdepartmentRows] = React.useState([]);

    
    
      const handleTextChange = (index, value) => {
        const updatedRows = [...rows];
        updatedRows[index] = value;
        setRows(updatedRows);
      };

      const handleTextChangeAdmin = (index, value) => {
        const updatedRows = [...rows];
        updatedRows[index] = value;
        setRows(updatedRows);
      };
      const handleTextChangedepartment = (index, value) => {
        const updatedRows = [...departmentrows];
        updatedRows[index] = value;
        setdepartmentRows(updatedRows);
      };
      const handleAddRow = () => {
        setRows([...rows, '']);
      };
      const handleAdminAddRow = () => {
        setadminRows([...adminrows, '']);
      };

      const handleDepartmentAddRow = () => {
        setdepartmentRows([...departmentrows, '']);
      };
    
      const handleDeleteRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
      };

      const handleAdminDeleteRow = (index) => {
        const updatedRows = [...adminrows];
        updatedRows.splice(index, 1);
        setadminRows(updatedRows);
      };

      const handleDepartmentDeleteRow = (index) => {
        const updatedRows = [...departmentrows];
        updatedRows.splice(index, 1);
        setdepartmentRows(updatedRows);
      };
    
     





  return (
    <div className='container d-flex'>
        <TabContext value={value}>

    <TabList
      onChange={handleChange}
      aria-label="lab API tabs example"
      orientation="vertical"
    >
      <Tab label="GENERAL SETTINGS" value="1" />
      <Tab label="Users" value="2" />
      <Tab label="Manage GST" value="3" />
    </TabList>
    <div>
      <TabPanel value="1" className='ps-5 ' sx={{width:"850px"}}>
        <h5>GENERAL SETTINGS</h5>
        <Card className='mt-2'>
            
            <CardContent>
            <h5>Whitelisted email domains</h5> 
            <p>Email IDs with whitelisted official domains allowed for platform login</p>
            <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    value={row}
                    onChange={(e) => handleTextChange(index, e.target.value)}
                    variant="outlined"
                    sx={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDeleteRow(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={handleAddRow}>
        Add
      </Button>
        </CardContent>
                
        </Card>
        <Card className='mt-2'>
            <CardContent>
            <h5>Admin</h5> 
            <p>Email IDs with whitelisted official domains allowed for platform login</p>
            <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {adminrows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    value={row}
                    onChange={(e) => handleTextChangeAdmin(index, e.target.value)}
                    variant="outlined"
                    sx={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleAdminDeleteRow(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={handleAdminAddRow}>
        Add
      </Button>

      

        </CardContent>
                
        </Card>
        <Card className='mt-2'>
            <CardContent>
            <h5>Department</h5> 
            <p>Enter list of designations in your organization</p>
            <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {departmentrows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    value={row}
                    onChange={(e) => handleTextChangedepartment(index, e.target.value)}
                    variant="outlined"
                    sx={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDepartmentDeleteRow(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={handleDepartmentAddRow}>
        Add
      </Button>

      

        </CardContent>
                
        </Card>
      </TabPanel>
      <TabPanel value="2">
        <Card className='mt-3'>
            <CardContent>
            <TabContext value={value1}>

<TabList
  onChange={handleChange1}
  aria-label="lab API tabs example"
>
  <Tab label="Onboarded" value="1" />
  <Tab label="In Queue" value="2" />
  <Tab label="Invited" value="3" />
</TabList>
    <TabPanel value="1" className='ps-5 ' sx={{width:"850px"}}>
    <TableContainer component={Paper}>
        <Table>
        <TableHead>
            <TableRow>
              <TableCell>Employee details</TableCell>
              <TableCell>Designation</TableCell>
              <tableCell>Travel policy</tableCell>
              <TableCell>Manager</TableCell>
            <TableCell>Actions</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {/* {departmentrows.map((row, index) => ( */}
              <TableRow>
                
               
               
              </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </TabPanel>
    <TabPanel value="2" className='ps-5 ' sx={{width:"850px"}}>
        <h5>In Queue</h5>
      
        
    </TabPanel>
    <TabPanel value="3" className='ps-5 ' sx={{width:"850px"}}>
        <h5>In Queue</h5>
    </TabPanel>
</TabContext>

            </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value="3">Manage GST</TabPanel>
    </div>
  
</TabContext>

      
    </div>
  )
}
