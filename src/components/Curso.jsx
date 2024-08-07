import React, {useState} from "react";
import './Curso.css'

const Curses = () => {
    const [curso, setCurso] = useState('')
    const setCursos = (event) => {
        setCurso(event.target.curso)
    }

    return(
        <div className="DCurso">
            <br/><label>Curso</label><br />
            <select inputMode="text" value={curso} onChange={setCursos}>
                <option value="" disabled>Selecione Seu Curso</option>
                <option value="option1">Matemática</option>
                <option value="option2">Letras</option>
                <option value="option3">Geografia</option>
            </select>
        </div>
    )
}

export default Curses;