import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Button, Table } from "reactstrap";
import { ListGroup, ListGroupItem, List ,Container, Row, Col} from 'reactstrap';
import { FaInbox,FaRegEnvelope ,FaCertificate,FaTrashAlt,FaFileAlt} from "react-icons/fa";
import { TiTag,TiRefresh,TiEyeOutline,TiTrash,TiArrowLeft,TiArrowRight } from "react-icons/ti";
import { BsExclamation } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.css';

 

const Home = () => {
  const [users, setUser] = useContext(UserContext);

  return (
      <div >   
      <Container >
      <Row xs="1">
          <Col> <Link  to="/sendmail"><Button className="btn btn-success button" style={{background:"hsl(167deg 100% 37%)"}}>ComposeMail</Button></Link></Col>
      </Row>   
      <p style={{fontsize: 16,left:-50,padding:20}} class="text-right"></p>
      <p>FOLDERS</p>
      <Row xs="2">
      <ListGroup >
      <Col className="border-bottom" style={{margin:4,fontsize:13}}><FaInbox /><span className="ml-2">Inbox</span></Col>
      <Col className="border-bottom" style={{margin:4,fontsize:13}}><FaRegEnvelope/><span className="ml-2">SendMail</span></Col>
      <Col className="border-bottom" style={{margin:4,fontsize:13}}><FaCertificate/><span className="ml-2">Important</span></Col>
      <Col className="border-bottom" style={{margin:4,fontsize:13}}><FaFileAlt/><span className="ml-2">Drafts</span></Col>
      <Col className="border-bottom" style={{margin:4,fontsize:13}}><FaTrashAlt/><span className="ml-2">Trash</span></Col>
      </ListGroup>
      </Row>
      <p style={{height:10}} class="text-right"></p>
     <p >CATEGORIES</p>
     <List type="unstyled">
          <li style={{margin:5,fontsize:13}}><span><div className="circle" /></span>Work</li>
          <li style={{margin:5,fontsize:13}}><i class="fa fa-circle text-danger" />Documents</li>
          <li style={{margin:5,fontsize:13}}><i class="fa fa-circle text-dark"/>Social</li>
          <li style={{margin:5,fontsize:13}}><i class="fa fa-circle text-info" />Advertising</li>
          <li style={{margin:5,fontsize:13}}><i class="fa fa-circle text-warning" />Clients</li>
        </List >
      <p style={{fontsize: 16}}>LABELS</p>
      <div className="">
          <div className="row">
              <div class="col-sm-3" style={{fontsize: 13,width:100,height:40,padding:10,margin:3}}>
                  <button className="tags  border px-2 py-1"><TiTag/>Family</button>
                  <button  className="tags  border px-2 py-1"><TiTag/>Work</button>
                  <button  className="tags  border px-2 py-1"><TiTag/>Home</button>
              </div>
          </div>
          <div className="row">
              <div class="col-sm-3" style={{width:100,height:40,fontsize:13,padding:10,margin:3}}>
                  <button class="tags  border px-2 py-1"><TiTag/>Children</button>
                  <button class="tags  border px-2 py-1"><TiTag/>Holidays</button>
                  <button class="tags  border px-2 py-1"><TiTag/>Music</button>
              </div>
          </div>
          <div className="row">
              <div class="col-sm-3" style={{fontsize: 13,padding:10,margin:3}}>
                  <button class="tags border px-2 py-1"><TiTag/>
              Photography</button>
                  <button class="tags  border px-2 py-1"><TiTag/>
                  Film</button>
              </div>
          </div>
      </div>
      </Container>
      <div className="box">
        
      <p style={{height:10}} ></p>
      <div className="row" >
          <div class="col-sm-3" style={{height:60}}>
              <h6 className="left" >Inbox(16)</h6>
          </div>
          <Row>
            <Col style={{float:"right",left:570}}>
          <input  type="text" placeholder="  Search email"/><Button className="btn btn-secondary py-1" style={{background:" hsl(167deg 100% 37%)"}} >Search</Button>
          </Col>
          </Row>
      </div>
      <div className="row" style={{height:90}}>
          <div className="col-sm-6">
            <Row>
              <Col xs="4">
              <div className="right" style={{float:"left",left:25,fontsize:13}}>
                  <button className="block-example border border-dark" style={{fontsize:13,background:"white",borderRadius: 6,margin:3,paddingRight:1,paddingLeft:1,paddingTop:0,paddingBottom:0}}><TiRefresh/> Refresh</button>
                  <button className="block-example border border-dark" style={{background:"white",borderRadius: 6,margin:3,fontsize:13,paddingRight:1,paddingLeft:1,paddingTop:0,paddingBottom:0}}><TiEyeOutline/> </button>
                  <button className="block-example border border-dark" style={{background:"white",borderRadius: 6,margin:3,fontsize:13,paddingRight:1,paddingLeft:1,paddingTop:0,paddingBottom:0}}><BsExclamation/> </button>
                  <button className="block-example border border-dark" style={{background:"white",borderRadius: 6,margin:3,fontsize:13,paddingRight:1,paddingLeft:1,paddingTop:0,paddingBottom:0}}><TiTrash/></button>
              </div>
              </Col>
              </Row>
              <div className="right">
                  <button className="block-example border border-dark" style={{fontsize:13,background:"white",borderRadius: 1,paddingRight:1,paddingLeft:1,paddingTop:0,paddingBottom:0 }}><TiArrowLeft/></button>
                  <button className="block-example border border-dark" style={{fontsize:13,background:"white",borderRadius: 1 ,paddingRight:1,paddingLeft:1,paddingTop:0,paddingBottom:0}}><TiArrowRight/></button>
              </div>
          </div>
       </div>
       
      <Table striped>

        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>

  );
};

export default Home;
