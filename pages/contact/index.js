import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import Head from 'next/head'
import Breadcumb from '../../components/Breadcumb'
import NewsLetter from '../../components/Newsletter'
import Form from '../../components/Form'

const breadcumbMenu = [
    { name: 'Inicio', route: '/' },
    { name: 'Contacto', },
]

const Contact = () => {
    return (
        <Fragment>
            <Head>
                <title>Contacto</title>
            </Head>
            <Breadcumb
                className="breadcumbArea"
                title="Contact"
                breadcumbMenu={breadcumbMenu}
                background="/images/breadcumb/1.jpg"
            />

            <Grid className="contactusPageArea">
                <Grid container spacing={4} className="container">
                    <Grid item md={7} xs={12}>
                        <Grid className="contactUsInfo">
                            <h3>Contáctenos</h3>
                            <p>Horario de atención línea fija. Lunes a viernes de 9 a 15:30 hs.
                                Por WhatsApp puede enviarnos mensajes las 24 hs. y se le responderá a la brevedad.
                                </p>
                            <h4>Dirección</h4>
                            <span>Paraná 123 Piso 8 Of. 186 – CABA</span>
                            <h4>Teléfono</h4>
                            <span>+549-11-5855-9722</span>
                            <h4>Email</h4>
                            <span>maribel@delpinocardenas.com.ar</span>
                            <span>luzmariela@delpinocardenas.com.ar</span>
                        </Grid>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Grid className="contactUSForm">
                            <h3>Formulario de contacto</h3>
                            <Form
                                addressInfo={true}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <NewsLetter />
        </Fragment>
    )
}
export default Contact