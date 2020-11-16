import React from "react";
import { TextInput, Edit, SimpleForm, useDataProvider, FormDataConsumer } from "react-admin";

import SelectWithButton from "./SelectWithButton";

export const UsersEdit = (props) => {
  const dataProvider = useDataProvider();

  return (
    <Edit title="Команды" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" label="Id" />
        <TextInput source="name" label="Название" />
        <SelectWithButton
          variant="standard"
          allowEmpty
          optionText="name"
          source="managerZone"
          reference="zones"
        />
      </SimpleForm>
    </Edit>
  );
};
