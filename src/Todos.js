



function ToDo(props){


    return (
        <tr>
            <td>{props.id}</td>
            <td><input  type="text" /></td>
            <td>{props.createdAt}</td>
        </tr>
    )
}


export default ToDo;