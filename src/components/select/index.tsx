import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material'
import React, {useState} from 'react'

const CustomSelect = () => {
  const [selected, setSelected] = useState<any>([])
  const options: string[] = ['최근순', '추전순']

  const isAllSelected = options.length > 0 && selected.length === options.length

  const handleChangeSelect = (event: any) => {
    const value = event.target.value
    if (value[value.length - 1] === 'all') {
      setSelected(selected.length === options.length ? [] : options)
      return
    }
    setSelected(value)
  }
  return (
    <>
      <FormControl
        style={{
          width: '130px',
        }}
      >
        <InputLabel id='mutiple-select-label'>모두 메이어</InputLabel>
        <Select
          style={{borderRadius: '30px', height: '40px', padding: '0 0.5rem'}}
          labelId='mutiple-select-label'
          multiple
          value={selected}
          onChange={handleChangeSelect}
          renderValue={(selected) => selected.join(', ')}
          label='모두 메이어'
        >
          {/* <MenuItem value='all'>
            <ListItemIcon>
              <Checkbox
                checked={isAllSelected}
                indeterminate={
                  selected.length > 0 && selected.length < options.length
                }
              />
            </ListItemIcon>
            <ListItemText primary='All Media' />
          </MenuItem> */}
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              <ListItemIcon>
                <Checkbox checked={selected.indexOf(option) > -1} />
              </ListItemIcon>
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default CustomSelect
