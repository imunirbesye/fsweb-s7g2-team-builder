import React, {useEffect, useState} from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const [takimUyeleri, setTakimUyeleri] = useState([{key: 1, isim: "Münir", rol: "yonetici", mail: "munirbesye@icloud.com"}]);

  let UyeKaydet = (gelenUye) => {
    let idNum = Math.floor(Math.random() * 100000); 

    for (let i = 0; i < takimUyeleri.length; i++) {
      if (takimUyeleri[i].key === idNum)
        idNum = Math.floor(Math.random() * 100000);
      else
        break;
    }
    console.log(idNum);
    gelenUye.key = idNum;

    setTakimUyeleri(takimUyeleri => [...takimUyeleri, gelenUye]);
  };

  useEffect(() => {
    console.log(takimUyeleri);
  }, [takimUyeleri])

  return (
    <div className="App">
      <Form kaydetFonksiyonu={UyeKaydet} />
    </div>
  );
}

export default App;
