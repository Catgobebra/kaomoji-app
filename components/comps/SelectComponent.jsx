import React from "react";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {useDispatch } from "react-redux";
import { setSubcategory } from "../../redux-state/reducers/sections";

const SelectComponent = (props) => {

    const {name, emojiPack} = props;

    const dispatch = useDispatch()

    const handleRadioChange = (event) => {
     dispatch(setSubcategory(event.target.value));
    };

    return (
        <>
        <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">{name}</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleRadioChange}
        >
          { emojiPack.map((item, index) => {
                return ( 
                    <div key={index}>
                        <FormControlLabel style={{'text-transform' : 'capitalize'}} value={item} control={<Radio />} label={item} />
                    </div>
                )
            }) 
            }
        </RadioGroup>
        </FormControl>
        </>
    )
}

export default SelectComponent