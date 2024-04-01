import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { v4 as uuid } from 'uuid'
import {  useNavigate } from 'react-router-dom'

function Add() {
    const handleSubmit= (e)=>{
    e.preventDefault()
    const id = uuid();
    let uniqueId = id.slice(0,8);
    let a = name;
    let b = age;
    Employees.push({id: uniqueId, name : a, age : b})
    history("/");
    }
    const [name, setName] = useState('')
    const [age, setage] = useState('')
    let history = useNavigate();
    return (
        <div>
            <Form className='d-grid gap-2' style={{ margin: "15rem" }}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter Name' required onChange={(e) => setName(e.target.value)} >
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formAge'>
                    <Form.Control type='text' placeholder='Enter Age' required onChange={(e) => setage(e.target.value)} >
                    </Form.Control>
                </Form.Group>
                <Button type='Submit' onClick={(e) => handleSubmit(e)}>Submit</Button>
            </Form>
        </div>
    )
}

export default Add