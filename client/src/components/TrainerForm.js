import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

const TrainerForm = (props) => {
    const {trainers, setTrainers} = props;
    const [team, setTeam] = useState("");
    const [friendCode, setFriendCode] = useState("");
    const [preference, setPreference] = useState("");
    const [trainerName, setTrainerName] = useState("");
    const [trainerLevel, setTrainerLevel] = useState(1);
    const [favoritePKMN, setFavoritePKMN] = useState("");
    const [trainerText, setTrainerText] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/trainer/add', {
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
            setTrainers([...trainers, res.data]);
            setTeam("");
            setFriendCode("");
            setPreference("");
            setTrainerName("");
            setTrainerLevel(1);
            setFavoritePKMN("");
            setTrainerText("");
            // <navigate to = "/" replace={true}/>gg

        })
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit = {onSubmitHandler} >
            <Link to={`/`}>Back to Home</Link>
            <p>(notes: Preference involves the way you interact with other trainers.)</p>
            <p>(continued: If you see an option that describes what you do TO/FOR other trainers, please select that option)</p>
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
            <button className="btn btn-success" type="submit">Let's GO</button>
        </form>
    )
}
export default TrainerForm;