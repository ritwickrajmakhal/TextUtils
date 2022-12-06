import React from 'react'

export default function Alert(props) {
    const capitalize =(word)=>{
        return word[0].toUpperCase() + word.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)} {props.alert.msg}</strong>
        </div>
    )
}
