import React from "react";
import styled from 'styled-components';


const Styled = styled.div `
    .useContainer {
        background-color: skyblue;
        color: purple;
        border: 1px solid grey;
        margin: 3em;
    }

    h2, h3, h4 {
        font-size: 2.75vw;
        padding: 2em;
        margin: .75em;
        border-bottom: 2px dashed black;
    }
`

const Users = props => {
    return (
      <Styled>
        <div className="useContainer">
            {props.users.map(user => (
                <div className="user" key={user.key}>
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                    <h4>{user.role}</h4>
                </div>
            ))}
        </div>
      </Styled>
    );
};

export default Users;