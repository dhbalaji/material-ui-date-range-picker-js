import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {isSameDay} from 'date-fns';
import {makeStyles} from "@material-ui/core";
import * as classnames from "classnames";

const useStyles = makeStyles(() => ({
    root: {
        width: 300,
    },
    radioGroup: {
      padding: "10px 0 0 20px"
    }
}));

const isSameRange = (first, second) => {
    const {startDate: fStart, endDate: fEnd} = first;
    const {startDate: sStart, endDate: sEnd} = second;
    if (fStart && sStart && fEnd && sEnd) {
        return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd);
    }
    return false;
};

const DefinedRanges = ({
                           ranges,
                           setRange,
                           selectedRange
                       }) => {
    const [value, setValue] = React.useState(1);

    const handleChange = (event) => {
        const {value} = event.target
        setValue(value);
        const [rangeItem] = ranges.filter(item => item.key === value);
        setRange(rangeItem)
    };
    const classes = useStyles();

    return (
        <FormControl component="fieldset" className={classnames('ranges', classes.root)}>
           <RadioGroup aria-label="ranges" name="ranges" value={value} onChange={handleChange} className={classes.radioGroup}>
                {
                    ranges.map((range, id) =>
                        (<FormControlLabel control={<Radio color={"primary"}/>}
                                           label={range.label}
                                           key={id}
                                           value={range.key}
                                           className={isSameRange(range, selectedRange)
                                                   ? 'bold'
                                                   : 'normal'}/>))
                }
            </RadioGroup>
        </FormControl>
    );
}

export default DefinedRanges;