import React from 'react';
import {
    Paper,
    Grid,
    Typography,
    Divider,
    makeStyles,
} from '@material-ui/core';
import {differenceInCalendarMonths} from 'date-fns';
import Month from './Month';
import DefinedRanges from './DefinedRanges';
import {MARKERS} from './DateRangePicker';

const useStyles = makeStyles((theme) => ({
    header: {
        padding: '20px 10px',
    },
    headerItem: {
        flex: 1,
        padding:"0 0 0 25px"
    },
    divider: {
        borderLeft: `1px solid ${theme.palette.action.hover}`,
        marginBottom: 20,
    },
}));

const Menu = (props) => {
    const classes = useStyles();

    const {
        ranges,
        dateRange,
        minDate,
        maxDate,
        firstMonth,
        setFirstMonth,
        secondMonth,
        setSecondMonth,
        setDateRange,
        helpers,
        handlers,
    } = props;

    const canNavigateCloser = differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
    const commonProps = {
        dateRange, minDate, maxDate, helpers, handlers,
    };
    return (
        <Paper elevation={0} square>
            <Grid container direction="row" wrap="nowrap">
                <Grid>
                    <Grid container className={classes.header} alignItems="center">
                        <Grid item className={classes.headerItem} sm={4}>
                            <Typography variant="subtitle1">
                                Start Date
                            </Typography>
                        </Grid>
                        <Grid item className={classes.headerItem} sm={4}>
                            <Typography variant="subtitle1">
                                End Date
                            </Typography>
                        </Grid>
                        <Grid item className={classes.headerItem} sm={4}>
                            <Typography variant="subtitle1">
                                Predefined Ranges
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid container direction="row" justify="center" wrap="nowrap">
                        <Grid item>
                            <Month
                                {...commonProps}
                                value={firstMonth}
                                setValue={setFirstMonth}
                                navState={[true, canNavigateCloser]}
                                marker={MARKERS.FIRST_MONTH}
                            />
                        </Grid>
                        <Grid item>
                            <Month
                                {...commonProps}
                                value={secondMonth}
                                setValue={setSecondMonth}
                                navState={[canNavigateCloser, true]}
                                marker={MARKERS.SECOND_MONTH}
                            />
                        </Grid>
                        <Grid item>
                            <DefinedRanges
                                selectedRange={dateRange}
                                ranges={ranges}
                                setRange={setDateRange}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <div className={classes.divider}/>
            </Grid>
        </Paper>
    );
};

export default Menu;