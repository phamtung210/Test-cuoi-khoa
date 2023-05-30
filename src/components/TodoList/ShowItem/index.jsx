import React from 'react'

const ShowItem = ({ todoName, status, handleDelete, handleChangeStatus }) =>{

    return (
            <tr>
                <td>{todoName}</td>
                <td>
                    <div className={`status ${status ? 'completed' : 'working'}`} onClick={handleChangeStatus}>
                        {
                            status ? 'Completed' : 'Working'
                        }
                    </div>
                </td>
                <td>
                    <button className="delete" onClick={handleDelete}>Delete</button>
                </td>
            </tr>
    )
}

export default ShowItem;


