import React from 'react'
import { Show, SimpleShowLayout, TextField, SimpleForm } from 'react-admin'



const Title = ({ record }) => {
  return <span>Пользователь "{record.name}"</span>
}

export const UsersShow = (props) => (
  <Show {...props} title={<Title />}>
    <SimpleShowLayout>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Название" />
      
    </SimpleShowLayout>
  </Show>
)
