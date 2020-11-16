import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DeleteButton,
  EditButton
} from 'react-admin'


export const UsersList = (props) => (
  <List
    {...props}
    title={'Команды'}
    exporter={false}
  >
    <Datagrid rowClick="edit">
      <TextField source="id" label="Id" />
      <TextField source="name" label="Имя" />
      <TextField source="username" label="Название"/>
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)
