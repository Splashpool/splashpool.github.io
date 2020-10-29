import React from 'react';
import countryList from 'react-select-country-list';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Countries() {
    const classes = useStyles();

    const options = countryList().getData();
    console.log(options);

    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="country">Country</InputLabel>
                <Select
                    labelId="country"
                    id="country"
                    required
                    value={country}
                    onChange={handleChange}
                >
                    {options.map((item) => {
                        return (<MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>);
                    })}
                </Select>
            </FormControl>

        </div>
    )
}
