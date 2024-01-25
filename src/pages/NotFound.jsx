import { Link } from "react-router-dom";
import '../styles/pages/notFound.scss';

const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <h1 className="notfound-title">Désole, il semble que ce que vous cherchiez ne soit pas là...</h1>
      <Link className="notfound-link" to="/">On retourne à l'accueil ?</Link>
    </div>
  );
}

export default NotFound


