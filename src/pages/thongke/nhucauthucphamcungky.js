import styles from '../../styles/thongke/NhuCauThucPhamCungKy.module.css'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import React, {useState, useEffect} from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import TablePagination from '@material-ui/core/TablePagination';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import 
{ 
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    LineChart, Line, ComposedChart
} from 'recharts';
import { FaHtml5 } from 'react-icons/fa'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export const ExportToExcel = ({ apiData, fileName }) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
  
    const exportToCSV = (apiData, fileName) => {
      const ws = XLSX.utils.json_to_sheet(apiData);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, fileName + fileExtension);
    };
  
    return (
      <button onClick={(e) => exportToCSV(apiData, fileName)}
              className = {styles.export}>Export All Data as XLS</button>
    );
  };

export default function NhuCauThucPhamCungKy(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => { setIsOpen(!isOpen) }

    const fileName = "mydata";

    const [combobox_SanPham, setcombobox_SanPham] = useState([]);
    const [combobox_NhaCungCap, setcombobox_NhaCungCap] = useState([]);
    const [combobox_Year, setcombobox_Year] = useState([]);
    const [data_chartMain , setdata_chartMain] = useState([]);

    useEffect(() =>
    {
        fetch('https://localhost:44357/api/SanPham/0')
        .then(response => response.json())
        .then(result => setcombobox_SanPham(result))
        .catch(error => console.log(error));

        fetch('https://localhost:44357/api/NhaCungCap')
        .then(response => response.json())
        .then(result => setcombobox_NhaCungCap(result))
        .catch(error => console.log(error));

        fetch('https://localhost:44357/api/NhuCauThucPhamCungKy/Year')
        .then(response => response.json())
        .then(result => setcombobox_Year(result))
        .catch(error => console.log(error));

        fetch('https://localhost:44357/api/NhuCauThucPhamCungKy/PresentYear')
        .then(response => response.json())
        .then(result => setdata_chartMain(result))
        .catch(error => console.log(error));
    }, [])

    const [tensp, setTensp] = useState("All");
    const [tenncc, setTenncc] = useState("All");
    const [masp, setMasp] = useState(0);
    const [mancc, setMancc] = useState(0);

    const [year, setYear] = useState(0);
    const changeYear = (newYear) => { setYear(newYear) }

    const [quarter, setQuarter] = useState(0);
    const changeQuarter = (newQuarter) => { setQuarter(newQuarter) }

    const [month, setMonth] = useState(0);
    const changeMonth = (newMonth) => { setMonth(newMonth) }

    const [search, setSearch] = useState("");

    const changeTenSP = (newTensp) => { setTensp(newTensp) }
    const changeTenNCC = (newTenncc) => { setTenncc(newTenncc) }
    const changeMaSP = (newMasp) => { setMasp(newMasp) }
    const changeMaNCC = (newMancc) => { setMancc(newMancc) }

    const [tieuchi, setTieuChi] = useState("All");
    const changeTieuChi = (newTieuChi) => { setTieuChi(newTieuChi) }

    const [statisticTable, setStatisticTable] = useState([]);
    function ShowData ()
    {
        if (tieuchi === "All")
        {
            fetch('https://localhost:44357/api/NhuCauThucPhamCungKy/All')
            .then(res => res.json())
            .then(res => setStatisticTable(res));
        }
        else if (tieuchi === "AllYear")
        {
            fetch('https://localhost:44357/api/NhuCauThucPhamCungKy/All/' + 
                   masp + '/' + mancc)
            .then(res => res.json())
            .then(res => setStatisticTable(res));
        }
        else if (tieuchi === "ChooseYearAllQuarter")
        {
            fetch('https://localhost:44357/api/NhuCauThucPhamCungKy/' + 
                    masp + '/' + mancc + '/ChooseYearAllQuarter/' + year)
            .then(res => res.json())
            .then(res => setStatisticTable(res));
        }
        else if (tieuchi === "ChooseYearAllMonth")
        {
            fetch('https://localhost:44357/api/NhuCauThucPhamCungKy/' + 
                    masp + '/' + mancc + '/ChooseYearAllMonth/' + year)
            .then(res => res.json())
            .then(res => setStatisticTable(res));
        }
        else if (tieuchi === "ChooseQuarterAllYear")
        {
            fetch('https://localhost:44357/api/NhuCauThucPhamCungKy/' + 
                    masp + '/' + mancc + '/ChooseQuarterAllYear/' + quarter)
            .then(res => res.json())
            .then(res => setStatisticTable(res));
        }
        else if (tieuchi === "ChooseMonthAllYear")
        {
            fetch('https://localhost:44357/api/NhuCauThucPhamCungKy/' + 
                    masp + '/' + mancc + '/ChooseMonthAllYear/' + month)
            .then(res => res.json())
            .then(res => setStatisticTable(res));
        }
        else
        {

        }
    }

    // s???p x???p
    const [order, setOrder] = useState("ASC")
    const sorting = (col) =>
    {
        if (col === "SLBanRa" || col === "Gia")
        {
            if (order === "ASC")
            {
                const sorted = [...statisticTable].sort((a, b) => 
                    a[col] > b[col] ? 1 : -1
                );
                setStatisticTable(sorted);
                setOrder("DSC");
            }
            else
            {
                const sorted = [...statisticTable].sort((a, b) => 
                    a[col] < b[col] ? 1 : -1
                );
                setStatisticTable(sorted);
                setOrder("ASC");
            }
        }
        else
        {
            if (order === "ASC")
            {
                const sorted = [...statisticTable].sort((a, b) => 
                    a[col].toString() > b[col].toString() ? 1 : -1
                );
                setStatisticTable(sorted);
                setOrder("DSC");
            }
            else
            {
                const sorted = [...statisticTable].sort((a, b) => 
                    a[col].toString() < b[col].toString() ? 1 : -1
                );
                setStatisticTable(sorted);
                setOrder("ASC");
            }
        }
        
    }

    // page
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerpage] = useState(10);
    const handleChangePage = (event, newPage) =>
    {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event =>
    {
        setRowsPerpage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const emptyRows = 
    rowsPerPage - Math.min(rowsPerPage, statisticTable.length - page * rowsPerPage);
    

    // Pie chart
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };

    return (
        <div className="NhuCauThucPhamCungKy">
            <Head>
                <title>Th???ng k?? nhu c???u th???c ph???m c??ng k???</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            
            <Container>
            <h1 class={styles.title}>
                TH???NG K?? <br/> NHU C???U TH???C PH???M C??NG K???
            </h1>
            
            <h5 className={styles.nameChartMain}>
                S??? l?????ng c??c m???t h??ng b??n ra trong n??m nay
            </h5>

            {
                data_chartMain && data_chartMain.length > 0 ?
                <BarChart
                    width={500}
                    height={400}
                    data={data_chartMain}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                    className={styles.chartMain}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="TenSP" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="SLBanRa" barSize={30} fill="#FFCC00" />
                </BarChart>
                : <></>
            }

            <FormControl component="fieldset">
                <FormLabel component="legend">C??c ti??u ch?? th???ng k??:</FormLabel>
                <RadioGroup name="radio-buttons-group" defaultValue="All">
                    <FormControlLabel value="All" 
                                    onChange={(event)=> changeTieuChi(event.target.value)} 
                                    control={<Radio />} 
                                    label="Xem t???t c??? d??? li???u" />
                    <FormControlLabel value="AllYear" 
                                    control={<Radio />} 
                                    onChange={(event)=> changeTieuChi(event.target.value)}
                                    label="T???t c??? c??c n??m"/>
                    <FormControlLabel value="ChooseYearAllQuarter" 
                                    control={<Radio />} 
                                    onChange={(event)=> changeTieuChi(event.target.value)}
                                    label="T???t c??? c??c qu?? trong n??m"/>
                    <FormControlLabel value="ChooseYearAllMonth" 
                                    control={<Radio />} 
                                    onChange={(event)=> changeTieuChi(event.target.value)}
                                    label="T???t c??? c??c th??ng trong n??m"/>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select id="year-dropdown" value={year} 
                                onChange={(event)=>changeYear(event.target.value)}>
                        {combobox_Year.map((row) => 
                        (
                            <MenuItem value={row.Nam}>{row.Nam}</MenuItem>
                        ))}
                        </Select>
                        <FormHelperText>Ch???n n??m</FormHelperText>
                    </FormControl>
                    <FormControlLabel value="ChooseQuarterAllYear" 
                                    control={<Radio />} 
                                    onChange={(event)=> changeTieuChi(event.target.value)}
                                    label="T???t c??? c??c n??m theo qu??"/>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select id="year-dropdown"
                                onChange={(event)=>changeQuarter(event.target.value)}>
                            <MenuItem value="1">Q??y 1 (th??ng 1 ?????n th??ng 3)</MenuItem>
                            <MenuItem value="2">Q??y 2 (th??ng 4 ?????n th??ng 6)</MenuItem>
                            <MenuItem value="3">Q??y 3 (th??ng 7 ?????n th??ng 9)</MenuItem>
                            <MenuItem value="4">Q??y 4 (th??ng 10 ?????n th??ng 12)</MenuItem>
                        </Select>
                        <FormHelperText>Ch???n qu??</FormHelperText>
                    </FormControl>
                    <FormControlLabel value="ChooseMonthAllYear" 
                                    control={<Radio />} 
                                    onChange={(event)=> changeTieuChi(event.target.value)}
                                    label="T???t c??? c??c n??m theo th??ng"/>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select id="year-dropdown"
                                 onChange={(event) => changeMonth(event.target.value)}>
                            <MenuItem value="1">Th??ng 1</MenuItem>
                            <MenuItem value="2">Th??ng 2</MenuItem>
                            <MenuItem value="3">Th??ng 3</MenuItem>
                            <MenuItem value="4">Th??ng 4</MenuItem>
                            <MenuItem value="5">Th??ng 5</MenuItem>
                            <MenuItem value="6">Th??ng 6</MenuItem>
                            <MenuItem value="7">Th??ng 7</MenuItem>
                            <MenuItem value="8">Th??ng 8</MenuItem>
                            <MenuItem value="9">Th??ng 9</MenuItem>
                            <MenuItem value="10">Th??ng 10</MenuItem>
                            <MenuItem value="11">Th??ng 11</MenuItem>
                            <MenuItem value="12">Th??ng 12</MenuItem>
                        </Select>
                        <FormHelperText>Ch???n th??ng</FormHelperText>
                    </FormControl>
                </RadioGroup>
            </FormControl>
            
           
            <br/><br/><br/><br/>


            <FormControl sx={{ m: 1, minWidth: 120 }} >
                <Select id="tensp-dropdown" className={styles.select}
                        value={masp}
                        onChange={
                            (event)=>changeTenSP(event.target.text),
                            (event)=>changeMaSP(event.target.value)}>
                    <MenuItem value="0" selected>
                        <em>All</em>
                    </MenuItem>
                    {combobox_SanPham.map((row) => 
                    (
                        <MenuItem value={row.MaSP}>{row.TenSP}</MenuItem>
                    ))}
                </Select>
                <FormHelperText>Ch???n s???n ph???m</FormHelperText>
            </FormControl>
            &emsp;&emsp;
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="tenncc-dropdown" className={styles.select}
                        value={mancc}
                        onChange={
                            (event)=>changeTenNCC(event.target.text),
                            (event)=>changeMaNCC(event.target.value)}>
                    <MenuItem value="0" selected>
                        <em>All</em>
                    </MenuItem>
                    {combobox_NhaCungCap.map((row) => 
                    (
                        <MenuItem value={row.MaNCC}>{row.TenNCC}</MenuItem>
                     ))}
                </Select>
                <FormHelperText>Ch???n nh?? cung c???p</FormHelperText>
            </FormControl>
            &emsp;&emsp;&emsp;
            <Button variant="contained" onClick={ShowData} className={styles.Button}>
                Xem th???ng k??
            </Button>
            <br/><br/>
            <Typography className={styles.text} variant="h7">
                {
                    'All Rows: ' + statisticTable.length
                }
            </Typography> 
            <br/>
            <hr/>
            <h5 className={styles.titleStatistic}>
                {
                    tieuchi === "All" ? 
                        'T???t c??? d??? li???u nhu c???u th???c ph???m' :
                    tieuchi === "AllYear" ? 
                        'Nhu c???u th???c ph???m t???t c??? c??c n??m' : 
                    tieuchi === "ChooseYearAllQuarter" ? 
                        'Nhu c???u th???c ph???m thu t???t c??? c??c qu?? trong n??m ' + year :
                    tieuchi === "ChooseYearAllMonth" ?
                        'Nhu c???u th???c ph???m t???t c??? c??c th??ng trong n??m ' + year :
                    tieuchi === "ChooseQuarterAllYear" ?
                        'Nhu c???u th???c ph???m t???t c??? c??c n??m theo qu?? ' + quarter :
                    tieuchi === "ChooseMonthAllYear" ?
                        'Nhu c???u th???c ph???m t???t c??? c??c n??m theo th??ng ' + month : ''
                }
            </h5>
            <br/>
            <Container>
            {
                statisticTable && statisticTable.length > 0 ?
                masp != 0 && mancc != 0 ?
                tieuchi === "AllYear" ?
                <ComposedChart
                    className={styles.chartDetail}
                    width={700}
                    height={500}
                    data={statisticTable}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Nam" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="SLBanRa" fill="#FFCC00" barSize={30} />
                        <Line type="monotone" dataKey="SLBanRa" stroke="red" strokeWidth={4} activeDot={{ r: 8 }} />    
                </ComposedChart>
                : tieuchi === "ChooseYearAllQuarter" ?
                <ComposedChart
                    className={styles.chartDetail}
                    width={700}
                    height={500}
                    data={statisticTable}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Quy" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="SLBanRa" fill="#FFCC00" barSize={30} />
                        <Line type="monotone" dataKey="SLBanRa" stroke="red" strokeWidth={4} activeDot={{ r: 8 }} />    
                </ComposedChart>
                : tieuchi === "ChooseYearAllMonth" ?
                <ComposedChart
                    className={styles.chartDetail}
                    width={700}
                    height={500}
                    data={statisticTable}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Thang" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="SLBanRa" fill="#FFCC00" barSize={30} />
                        <Line type="monotone" dataKey="SLBanRa" stroke="red" strokeWidth={4} activeDot={{ r: 8 }} />    
                </ComposedChart>
                : tieuchi === "ChooseQuarterAllYear"  || tieuchi === "ChooseMonthAllYear" ?
                <ComposedChart
                    className={styles.chartDetail}
                    width={700}
                    height={500}
                    data={statisticTable}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Nam" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="SLBanRa" fill="#FFCC00" barSize={30} />
                        <Line type="monotone" dataKey="SLBanRa" stroke="red" strokeWidth={4} activeDot={{ r: 8 }} />    
                </ComposedChart>
                : <></>
                : <></>
                : <></>
            }
            </Container>
            <br/>
            <TextField
                className={styles.search}
                id="standard-textarea"
                label="Search..."
                placeholder="Enter keys..."
                multiline
                variant="standard"
                onChange={(e)=>{
                    setSearch(e.target.value);
                }}
            />
            <br/><br/>
            <ReactHTMLTableToExcel
                    className={styles.export}
                    id="test-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Showed Data as XLS"/>
            &nbsp;&nbsp;
            <ExportToExcel apiData={statisticTable} fileName={fileName}/> 
            <br/><br/>
            <div>
            { 
            statisticTable.length > 0 ? 
            <TableContainer component={Paper} >
                <Table className={styles.table} aria-label="simple table"id="table-to-xls">
                    <TableHead>
                        <TableRow>
                        {
                            Object.keys(statisticTable[0])
                            .map((colName, index) => {
                                if (index === Object.keys(statisticTable[0]).length - 1)
                                    return <TableCell align="left" onClick={()=>sorting(colName)} key={`column-${index + 1}`}><b>{colName}</b></TableCell>
                               return <TableCell align="left" onClick={()=>sorting(colName)} key={`column-${index + 1}`}><b>{colName}</b></TableCell>
                            })
                        }
                        </TableRow>
                    </TableHead>
                    <TableBody id="tdata">
                        {
                            statisticTable
                            .filter((val, index) =>
                            {
                                if (search === "")
                                    return val;
                                else if (Object.values(val).toString().includes(search))
                                    return val;
                            })
                            .filter(item =>
                            {
                                if (tensp !== "All" && tenncc !== "All")
                                {
                                    return (item.TenSP == tensp && item.TenNCC == tenncc)
                                }
                                else if (tensp != 0 && tenncc == 0)
                                {
                                    return (item.TenSP == tensp)
                                }
                                else if (tensp == 0 && tenncc != 0)
                                {
                                    return (item.TenNCC == tenncc)
                                }
                                else return true;
                            })
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((item, index) => {
                                const rowCells = [];
                                Object.values(item).forEach((val, index) => {
                                    rowCells.push(<TableCell>{val}</TableCell>)
                                })
                                return <TableRow key={`row-${index+1}`}>{rowCells}</TableRow>;
                            })
                        }
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={statisticTable.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[5, 10, 25, statisticTable.length]}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer> 
            : <></>
            }
            </div>
            <br/><br/> 
            </Container>
        </div>
    )
}