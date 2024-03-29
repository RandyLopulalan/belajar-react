import { useState } from "react"

const FunctionalComponent = ({nama}) =>{

    const [value, setValue] = useState(0)

    const handlePlus = () => {
        setValue(value + 1)
    }

    const handleMinus = () => {
        if(value > 0){
            setValue(value - 1)
        }
    }

    return(
        <div>
            <h1>komponen ini di buat dengan functional komponen</h1>
            <h2>hallo {nama}, selamat belajar </h2>
            <br />
            <button onClick={handleMinus}>-</button>
            <span>{` ${value} `}</span>
            <button onClick={handlePlus}>+</button>
            <br />
        </div>
    )
}

FunctionalComponent.defaultProps = {
    nama: 'user'
}
export default FunctionalComponent