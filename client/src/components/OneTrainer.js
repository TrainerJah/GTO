import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link, useNavigate} from 'react-router-dom';
const OneTrainer = (props) => {
    const [trainers, setTrainers] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();
    useEffect((_id) => {
        axios.get(`http://localhost:8000/trainer/${id}`)
            .then( res => {
                console.log(res.data);
                setTrainers(res.data);
            })
            .catch( err => console.log(err) );
    }, []);
    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/trainer/delete/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <div className="uno">
            <Link to={`/`}>Back to Home</Link>
            <h2>Name: {trainers.trainerName}</h2>
            <h1>{trainers.friendCode}</h1>
            <h2>Team: {trainers.team}</h2>
            <h2>Status: {trainers.preference}</h2><br/><br/>
            <Link className="Edd" to={`/trainer/edit/${id}`}>Edit</Link><br/><br/><br/>
            <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
        </div>
    );
}
export default OneTrainer;

