import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const UpdateForm = (props) => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    // const {trainers, setTrainers} = props;
    const [team, setTeam] = useState("");
    const [friendCode, setFriendCode] = useState("");
    const [preference, setPreference] = useState("");
    const [trainerName, setTrainerName] = useState("");
    const [trainerLevel, setTrainerLevel] = useState(1);
    const [favoritePKMN, setFavoritePKMN] = useState("");
    const [trainerText, setTrainerText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/trainer/${id}`)
            .then(res => {
                setTeam(res.data.team);
                setFriendCode(res.data.friendCode);
                setPreference(res.data.preference);
                setTrainerName(res.data.trainerName);
                setTrainerLevel(res.data.trainerLevel);
                setFavoritePKMN(res.data.favoritePKMN);
                setTrainerText(res.data.trainerText);
            })
            .catch(err => console.log(err))
    }, [id])

    const updateHandler = (e) => {
        // e.preventDefault();
        axios.put(`http://localhost:8000/trainer/edit/${id}`, {
            team,
            friendCode,
            preference,
            trainerName,
            trainerLevel,
            favoritePKMN,
            trainerText
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            // setTrainers([...trainers, res.data]);
            // setTeam("");
            // setFriendCode("");
            // setPreference("");
            // setTrainerName("");
            // setTrainerLevel(1);
            // setFavoritePKMN("");
            // setTrainerText("");
            <navigate to = "/" replace={true}/>
            // navigate("/");
        })
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit = {updateHandler} >
            <Link to={`/`}>Back to Home</Link>
            <h2>Edit {trainerName}'s Entry</h2>
            <h4>
                <label>Team</label><br/>
                <input value = {team} type="text" onChange = {(e) => setTeam(e.target.value)} />
                {team.length < 5 && team.length > 0?
                <p3>Please Enter Team Name</p3>:
                null}
            </h4>
            <h4>
                <label>Friend Code</label><br/>
                <input value = {friendCode} type="text" onChange = {(e) => setFriendCode(e.target.value)} />
                {friendCode.length < 12 && friendCode.length > 0?
                <p3>Please Enter Your Friend Code</p3>:
                null}
            </h4>
            <h4>
                <label>Gift/Raid Interactions(Preference)</label><br/>
                <input value = {preference} type="text" onChange = {(e) => setPreference(e.target.value)} />
                {preference.length < 3 && preference.length > 0?
                <p3>Please Enter a Preference of Interaction Style</p3>:
                null}
            </h4>
            <h4>
                <label>Trainer Name</label><br/>
                <input value = {trainerName} type="text" onChange = {(e) => setTrainerName(e.target.value)} />
            </h4>
            <h4>
                <label>Trainer Level</label><br/>
                <input size="2" value = {trainerLevel} type="number" onChange = {(e) => setTrainerLevel(e.target.value)} />
            </h4>
            <h4>
                <label>Favorite PKMN</label><br/>
                <input value = {favoritePKMN} type="text" onChange = {(e) => setFavoritePKMN(e.target.value)} />
            </h4>
            <h4>
                <label>Leave a Comment!</label><br/>
                <textarea value = {trainerText} type="text" onChange = {(e) => setTrainerText(e.target.value)} />
            </h4>
            <button className="btn btn-success" type="submit">Save Changes</button>
        </form>
    )
}
export default UpdateForm;