import { NavLink } from "react-router-dom";

export default function Navbar() {
const setActiveClass = ({ isActive }) => (isActive ? "actived" : undefined);
return (
<div>
<NavLink className={ setActiveClass } to="/">
Home
</NavLink>
{" - "}
<NavLink className={ setActiveClass } to="/personajes">
Personajes
</NavLink>
{" - "}
<NavLink className={ setActiveClass } to="/faqs">
Faqs
</NavLink>

</div>
);
}