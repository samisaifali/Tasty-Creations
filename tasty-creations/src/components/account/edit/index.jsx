import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default () => {
    const navigate = useNavigate();
    const [fields, setFields] = useState({
        fullname: "",
        email: "",
        gender: "",
        password: "",
        confirmPassword: ""
    });
    const handleFieldChange = (event, field) => setFields(fields => ({
        ...fields,
        [field]: event.target.value
    }));
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        alert("Account updated successfully!");
        navigate("/details");
    };
    const handleFormReset = () => setFields(fields => ({
        ...fields,
        password: "",
        confirmPassword: ""
    }));
    
    return (
        <>
            <h2
                id="page-title"
                style={{
                    textAlign: "center",
                    margin: "4rem 0 2rem"
                }}>
                User Account
            </h2>
            <form
                id="update-account-form"
                onSubmit={handleFormSubmit}
                onReset={handleFormReset}>
                <fieldset className="form-group">
                    <div className="input-group">
                        <label htmlFor="fullname">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            value={fields.fullname}
                            onChange={event => handleFieldChange(event, "fullname")}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">
                            E-mail Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={fields.email}
                            onChange={event => handleFieldChange(event, "email")}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="text">
                            Gender
                        </label>
                        <input
                            type="text"
                            id="gender"
                            value={fields.gender}
                            onChange={event => handleFieldChange(event, "gender")}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            Change Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={fields.password}
                            onChange={event => handleFieldChange(event, "password")}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={fields.confirmPassword}
                            onChange={event => handleFieldChange(event, "confirmPassword")}
                            required
                        />
                    </div>
                    <div className="action-group">
                        <button type="reset">Cancel</button>
                        <button type="submit">Update</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}