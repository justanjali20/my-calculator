import React, { Fragment, useState } from "react";
import { Button, Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from "./Employees";
import {Link, useNavigate} from 'react-router-dom'

function Home() {
    let history = useNavigate();

const handleEdit = (id, name, age) =>{
    localStorage.setItem('name', name)
    localStorage.setItem('age', age)
    localStorage.setItem('id', id)
}   
const handleDelete = (id)=> {
    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);

    Employees.splice(index,1); 

    history('/');
}  
    return (
        <Fragment>
            <div style={{ margin: "10rem" }} >
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                                ?
                                Employees.map((item)  =>{
                                    return (
                                        <tr>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.age}
                                            </td> 
                                            <td>
                                                <Link to={'/edit'}>
                                                <Button onClick={()=>handleEdit(item.id, item.name, item.age)}>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={()=>handleDelete(item.id)}>DELETE</Button> 
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No Data available"
}
                    </tbody>
                </Table>
                <br />
                <br />
                <Link className="d-grid gap-2" to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;