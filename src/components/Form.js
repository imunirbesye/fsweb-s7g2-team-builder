import React, {useEffect, useState} from 'react';

function Form(props) {
    const [uye, setUye] = useState({key: '', isim: '', rol: '', mail: ''});
    const {kaydetFonksiyonu} = props;

    const changeHandler = (event) => {
        setUye({...uye, [event.target.name]: [event.target.value]});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        kaydetFonksiyonu(uye);
    };

    return (
        <div className='form'>
            <form>
                <input type='text' name='isim' onChange={event => changeHandler(event)} />
                <input type='text' name='rol' onChange={event => changeHandler(event)} />
                <input type='mail' name='mail' onChange={event => changeHandler(event)} />
                <button onClick={event => submitHandler(event)}>KAYDET</button>
            </form>
        </div>
    );
}

export default Form;