import React from 'react'
import { Grid, Button, Hidden } from '@material-ui/core'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
const HeaderTop = props => {
    return (
        <Grid className={props.className}>
            <Grid
                container
                alignItems="center"
                className="container headerTopMainWrapper">
                <Grid item sm={6} md={5} lg={5} xs={12}>
                    <ul className="d-flex accountLoginArea">
                        <li><RoomOutlinedIcon />Paraná 123 Piso 8 Of. 186 – CABA</li>
                    </ul>
                </Grid>
                <Grid item sm={6} md={4} lg={5} xs={12}>
                    <ul className="headerContact">
                        <li><PhoneOutlinedIcon />+5491158559722</li>
                        <li><QueryBuilderOutlinedIcon /> Lunes a Viernes - 09:00 a 15:30 hs.</li>
                    </ul>
                </Grid>
                <Hidden smDown>
                    <Grid item lg={2} md={3} xs={12} className="text-right">
                        <Button className="btnStyle btnOutlined btnRadius" component="a" href="/contact">Consulte gratis</Button>
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    )
}
export default HeaderTop