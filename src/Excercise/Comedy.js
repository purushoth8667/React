import React, { useEffect, useState } from "react";

function Comedy() {
    const [users, setUsers] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://official-joke-api.appspot.com/random_joke");
                const result = await response.json();
                setUsers(result.result);
                console.log(response);
            } catch (error) {
                console.log("error");
            }
        };
        fetchUsers();
    }, []);
    return (
        <div>
            <h1>Welcome to Great Comedy</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p>Type:{user.type}</p>
                        <p>Setup:{user.setup}</p>
                        <p>Punch Line:{user.punchline}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comedy;