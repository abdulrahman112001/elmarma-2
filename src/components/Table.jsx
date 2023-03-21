import Table from 'react-bootstrap/Table';

function TableTeam({headTable}) {
  return (
    <>
     <h5> {headTable}   </h5>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>الفريق</th>
          <th>لعب </th>
          <th>فوز </th>
          <th>خسارة</th>
          <th>تعادل</th>
          <th>نقاط</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >فريق الاهلي</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>

        </tr>
        <tr>
          <td>فريق الاهلي</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>

        </tr>
        
        <tr>
          <td>فريق الاهلي</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>

        </tr>
        <tr>
          <td>فريق الاهلي</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>

        </tr>
      </tbody>
    </Table>
    </>
  );
}

export default TableTeam;