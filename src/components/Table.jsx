import Table from "react-bootstrap/Table";
import { useQuery } from "react-query";
import { apiClient, url } from "../utils/axios-util";

function TableTeam({ headTable , urlRemoveClub , urlRemoveLegues }) {
  // const idLoca = window.location.href.slice(38);
  var str = window.location.href;
  var wordToRemove = `${url}${urlRemoveLegues ? urlRemoveLegues : urlRemoveClub}`;
  var idLoca = str.split(new RegExp('\\b' + wordToRemove + '\\b')).join('');


  const { data: grobsData } = useQuery({
    queryKey: [`groups${idLoca}`],
    queryFn: async () => {
      const res = await apiClient.get(`groups/${idLoca}`);
      return res.data.data;
    },
  });
  const groubs = grobsData ? grobsData : [];
  return (
    <>
      {groubs?.map((item) => (
        <>
          <h5> {item?.group_name} </h5>

          <Table striped bordered hover className="mt-2">
            <thead>
              <tr>
                <th></th>
                <th>لعب </th>
                <th>فوز </th>
                <th>خسارة</th>
                <th>نقاط</th>
              </tr>
            </thead>
            {item.teams.map((row) => (
              <tbody>
                <tr>
                  <td className="d-flex align-items-center gap-2">
                    <img style={{ width: "40px" }} src={row.image} alt="" />
                    <p>{row.name}</p>
                  </td>
                  <td>
                    {row.play}
                  </td>
                  <td>
                    {row.win}
                  </td>
                  <td>
                    {row.lose}
                  </td>
                  <td>
                    {row.points}
                  </td>
                </tr>
        
                
              </tbody>
            ))}
          </Table>
        </>
      ))}
    </>
  );
}

export default TableTeam;
