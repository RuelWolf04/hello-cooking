import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './login.css'

const Login = () => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [data, setData] = useState([])


  const handleLogin = (e) => {
    e.preventDefault();
    // let getData = new FormData();
    // getData.append('userEmail', userEmail)
    // getData.append('userPassword', userPassword)

    // axios({
    //   method: 'POST',
    //   url: 'http://localhost/WD11_PHP/HC_db/hello_cooking_db.php',
    //   data: getData,
    //   config: { headers: { 'Content-Type': 'multipart/form-data' } }
    // }).then(function (response) {
    //   const url = 'http://localhost/WD11_PHP/Ex40_db/db.php'
    //   axios.get(url).then((response) => {
    //     setData(response.data)
    //   })
    // }).catch(function (response) {
    //   console.log(response)
    // })

    axios.post('http://localhost/WD11_PHP/HC_db/hello_cooking_db.php', {
      user_email: userEmail,
      user_password: userPassword
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    const url = 'http://localhost/WD11_PHP/HC_db/hello_cooking_db.php'
    axios.get(url).then((response) => {
      console.log(response.data)
    })
  }, [])

  return (
    <div className='form'>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <div className="userInput">
          <label htmlFor="userEmail">Email</label>
          <input type="email" name="email" id="userEmail" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
        </div>
        <div className="userInput">
          <label htmlFor="userPassword">Password</label>
          <input type="password" name="password" id="userPassword" value={userPassword} onChange={e => setUserPassword(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {/* <h1>{userEmail}</h1> */}

    </div>
  )
}

export default Login