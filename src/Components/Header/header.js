import Timer from '../../Components/Timer/timer'

function Header() {
return (<ul className="ul-header">
    <li><a>Home</a></li>
    <li><a>News</a></li>
    <li><a>Contact</a></li>
    <li><a>About</a></li>
    <li><Timer/></li>
  </ul>)
}
export default Header;
