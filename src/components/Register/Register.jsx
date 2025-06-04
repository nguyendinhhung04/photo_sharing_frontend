import React, {useState} from "react";
import axios from "axios";

export const Register = () => {
    const [newUser, setNewUser] = useState(
        {
            login_name:  "",
            password:    "",
            first_name:  "",
            last_name:   "",
            occupation:  "",
            description: "",
            location:    ""
        }
    );
    const [loginNameExists, setLoginNameExists] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevState => ({
            ...prevState,
            [name]: value
        }));
        // axios.get(`api/user/checkLogin_name/${newUser.login_name}`).then((response) => {
        //     if(response.data.status === true){
        //         setLoginNameExists(true)
        //     }
        //     else
        //     {
        //         setLoginNameExists(false)
        //     }
        // })
    }

    const handleSubmit = (e) => {
        axios.post("api/user/addUser", newUser)
            .then((response) => {console.log(response.data)})
            .catch((error) => {
                console.error("There was an error registering the user!", error);
            });

    }

    return (
        <>
            <div
                style={{
                    maxWidth: 300,
                    margin: "50px auto",
                    padding: 20,
                    border: "1px solid #ccc",
                    borderRadius: 8
                }}
            >
                <h2>Register</h2>
                <div style={{ marginBottom: 10 }}>
                    <label style={{ display: 'block', marginBottom: 5 }}>Login Name *</label>
                    <input
                        type="text"
                        name="login_name"
                        value={newUser.login_name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter login name"
                        style={{ width: "100%", padding: 8 }}
                    />
                    {!loginNameExists && (
                        <p style={{color: "red"}} >Username Already exist</p>
                    )}
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label style={{ display: 'block', marginBottom: 5 }}>Password *</label>
                    <input
                        type="password"
                        name="password"
                        value={newUser.password}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter password"
                        style={{ width: "100%", padding: 8 }}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label style={{ display: 'block', marginBottom: 5 }}>First Name *</label>
                    <input
                        type="text"
                        name="first_name"
                        onChange={(e) => handleChange(e)}
                        value={newUser.first_name}
                        placeholder="Enter First Name"
                        style={{ width: "100%", padding: 8 }}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label style={{ display: 'block', marginBottom: 5 }}>Last Name *</label>
                    <input
                        type="text"
                        name="last_name"
                        onChange={(e) => handleChange(e)}
                        value={newUser.last_name}
                        placeholder="Enter Last Name"
                        style={{ width: "100%", padding: 8 }}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label style={{ display: 'block', marginBottom: 5 }}>Occupation</label>
                    <input
                        type="text"
                        name="occupation"
                        onChange={(e) => handleChange(e)}
                        value={newUser.occupation}
                        placeholder="Enter Occupation"
                        style={{ width: "100%", padding: 8 }}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label style={{ display: 'block', marginBottom: 5 }}>Description</label>
                    <textarea
                        name="description"
                        value={newUser.description}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter description"
                        style={{ width: "100%", padding: 8 }}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label style={{ display: 'block', marginBottom: 5 }}>Location</label>
                    <textarea
                        name="location"
                        value={newUser.location}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter location"
                        style={{ width: "100%", padding: 8 }}
                    />
                </div>
                <button
                    style={{
                        width: "100%",
                        padding: 8,
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer"
                    }}
                    onClick={(e) => {handleSubmit(e)}}
                >
                    Register
                </button>
            </div>
        </>
    )
}

export default Register;