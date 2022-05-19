import {React, useState, useEffect} from 'react';
import { Table, Space } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: 'Nom',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Prenom',
    dataIndex: 'surname',
    key: 'surname',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
      title: 'date de Naissance',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a> modifier </a>
        <a>Supprimer</a>
      </Space>
    ),
  },
];

const data = [
    {
        key : '1',
        name: 'hery',
        surname: 'Nomenjanahary',
        email : "mon@gmail.com",
        dateOfBirth: "11/07/1999"
    }
]

export default function Students(){
    //get all students from API
    const [students, setstudents] = useState('')
    const url = 'http://localhost:5000/students'
    useEffect(()=>{
        getAllStudents()
    },[]);
    const getAllStudents = () => {
        axios.get(`${url}`)
            .then((response) => {
                
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <Table columns={columns} dataSource={data} />
    )
}