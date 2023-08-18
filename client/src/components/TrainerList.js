import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

const TrainerList = (props) => {

    const {trainers, setTrainers} = props;
    
    useEffect(() => {
        axios.get('http://localhost:8000/trainers')
            .then( res => {
                console.log(res.data);
                setTrainers(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <p>**Click Friend Code To View Details**</p>
            {
                trainers.map((trainer, index) => {
                    return (
                        <div key = {index}>
                            <Link className="bar" to= {`/trainer/${trainer._id}`}>{trainer.team} ."{trainer.friendCode}". {trainer.preference}</Link><br/><br/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default TrainerList;