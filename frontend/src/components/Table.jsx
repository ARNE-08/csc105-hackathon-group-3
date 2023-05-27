import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, max, min, information) {
  return {
    name,
    max,
    min,
    information,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.max}</TableCell>
        <TableCell align="right">{row.min}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Information
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell align="right">Price / kg</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.information.map((informationRow) => (
                    <TableRow key={informationRow.Name}>
                      <TableCell component="th" scope="row">
                        {informationRow.Name}
                      </TableCell>
                      <TableCell align="right">{informationRow.pricePerKg}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    information: PropTypes.arrayOf(
      PropTypes.shape({
        pricePerKg: PropTypes.string.isRequired,
        Name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData('Paper', 2.30, 0.60, [
    {
      Name: 'White/Black',
      pricePerKg: '2.30',
    },
    {
      Name: 'Book',
      pricePerKg: '0.60',
    },
  ]),
  createData('Steel', 2.80, 5.40, [
    {
      Name: 'Metal Sheet',
      pricePerKg: '2.80',
    },
    {
      Name: 'Wire Rope',
      pricePerKg: '5.40',
    },
  ]),
  createData('Glass', 0.70, 2.80, [
    {
      Name: 'Beer Bottle',
      pricePerKg: '0.70',
    },
    {
      Name: 'Broken Glass(Green)',
      pricePerKg: '2.10',
    },
    {
      Name: 'Broken Glass(Clear)',
      pricePerKg: '2.80',
    },
  ]),
  createData('Plastic', 5.00, 0.50, [
    {
      Name: 'PET',
      pricePerKg: '0.50',
    },
    {
      Name: 'Foam',
      pricePerKg: '1.50',
    },
    {
      Name: 'plastic PE',
      pricePerKg: '1.30',
    },
    {
      Name: 'HDPE',
      pricePerKg: '5.00',
    },
  ]),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: '15px' }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Categories</TableCell>
            <TableCell align="right">Max-price</TableCell>
            <TableCell align="right">Min-price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
