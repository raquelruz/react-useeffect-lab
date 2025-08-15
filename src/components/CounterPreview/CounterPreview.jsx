import { useEffect, useState } from "react"
import './CounterPreview.css'

export const CounterPreview = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("El contador ahora vale:", count)
    }, [count]);

    return (
        <div className="counterpreview-container">
            <p>Contador actual: {count}</p>
            <button onClick={() => setCount(count + 1)}>Sumar</button>
			<button onClick={() => setCount(count - 1)}>Restar</button>
			<button onClick={() => setCount(0)}>Volver a iniciar</button>
        </div>
    )
}