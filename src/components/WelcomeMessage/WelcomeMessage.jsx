import { useEffect, useState } from "react"
import './WelcomeMessage.css'

export const WelcomeMessage = () => {
    const [hourDate, setHourDate] = useState("");

    useEffect(() => {
        const now = new Date();
        const format = now.toLocaleString(); // toLocaleString sirve para convertir el formato de la fecha/hora según el país/idioma especificado en mi configuración local.
        setHourDate(format);
    }, []);

    return (
        <div className="welcome-container">
            <h2>¡Bienvenido!</h2>
            <p>{hourDate}</p>
        </div>
    )
}