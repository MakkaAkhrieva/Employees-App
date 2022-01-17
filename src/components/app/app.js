import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


class App extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[
               {name:'Makka',salary:500,increase:true,rise:true,id:1},
               {name:'Madina',salary:3000 ,increase:false,rise:false,id:2},
               {name:'Alina',salary:800,increase:false,rise:false,id:3} 
            ]
        }
        this.maxId=4;
    }

    deleteItem =(id)=>{
        this.setState(({data})=>{
          /*   const index=data.findIndex(elem=>elem.id==id); */
            
          /*   const before=data.slice(0,index);
            const after=data.slice(index+1);
            const newArr=[...before, ...after]; */



            return{
                data:data.filter(item=>item.id!==id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise:false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease=(id)=>{
        //1 вариант
/*         this.setState(({data})=>{
            const index=data.findIndex(elem=>elem.id==id);

            const old=data[index];
            const newItem={...old,increase: !old.increase};
            const newArr=[...data.slice(0,index),newItem,...data.slice(index+1)]

            return{
                data:newArr
            }

        }) */
        //2 вариант
        this.setState(({data})=>({
            data: data.map(item=>{
                if(item.id==id){
                    return{...item,increase: !item.increase}
                }
                return item; 
            })//массив объектов с новым измененным
        }))
    }

    onToggleRise=(id)=>{
        this.setState(({data})=>({
            data:data.map(item=>{
                if(item.id==id){
                    return{...item,rise:!item.rise}
                }
                return item;
            })
        }))
    }
    render(){
        const employees=this.state.data.length;
        const increased=this.state.data.filter(item=>item.increase).length;
        return(
            <div className="app">
                <AppInfo employers={employees} increased={increased}/>
                
                <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                </div>
                <EmployersList
                 data={this.state.data}
                 onDelete={this.deleteItem}
                 onToggleIncrease={this.onToggleIncrease}
                 onToggleRise={this.onToggleRise}/>
                <EmployersAddForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;