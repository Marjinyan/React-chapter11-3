const UserList = ({users, onDelete, onSalaryDown, onSalaryUp}) => {
    return <div>
        <h3>User List</h3>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>salary</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(elm => {
                        const css = elm.salary > 300000 ? "high" : null
                        return <tr key={elm.id} className={css}>
                            <td>{elm.id}</td>
                            <td>{elm.name}</td>
                            <td>{elm.surname}</td>
                            <td>{elm.salary} AMD</td>
                            <td>
                                <button onClick={() => onSalaryUp(elm.id)} >salary up</button>
                                <button onClick={() => onSalaryDown(elm.id)}>salary down</button>
                                <button onClick={() => onDelete(elm.id)}>delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}
export default UserList