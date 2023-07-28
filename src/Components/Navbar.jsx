
function Navbar() {
    return (
        <>
            <div className="colorPrimario grid grid-cols-2 place-content-center py-5">
                <div  >
                    <a className="textoCuaternario hover:text-white" href="">Mi Portfolio</a>
                </div>
                <div className="textoCuaternario " >
                    <nav className=" flex justify-evenly">
                        <a className=" hover:text-white" href="">Home</a>
                        <a className=" hover:text-white" href="">Proyects</a>
                        <a className=" hover:text-white" href=""> Skills </a>
                        <a className=" hover:text-white" href=""> Contact </a>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar