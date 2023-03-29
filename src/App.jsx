import React from "react";
import { FilteredList } from "./FilteredList";

export class App extends React.Component{
    render(){
        return <FilteredList items={[{id: "foo", age: 16}, {id: "foo2", age: 35}, {id: "foo3", age:12}, {id: "foo4", age:53}, {id: "foo5", age:22}]}/>
    }
}