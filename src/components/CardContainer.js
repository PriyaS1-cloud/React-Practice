import { Link } from "react-router-dom";
import Card from "./CardComponent";
import NoResult from "./NoResult";

 const CardContainer = ({ filteredListofMembers }) => {
     if( !filteredListofMembers.length){
      return <NoResult></NoResult>
     }
    return <div className="flex flex-wrap justify-evenly">
      {filteredListofMembers.map((member) =>
      <Link key={member?.login} to={`/user/${member?.login}`}>
      <Card member={member} key={member.id}></Card>
      </Link>
      
    )}
    </div>
  }
  export default CardContainer;