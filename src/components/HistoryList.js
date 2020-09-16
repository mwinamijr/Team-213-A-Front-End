import React, {Fragment} from "react";
import { Link } from "react-router-dom";

const HistoryList = (props) => {
  const histories = props.data;
  const historyList = histories.map((history) =>
    <Fragment key={history.id.toString()}>
      <tr>
      <td>{history.id}</td>
      <td>{history.name}</td>
      <td>{history.address}</td>
      <td>
        <Link to={`/history/${history.id}`} ><span className='ml-3'><i className="far fa-eye"></i></span></Link>
        <span className='ml-3'><i className="fas fa-pencil-alt"></i></span>
        <span className='ml-3'><i className="fas fa-times-circle"></i></span>
      </td>
      </tr>
    </Fragment>
  );
    return(
    <Fragment>{historyList}</Fragment>
        
    );
} ;
export default HistoryList;