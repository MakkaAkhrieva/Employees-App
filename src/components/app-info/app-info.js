import './app-info.css';

const AppInfo =({increased,employers})=>{
    return(
       <div className="app-info">
           <h1>Учет сотруднников в компании N:{employers}</h1>
           <h2>Общее число сотрудников: {increased}</h2>
           <h2>Премию получат:</h2>
       </div> 
    )
}

export default AppInfo;