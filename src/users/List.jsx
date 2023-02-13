import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { userService } from '@/_services';

function List({ match }) {
    const { path } = match;
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }


  
    return (
        <div>
            
            <h1>Data</h1>
            <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2 disabled ">Add data</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>p_district</th>
                        <th style={{ width: '30%' }}>p_taluk</th>
                        <th style={{ width: '30%' }}>p_village</th>
                        <th style={{ width: '30%' }}>p_surveyno</th>
                        <th style={{ width: '30%' }}>p_subdivision</th>
                        <th style={{ width: '30%' }}>owner_nametext</th>
                        {/* <th style={{ width: '30%' }}>district_name</th> */}
                        {/* <th style={{ width: '30%' }}>taluk_name</th> */}
                        {/* <th style={{ width: '30%' }}>village_name</th> */}
                        {/* <th style={{ width: '30%' }}>Email</th>
                        <th style={{ width: '30%' }}>Role</th> */}
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                








                    {users && users.map(user =>
                        <tr key={user.id}>
                            {/* <td>{user.}{user.}{user.}{user.}{user.}{user.}{user.}{user.}{user.}{user.}</td> */}
                            <td>{user.district_code}</td>
                            <td>{user.taluk_code}</td>
                            <td>{user.village_code}</td>
                            <td>{user.surveryno}</td>
                            <td>{user.subdivision}</td>
                            <td>{user.owner_nametext}</td>
                            {/* <td>{user.district_name}</td>
                            <td>{user.taluk_name}</td>
                            <td>{user.village_name}</td>
                            <td>{user.role}</td> */}
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`${path}/edit/${user.id}`} className="btn btn-sm btn-primary mr-1 disabled">Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger btn-delete-user disabled" disabled={user.isDeleting}>
                                    {user.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {users && !users.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export { List };