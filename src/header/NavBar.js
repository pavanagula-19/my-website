import '../icons/search.png'


function Header(){
    return <div id="header">
        <div id='hamburger'>
        <div className='child-hamburger'></div>
        <div className='child-hamburger'></div>
        <div className='child-hamburger'></div>
        </div>
        <input id='search-bar'>
            </input>
        <div id='navbar-parent'>
         <div className="navbar-child">Home</div>
         <div className="navbar-child">About</div>
         <div className="navbar-child">Courses</div>
         <div className="navbar-child">Login</div>
        </div>
    </div>
}
export default Header