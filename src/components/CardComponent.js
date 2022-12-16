const Card=(props)=>{
  // prop={
  //   members:data
  // }
  const member=props.member;
  if(props.member==null) return;
    return(
      <div className="cards">
         <img src= {member.avatar_url} alt= {member.name}/>
        <h1>{member.name}</h1>
    
        <h2>{member.company}</h2>
        <h3>{member.designation}</h3>
      </div>
    )
  }
export default Card;