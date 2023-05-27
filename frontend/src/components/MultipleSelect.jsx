import * as React from 'react';
import { Button } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { AxiosError } from "axios"
import Axios from '../share/AxiosInstance'
import Cookies from "js-cookie"
import GlobalContext from '../share/GlobalContext';
import StepContext from '../share/StepContext';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const wastes = ['paper', 'steel', 'glass', 'plastic'];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState('');
  const {status, setStatus} = React.useContext(GlobalContext);
  const {steps, setSteps} = React.useContext(StepContext);
  const {setWaste} = React.useContext(StepContext);

  // console.log(personName)
  const handleSelect = async (selectedValue) => {
    try {
      const userToken = Cookies.get('UserToken');
      const response = await Axios.get('/step', {
        params: {
          category: selectedValue,
        },
        headers: { Authorization: `Bearer ${userToken}` },
      });
      if (response.data.success) {
        setSteps(response.data.data);
      } else {
        setStatus({
          msg: response.data.error,
          severity: 'error',
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return setStatus({
            msg: error.response.data.error,
            severity: 'error',
          });
        }
      }
      return setStatus({
        msg: error.message,
        severity: 'error',
      });
    }
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setPersonName(selectedValue);
    setWaste(selectedValue)
    handleSelect(selectedValue);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, backgroundColor: 'white', borderRadius: '5px' }}>
        <InputLabel id="demo-multiple-name-label">Waste Types</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleSelectChange}
          input={
            <OutlinedInput
              label="Name"
              sx={{
                color: 'black',
                '&.MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
            />
          }
          MenuProps={MenuProps}
        >
          {wastes.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* <Button sx={{ height: "70px", width: "70px", padding: "0px" }}>
        <div class="nextIcon">
          <ArrowCircleRightIcon />
        </div>
      </Button> */}
    </div>
  );
}
