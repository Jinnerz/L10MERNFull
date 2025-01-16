import { useWorkoutsContext } from "../hooks/useWorkoutsContext"


//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts/${workout._id}`, {
            method: 'DELETE'
        })
        const json = await response.json()
        
        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    // //edit

    // const handleEdit = async () => {
    //     const response = await fetch('/api/workouts/' + workout._id, {
    //         method: 'PUT'
    //     })
    //     const json = await response.json()

    //     if (response.ok) {
    //         dispatch({type: 'EDIT_WORKOUT', payload: json})
    //     }
    // }

    return(
        <div className="workout-details">
            <div>
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):</strong>{workout.load}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffi: true})}</p>
            </div>
            
            <div className="workout-symbols">
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            {/* <span className="material-symbols-outlined" onClick={handleEdit}>edit</span> */}
            </div>
            
        </div>
    )
}

export default WorkoutDetails