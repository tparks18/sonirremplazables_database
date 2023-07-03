import React, { useEffect } from "react";
//import { Link, useLocation, useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listUsers } from '../actions/userActions'
import { Link } from "react-router-dom";

function UserListScreen() {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    console.log(userList);
    const { loading, error, users } = userList

    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch])

    const deleteHandler = (id) => {
        console.log('DELETE:', id)
    }

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>IS ADMIN</th>
            <th>EDIT USER</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-check" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <Link to={`/admin/users/${user._id}`}>
                    <Button variant="light" className="btn-sm me-2">
                      <i className="fas fa-edit"></i>
                    </Button>
                    <Button variant="danger" className="btn-sm" onClick={() => deleteHandler(user._id)}>
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default UserListScreen;
