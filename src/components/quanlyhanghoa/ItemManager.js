import React, {useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import axios from "axios";
import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  selectTableCell: {
    width: 60
  },
  tableCell: {
    width: 130,
    height: 40
  },
  input: {
    width: 130,
    height: 40
  }
}));



const createData = (maSp, tensanpham, tennsx, loai, dvTinh, gia, soluong, hsd) => ({
  maSp,
  tensanpham,
  tennsx,
  loai,
  dvTinh,
  gia,
  soluong,
  hsd: hsd.split('T')[0],
  isEditMode: false
});

const mapData = (results) => {
	const data = [];
	results.forEach((item) => {
	  const newItem = createData(item.maSp, item.tensanpham, item.tennsx, item.loai, item.dvTinh, item.gia, item.soluong, item.hsd);
	  data.push(newItem);
	});
	return data;
  };

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={e => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

function ItemManager() {
  const [rows, setRows] = useState([])
  const [previous, setPrevious] = useState({})
  const classes = useStyles();


  
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`https://localhost:44357/api/sanpham/ncc/1`);
        const results = await res.json();
        const data = mapData(results);
        return data;
      } catch (error) {}
    }
    const result = getData().then(data => setRows(data))
  }, []);


  const onToggleEditMode = id => {
    setRows(state => {
      return rows.map(row => {
        if (row.maSp === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
	const updateRow = rows.find(row => row.maSp === id);
	delete updateRow.isEditMode;
	axios
	.put(`https://localhost:44357/api/sanpham/ncc/1/${id}`, updateRow)
	.catch((err) => console.log(err));
  };

  const onChange = (e, row) => {
    if (!previous[row.maSp]) {
      setPrevious(state => ({ ...state, [row.maSp]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { maSp } = row;
    const newRows = rows.map(row => {
      if (row.maSp === maSp) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };


  const removeFromCart = (id) => {
    const filter = rows.filter((item) => item.maSp != id);
    axios.delete(`https://localhost:44357/api/sanpham/ncc/1/${id}`);
    setRows(filter);
  };


  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <caption>Quản lý sản phẩm cửa hàng</caption>
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left"><b>Tên sản phẩm</b></TableCell>
            <TableCell align="left"><b>Tên nhà sản xuất</b></TableCell>
            <TableCell align="left"><b>Loại</b></TableCell>
            <TableCell align="left"><b>Đơn vị tính</b></TableCell>
            <TableCell align="left"><b>Giá</b></TableCell>
            <TableCell align="left"><b>Số lượng</b></TableCell>
            <TableCell align="left"><b>Hạn sử dụng</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.length > 0
                ? rows.map(row => (
            <TableRow key={row.maSp}>
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleEditMode(row.maSp)}
                    >
                      <DoneIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => onToggleEditMode(row.maSp)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
			  <TableCell className={classes.tableCell} align="left">{row.tensanpham}</TableCell>
              <CustomTableCell {...{ row, name: "tennsx", onChange }} />
              <TableCell className={classes.tableCell} align="left">{row.loai}</TableCell>
              <TableCell className={classes.tableCell} align="left">{row.dvTinh}</TableCell>
              <CustomTableCell {...{ row, name: "gia", onChange }} />
              <CustomTableCell {...{ row, name: "soluong", onChange }} />
              <CustomTableCell {...{ row, name: "hsd", onChange }} />
			  <TableCell className={classes.tableCell} align="left">
				<Button variant="outlined" color="error" onClick={() => removeFromCart(row.maSp)} >
				Xóa
				</Button>
			</TableCell>
            </TableRow>
          )) : ''}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ItemManager;