import { useParams } from "react-router-dom"

function UserDetails(){


    const {username}=useParams();

    return <div>


        <h1>User Details - {username}</h1>
    </div>
}

export default UserDetails