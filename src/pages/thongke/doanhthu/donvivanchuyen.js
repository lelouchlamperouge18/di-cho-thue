import styles from '../../../styles/thongke/DoanhThu.module.css'
import Head from 'next/head'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Typography from '@material-ui/core/Typography';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart, 
    AreaChart,
  } from 'recharts';


export default function DoanhThuDVVC(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => { setIsOpen(!isOpen) }

    const [year, setYear] = useState(0);
    const changeYear = (newYear) => { setYear(newYear) }

    const [quarter, setQuarter] = useState(0);
    const changeQuarter = (newQuarter) => { setQuarter(newQuarter) }

    const [month, setMonth] = useState(0);
    const changeMonth = (newMonth) => { setMonth(newMonth) }

    const [combobox_Year, setcombobox_Year] = useState([]);
    const [data_chart, setdata_chart] = useState([]);
    useEffect(() =>
    {
        fetch('https://localhost:44357/api/ThuNhapDVVC_Year')
        .then(response => response.json())
        .then(result => setcombobox_Year(result))
        .catch(error => console.log(error));

        fetch('https://localhost:44357/api/ThuNhapDVVC/ALL/1')
        .then(response => response.json())
        .then(result => setdata_chart(result))
        .catch(error => console.log(error));
    }, [])



    const [tieuchi, setTieuChi] = useState("AllYear");
    const changeTieuChi = (newTieuChi) => { setTieuChi(newTieuChi) }

    const [statisticTable, setStatisticTable] = useState([]);
    function ShowData ()
    {
        if (tieuchi === "AllYear")
        {
            fetch('https://localhost:44357/api/ThuNhapDVVC/1')
            .then(res => res.json())
            .then(res => setStatisticTable(res));
        }
        else if (tieuchi === "ChooseYearAllQuarter")
        {
            fetch('https://localhost:44357/api/ThuNhapDVVC/1/ChooseYearAllQuarter/' + year)
            .then(res => res.json())
            .then(res => setStatisticTable(res));
        }
        else if (tieuchi === "ChooseYearAllMonth")
        {
            fetch('https://localhost:44357/api/ThuNhapDVVC/1/ChooseYearAllMonth/' + year)
            .then(res => res.json())
            .then(res => setStatisticTable(res));
        }
        else if (tieuchi === "ChooseQuarterAllYear")
        {
            fetch('https://localhost:44357/api/ThuNhapDVVC/1/ChooseQuarterAllYear/' + quarter)
            .then(res => res.json())
            .then(res => setStatisticTable(res));
        }
        else if (tieuchi === "ChooseMonthAllYear")
        {
            fetch('https://localhost:44357/api/ThuNhapDVVC/1/ChooseMonthAllYear/' + month)
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
        if (col === "TongDoanhThu")
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
 
    const [search, setSearch] = useState("");

    return (
        <div className="DoanhThuDVVC">
            <Head>
                <title>Th???ng k?? doanh thu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            
            <Container>
            <h1 class={styles.title}>
                TH???NG K?? DOANH THU <br/> CHO ????N V??? V???N CHUY???N
            </h1>
            <h5 className={styles.nameChartMain}>
                Doanh thu c??c th??ng trong n??m v???a qua
            </h5>
            {
                data_chart && data_chart.length > 0 ?
                <ComposedChart
                    className={styles.chartMain}
                    width={800} 
                    height={400}
                    data={data_chart}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                    >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="Thang" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="TongDoanhThu" barSize={30} fill="#000099" />
                    <Line type="monotone" dataKey="TongDoanhThu" strokeWidth={3} stroke="#ff7300" />
                </ComposedChart>
                : <></>
            }
            
            <FormControl component="fieldset">
                <FormLabel component="legend">C??c ti??u ch?? th???ng k??:</FormLabel>
                <RadioGroup name="radio-buttons-group" defaultValue="AllYear">
                    <FormControlLabel value="AllYear" 
                                    onChange={(event)=> changeTieuChi(event.target.value)} 
                                    control={<Radio />} 
                                    label="Doanh thu t???t c??? c??c n??m"/>
                    <FormControlLabel value="ChooseYearAllQuarter" 
                                    onChange={(event)=> changeTieuChi(event.target.value)} 
                                    control={<Radio />} 
                                    label="Doanh thu t???t c??? c??c qu?? trong n??m"/>
                    <FormControlLabel value="ChooseYearAllMonth" 
                                    onChange={(event)=> changeTieuChi(event.target.value)} 
                                    control={<Radio />} 
                                    label="Doanh thu t???t c??? c??c th??ng trong n??m"/>
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
                                    onChange={(event)=> changeTieuChi(event.target.value)} 
                                    control={<Radio />} 
                                    label="Doanh thu t???t c??? c??c n??m theo qu??"/>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select id="quarter-dropdown" 
                                    onChange={(event)=>changeQuarter(event.target.value)}>
                            <MenuItem value="1" >Q??y 1 (th??ng 1 ?????n th??ng 3)</MenuItem>
                            <MenuItem value="2">Q??y 2 (th??ng 4 ?????n th??ng 6)</MenuItem>
                            <MenuItem value="3">Q??y 3 (th??ng 7 ?????n th??ng 9)</MenuItem>
                            <MenuItem value="4">Q??y 4 (th??ng 10 ?????n th??ng 12)</MenuItem>
                        </Select>
                        <FormHelperText>Ch???n qu??</FormHelperText>
                    </FormControl>
                    <FormControlLabel value="ChooseMonthAllYear" 
                                onChange={(event)=> changeTieuChi(event.target.value)} 
                                control={<Radio />} label="Doanh thu t???t c??? c??c n??m theo th??ng"/>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select id="year-dropdown" 
                                onChange={(event) => changeMonth(event.target.value)}>
                            <MenuItem value="1" >Th??ng 1</MenuItem>
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
            &emsp;&emsp;
            <br/><br/>
            <Button variant="contained" className={styles.select}
                    onClick={ShowData}>
                Xem th???ng k?? 
            </Button>
            <br/><br/>
            <Typography className={styles.text} variant="h7">
                {
                    'All Rows: ' + statisticTable.length
                }
            </Typography>
            <br/><hr/>
            <h5 className={styles.titleStatistic}>
                {
                    tieuchi === "AllYear" ? 
                        'Th???ng k?? doanh thu t???t c??? c??c n??m' : 
                    tieuchi === "ChooseYearAllQuarter" ? 
                        'Th???ng k?? doanh thu t???t c??? c??c qu?? trong n??m ' + year :
                    tieuchi === "ChooseYearAllMonth" ?
                        'Th???ng k?? doanh thu t???t c??? c??c th??ng trong n??m ' + year :
                    tieuchi === "ChooseQuarterAllYear" ?
                        'Th???ng k?? doanh thu t???t c??? c??c n??m theo qu?? ' + quarter :
                    tieuchi === "ChooseMonthAllYear" ?
                        'Th???ng k?? doanh thu t???t c??? c??c n??m theo th??ng ' + month : ''
                }
            </h5>
            <Container>
            {
            statisticTable && statisticTable.length > 0 ?
            <ComposedChart
                className={styles.chartDetail}
                width={700}
                height={400}
                data={statisticTable}
                syncId="anyId"
                margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                {
                    tieuchi === "AllYear" ?
                        <XAxis dataKey="Nam" /> : 
                    tieuchi === "ChooseYearAllQuarter" ?
                        <XAxis dataKey="Quy" /> :
                    tieuchi === "ChooseYearAllMonth" ?
                        <XAxis dataKey="Thang" /> :
                    tieuchi === "ChooseQuarterAllYear" || 
                    tieuchi === "ChooseMonthAllYear" ?
                        <XAxis dataKey="Nam" /> : <></>
                }
                
                <YAxis />
                <Tooltip />
                <Bar dataKey="TongDoanhThu" barSize={30} fill="	#00CC99" />
                <Line type="monotone" dataKey="TongDoanhThu" strokeWidth={3} stroke="red" fill="#82ca9d" />
            </ComposedChart>
            : <></>
            }
            </Container>
            <br/>
            <TextField
                className={styles.search}
                id="standard-textarea"
                label="   Search..."
                placeholder="Enter keys..."
                multiline
                variant="standard"
                onChange={(e)=>{
                    setSearch(e.target.value);
                }}
            />
            <br/>
            <ReactHTMLTableToExcel
                    className={styles.export}
                    id="test-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export as XLS"/>
            <br/><br/>
            
            

            <div className={styles.tableStyle}>
            { 
            statisticTable.length > 0 ? 
            <TableContainer component={Paper} >
                <Table className={styles.table} aria-label="simple table" id="table-to-xls">
                    <TableHead>
                        <TableRow>
                        {
                            Object.keys(statisticTable[0]).map((colName, index) => {
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
                            .filter((val, index) =>{
                                if (search === "")
                                    return val;
                                else if (Object.values(val).toString().includes(search))
                                    return val;
                            })
                            .map((item, index) => {
                                const rowCells = [];
                                Object.values(item).forEach((val, index) => {
                                    if (index === Object.values(item).length - 1)
                                        rowCells.push(<TableCell>{val.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
                                        </TableCell>)
                                    else
                                        rowCells.push(<TableCell>{val}</TableCell>)
                                })
                                return <TableRow key={`row-${index+1}`}>{rowCells}</TableRow>;
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer> 
            : <></>
            }
            </div>
            <br/>
            <br/>  
            </Container>

        </div>
    )
}