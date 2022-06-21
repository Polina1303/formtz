import React, { useState } from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios'
import { message } from 'antd'

function Post() {
  const [value, setValue] = useState('')
  const [pass, setPass] = useState('')



  async function submitHandler(e) {
    e.preventDefault()
    console.log(value, pass)
    try {
      const response = await axios.post('https://typ-back-end.herokuapp.com/api/login', { 'login': value, 'password': pass })
      const token = response.data.token
      localStorage.setItem('login', value)
      localStorage.setItem('password', pass)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const success = () => {
    if (pass === localStorage.getItem('password', pass) &&
      value === localStorage.getItem('login', value)) {
      return message.success('Success');
    }
  }
  return (
    <div className='enter'>
      <form onSubmit={submitHandler}>
        <Space direction="vertical">
          <label >Логин </label>
          <Input size="small" name='value' type='text' value={value} onChange={(e) => setValue(e.target.value)} />
          <label >Пароль   </label>
          <Input.Password size='small' name='password' type='password' value={pass} onChange={(e) => setPass(e.target.value)}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <button type='submit' onClick={success}>Войти</button>
        </Space>
      </form>
    </div>
  )
}


export default Post