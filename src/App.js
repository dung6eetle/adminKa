import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {UsersShow} from './resourses/UsersShow'
import {UsersList} from './resourses/UsersList'
import { UsersEdit } from "./resourses/UsersEdit";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UsersList} show={UsersShow} edit={UsersEdit}/>
  </Admin>
);

export default App;
