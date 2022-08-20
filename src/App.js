import {useState} from 'react'
import './App.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {
  const [users, setUsers] = useState([
    {id:101, name:"Aram", surname:"Hakobyan", salary:200000},
    {id:102, name:"Lusine", surname:"Melqonyan", salary:250000},
    {id:103, name:"Narek", surname:"Harutyunyan", salary:175000},
  ])
  const handleSalaryUp = id => {
    let person = users.find(elm => elm.id === id)
    if(person){
      person.salary += 50000
    }
    setUsers([...users])

    //ավելի կարճ գրելաձև
    // setUsers([...users.map(elm => elm.id !== id ? elm : {...elm, salary:elm.salary+50000})])
  }
  const handleSalaryDown = id => {
    let person = users.find(elm => elm.id === id)
    if(person && person.salary >= 50000){
      person.salary -= 50000
    }
    setUsers([...users])

    //ավելի կարճ գրելաձև
    // setUsers([...users.map(elm => elm.id !== id ? elm : {...elm, salary: elm.salary>=50000 ? elm.salary-50000:elm.salary})])
  }
  const handleDelete = id => {
    setUsers([...users.filter(elm => elm.id !== id)])
  }
  const handleNewUser = obj => {
    setUsers([...users, {...obj, id:Date.now()}])
  }
  return (
    <div className="App">
      <UserList 
        users={users}
        onDelete = {handleDelete}
        onSalaryUp = {handleSalaryUp}
        onSalaryDown = {handleSalaryDown}
      />
      <AddUser onAdd = {handleNewUser} />
    </div>
  )
}

export default App;
