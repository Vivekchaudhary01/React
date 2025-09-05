import React, { useEffect, useState } from 'react'

const FetchAPI = () => {

    const [users, setUsers] = useState([]);

    async function getusers() {
        let response = await fetch("https://api.github.com/users");
        let data = await response.json();
        console.log(data);  //  [{},{},...]
        setUsers(data); // storing data in state
    }

    useEffect(() => {
        getusers();
    }, []);

    return (
        <div>
            <h1>FetchAPI - useEffect Hook</h1>
            {
                users.map((user) => {
                    return (
                        <div>
                            <img src={user.avatar_url} alt="" height={100} width={100}/>
                            <h2>{user.login}</h2>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default FetchAPI