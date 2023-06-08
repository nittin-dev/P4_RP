import React from 'react';
import { Card, CardContent, Container, Grid, Tab, Tabs, TextField, InputAdornment, Typography, useMediaQuery, Box, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';
import { saveAs as fileDownload } from 'file-saver';
import Navbar from '../components/Navbar/Navbar';
import { pink, purple } from '@mui/material/colors';

export default function Bookings() {
  const [value, setValue] = React.useState('1');
  const [searchTerm, setSearchTerm] = React.useState('');
  const isMobile = useMediaQuery('(max-width:600px)');
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   const handleView = ()=>{
     console.log('button-clicked')
   }
  const handleDownload = () => {
    fetch('../Assets/dummy.pdf')
      .then((response) => response.blob())
      .then((blob) => {
        fileDownload(blob, 'Bookings.pdf'); // Specify the desired file name with the extension
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error);
      });
  };

  const columns = [
    { field: 'BOOKING ID', headerName: 'BOOKING ID', width: 180 },
    { field: 'TRAVELER(S)', headerName: 'TRAVELLER(S)', width: 180 },
    { field: 'CHECK-IN', headerName: 'CHECK-IN', width: 180 },
    { field: 'CHECK-OUT', headerName: 'CHECK-OUT', width: 180 },
    { field: 'DESTINATION', headerName: 'DESTINATION', width: 180 },
    {
      field: 'INVOICE',
      headerName: 'INVOICE',
      width: 100,
      renderCell: (params) => params.row['INVOICE'],
    },
  ];

  const column_ongoing = [
    { field: 'BOOKING ID', headerName: 'BOOKING ID', width: 180 },
    { field: 'TRAVELER(S)', headerName: 'TRAVELLER(S)', width: 180 },
    { field: 'CHECK-IN', headerName: 'CHECK-IN', width: 180 },
    { field: 'CHECK-OUT', headerName: 'CHECK-OUT', width: 180 },
    { field: 'DESTINATION', headerName: 'DESTINATION', width: 180 },
    { field: 'DETAILS', headerName: 'DETAILS', width: 180,  renderCell: (params) => params.row['DETAILS'], },
  ]
  const rows_ongoing = [
    {
      id: 1,
      'BOOKING ID': 1,
      'TRAVELER(S)': 'John Doe',
      'CHECK-IN': '2023-06-01',
      'CHECK-OUT': '2023-06-07',
      'DESTINATION': 'Paris',
      'DETAILS': <Button onClick={handleView} startIcon={<DescriptionIcon sx = {{color : purple[400]}} />} size="small" />,
    },
    {
      id: 2,
      'BOOKING ID': 1,
      'TRAVELER(S)': 'John Doe',
      'CHECK-IN': '2023-06-01',
      'CHECK-OUT': '2023-06-07',
      'DESTINATION': 'Paris',
      'DETAILS': <Button onClick={handleView} startIcon={<DescriptionIcon sx = {{color : purple[400]}}/>} size="small" />,
    },
    {
      id: 3,
      'BOOKING ID': 1,
      'TRAVELER(S)': 'John Doe',
      'CHECK-IN': '2023-06-01',
      'CHECK-OUT': '2023-06-07',
      'DESTINATION': 'Paris',
      'DETAILS': <Button onClick={handleView} startIcon={<DescriptionIcon sx = {{color : purple[400]}} />} size="small" />,
    },
    // Add more duplicated rows here
  ];
  
  const rows = [
    { id: 1, 'BOOKING ID': 1, 'TRAVELER(S)': 'John Doe', 'CHECK-IN': '2023-06-01', 'CHECK-OUT': '2023-06-07', 'DESTINATION': 'Paris', 'INVOICE': <Button onClick={handleDownload} startIcon={<DownloadIcon sx = {{color : purple[400]}} />} size="small" /> },
    { id: 2, 'BOOKING ID': 2, 'TRAVELER(S)': 'Jane Smith', 'CHECK-IN': '2023-06-08', 'CHECK-OUT': '2023-06-15', 'DESTINATION': 'London', 'INVOICE': <Button onClick={handleDownload} startIcon={<DownloadIcon sx = {{color : purple[400]}} />} size="small" /> },
    { id: 3, 'BOOKING ID': 3, 'TRAVELER(S)': 'Mike Johnson', 'CHECK-IN': '2023-06-16', 'CHECK-OUT': '2023-06-23', 'DESTINATION': 'New York', 'INVOICE': <Button onClick={handleDownload} startIcon={<DownloadIcon sx = {{color : purple[400]}} />} size="small" /> },
    { id: 4, 'BOOKING ID': 4, 'TRAVELER(S)': 'Sarah Thompson', 'CHECK-IN': '2023-06-24', 'CHECK-OUT': '2023-06-30', 'DESTINATION': 'Tokyo', 'INVOICE': <Button onClick={handleDownload} startIcon={<DownloadIcon sx = {{color : purple[400]}}/>} size="small" /> },
    { id: 5, 'BOOKING ID': 5, 'TRAVELER(S)': 'David Wilson', 'CHECK-IN': '2023-07-01', 'CHECK-OUT': '2023-07-07', 'DESTINATION': 'Sydney', 'INVOICE': <Button onClick={handleDownload} startIcon={<DownloadIcon sx = {{color : purple[400]}} />} size="small" /> },
    {
      id: 6,
      'BOOKING ID': 6,
      'TRAVELER(S)': 'John Doe',
      'CHECK-IN': '2023-06-01',
      'CHECK-OUT': '2023-06-07',
      'DESTINATION': 'Paris',
      'INVOICE': <Button onClick={handleDownload} startIcon={<DownloadIcon sx = {{color : purple[400]}}/>} size="small" />,
    },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows_ongoing = searchTerm 
   ? rows_ongoing.filter((row) => row['TRAVELER(S)'].toLowerCase().includes(searchTerm.toLowerCase()))
   : rows_ongoing;

  const filteredRows = searchTerm
    ? rows.filter((row) => row['TRAVELER(S)'].toLowerCase().includes(searchTerm.toLowerCase()))
    : rows;

  const tabStyles = {
    minWidth: isMobile ? 'auto' : 100,
  };

  React.useEffect(() => {
    const handleClick = (event) => {
      // Handle click event here
      console.log('Screen clicked!');
    };

    // Attach click event listener to the document
    document.addEventListener('click', handleClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth="lg" className="mb-4 " sx={{ paddingTop: '80px' }}>
          <Card className="mt-2 " style={{ boxShadow: 'rgb(207 202 202) 0px 0px 10px', border: '1px solid #1976d2' }}>
            <CardContent>
              <Typography>
                <p className="mt-4 fw-bold">BOOKINGS</p>
              </Typography>

              <Card className="mt-4">
                <CardContent>
                  <TextField
                    label="Search Travel-id or Booking-id"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    style={{ marginRight: '500px', width: isMobile ? '100%' : '50%' }}
                  />
                  <TabContext value={value}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="Past" value="1" />
                      <Tab label="Ongoing" value="2" />
                      <Tab label="Upcoming" value="3" />
                    </TabList>
                    <TabPanel value="1">
                      {filteredRows.length === 0  ? (
                        <div className="text-center mt-2">No past bookings.</div>
                      ) : (
                        <div style={{ height: 400, width: '100%' }}>
                          <DataGrid rows={filteredRows} columns={columns} pageSize={5} />
                        </div>
                      )}
                    </TabPanel>
                    <TabPanel value="2">
                     {filteredRows_ongoing.length===0 ? (
                      <div className="text-center mt-2">No Ongoing bookings.</div>
                     ): (
                      <div style={{ height: 400, width: '100%' }}>
                          <DataGrid rows={filteredRows_ongoing} columns={column_ongoing} pageSize={5} />
                        </div>
                     )}
                    </TabPanel>
                    <TabPanel value="3">
                      <div className="text-center mt-2">No Upcoming bookings.</div>
                    </TabPanel>
                  </TabContext>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}
