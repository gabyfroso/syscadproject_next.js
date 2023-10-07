'use client';
import React, { useState, useEffect } from 'react'
import { MdSms } from 'react-icons/md';
import modSMS from '../../css/cssSMS.module.css';

function page() {
    const [boolSmS, setBoolSmS] = useState(true);
    const [boolNotif, setBoolNotif] = useState(true);

    const accionar = () => {
        setBoolSmS(!boolSmS)
    }
    const DelNotif = () => {
        setBoolNotif(false);
    }
    return (
        <>
            <div className={modSMS.divsms}>
                <button onClick={e => accionar()}>
                    {boolNotif && <div className={modSMS.MDi} />}
                    <MdSms className={modSMS.MD} />
                </button>

                {
                    boolSmS && <SMSPage accionar={accionar} deleteNotif={DelNotif} />
                }
            </div>
        </>
    )
}

function SMSPage({ accionar, deleteNotif }) {

    const notices = [
        {
            title: "IMPORTANTE",
            subtitle: "Registro",
            leyend: [
                "Para registrarte como usuario del Campus Virtual de la UTN-FRT,",
                "solicitá la creación de una cuenta enviando los siguientes datos a:",
                "campusvirtual@frt.utn.edu.ar",
                "",
                "1. Apellido y Nombre completo",
                "",
                "2. Nro. de legajo",
                "",
                "3. Nro. de DNI",
                "",
                "4. Localidad y país de origen",
                "",
                "5. Materia y Carrera",
                "",
                "En caso de no poder ingresar a tu cuenta envia un email al mismo correo específicando el inconveniente.", 
                "(Nota: esta cuenta no es igual a una cuenta institucional)"
            ]
        },
        {
            title: "Noticia 2",
            subtitle: "Y noticia",
            leyend: ["esta es una leyenda 2"]
        },
        {
            title: "Noticia 3",
            subtitle: "Z noticia",
            leyend: ["esta es una leyenda 3"]
        },
        {
            title: "Noticia 4",
            subtitle: "N noticia",
            leyend: ["esta es una leyenda 4"]
        },
        {
            title: "Noticia 5",
            subtitle: "Y noticia",
            leyend: ["esta es una leyenda 5"]
        },
        {
            title: "Noticia 6",
            subtitle: "Z noticia",
            leyend: ["esta es una leyenda 6"]
        },
        {
            title: "Noticia 7",
            subtitle: "N noticia",
            leyend: ["esta es una leyenda 7"]
        }
    ]

    const [NotificacionesArray, setNotificacionesArray] = useState(notices);


    return (
        <div className={modSMS.SMSPage}>

            <div className={modSMS.visible}>
                <h1 className={modSMS.visiblenotif}>Notificaciones</h1>
                {
                    NotificacionesArray.map((notice, index) => {
                        return (
                            <fieldset
                                className={modSMS.visiblefset}
                                key={index}
                                style={
                                    {
                                        animationDuration: `${index + 0.2}s`,
                                    }}
                            >
                                <legend> <h1>{notice.title}</h1> </legend>
                                <h2> {notice.subtitle} </h2>
                                <article>
                                    {notice.leyend.map((nt, indx) => (
                                        <p key={indx}>
                                            {nt} <br/>
                                        </p>
                                    ))}
                                </article>
                            </fieldset>
                        )
                    })
                }
            </div>

            <button className={modSMS.ExitButton} onClick={e => { accionar(); deleteNotif(); }} />
        </div>
    )
}

export default page