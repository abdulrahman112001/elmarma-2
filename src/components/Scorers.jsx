import Table from "react-bootstrap/Table";

function Scorers({scorersDate}) {
  
  return (
    <div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>الترتيب</th>
            <th>الاسم  </th>
            <th>الفريق </th>
            <th>عدد الاهداف</th>

          </tr>
        </thead>
        <tbody>
      {
        scorersDate.map((item)=>(
          <tr>
            <td> {item.arrange_number}</td>
            <td>
              <img className="img-player" src={item.player_image} alt="" />
              {item.player_name}
              
              
              </td>
            <td>{item.team_name}</td>
            <td>{item.goal_numbers}</td>

          </tr>
    
    ))
  }
        </tbody>
      </Table>
    </div>
  );
}

export default Scorers;
