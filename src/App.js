import React, { useState } from "react";


const App = () => {
  const [fullName, setFullName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым!')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Phone Number:', number);
    console.log('Email:', email);
    alert('Регистрация успешно завершена!');
  };


  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный имейл')
    } else {
      setEmailError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break;
    }
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Вход</h1>
        <input
          onChange={(e) => setFullName(e.target.value)}
          name="text" type="text" placeholder="Введите свое ФИО"></input><br />
        <input
          onChange={(e) => setNumber(e.target.value)}
          name="number" type="number" placeholder="Введите свое номер"></input><br />
        <input
          onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="email" placeholder="Введите свое email"></input>
        {(emailDirty && emailError) && <div className="email-error">{emailError}</div>}
        <button type="submit">Регистрация</button>
      </form>
    </div>
  )
}
export default App