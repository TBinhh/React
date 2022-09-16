export const LogIn = () => {
    return (
        
    )
    <h1>Log In Form</h1>
    <form>

        <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" name='email' class="form-control" value={form.email || ''} onChange={handleChange}></input>

        </div>
        <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" name='password' value={form.password || ''} onChange={handleChange}></input>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
</div>
}
export default LogIn;
