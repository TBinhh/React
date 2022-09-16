import react, { useState } from 'react';

export default function signUp() {
    const [form, setForm] = useState({});

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    function handleSubmit() {
        const isValid =
            form.username && form.email && form.password && form.confirmPassword;
        alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
    }

    return (
        <div className='container'>
            <h1>Sign Up</h1>
            <form>
            <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="username" name='username' class="form-control" value={form.username || ''} onChange={handleChange}></input>
                       
                </div>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" name='email' class="form-control" value={form.email || ''} onChange={handleChange}></input>
                        
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" name='password' value={form.password || ''} onChange={handleChange}></input>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
