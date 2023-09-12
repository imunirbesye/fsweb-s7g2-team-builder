import React, {useEffect, useState} from 'react';

const initialData = {
    key: '',
    isim: '',
    rol: '',
    email: ''
};

function Form(props) {
    const [uye, setUye] = useState(initialData);
    const {kaydetFonksiyonu} = props;

    const changeHandler = (event) => {
        const {name, value, type} = event.target;

        setUye({...uye, [name]: value});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        kaydetFonksiyonu(uye);
        setUye(initialData);        
    };

    return (
        <div className='form'>
            <form onSubmit={event => submitHandler(event)}>
                <input type='text' name='isim' placeholder='İsim' value={uye.isim} onChange={event => changeHandler(event)} />
                <input type='text' name='rol' placeholder='Rol' value={uye.rol} onChange={event => changeHandler(event)} />
                <input type='mail' name='email' placeholder='E-Mail' value={uye.email} onChange={event => changeHandler(event)} />
                <button>KAYDET</button>
            </form>
        </div>
    );
}

export default Form;