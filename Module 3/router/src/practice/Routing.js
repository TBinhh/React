export const Routing = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
            );
}