import AppInfo from '../app-info/app-info';
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';




function App(){

    const data=[
        {name:'Makka',salary:500,increase:true,id:1},
        {name:'Madina',salary:3000 ,increase:false,id:2},
        {name:'Alina',salary:800,increase:false,id:3}
    ]

    return(
        <div className="app">
            <AppInfo/>
            
            <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;