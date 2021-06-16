import React, { useState, useContext } from "react";
import "./Sendmail.css";
import { Button, Form,ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { ListGroup, ListGroupItem, List ,Container, Row, Col} from 'reactstrap';
import { FaInbox,FaRegEnvelope ,FaCertificate,FaTrashAlt,FaFileAlt} from "react-icons/fa";
import { TiTag,TiRefresh,TiEyeOutline,TiTrash,TiArrowLeft,TiArrowRight } from "react-icons/ti";
import { BsExclamation } from "react-icons/bs";
import { FaMagic,FaBold,FaUnderline,FaEraser,FaFont,FaListUl,FaListOl,FaAlignLeft,FaCalendarAlt,FaVideo,FaArrowsAlt,FaCode,FaQuestion,FaCaretDown } from "react-icons/fa";


const Sendmail = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const [users, setUser] = useContext(UserContext);

    const updateId = (e) => {
        setId(e.target.value);
        console.log(id)
    };

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateMessage = (e) => {
        setMessage(e.target.value);
    };

    const addUser = (e) => {
        e.preventDefault();
        setUser([...users, { id: id, name: name, message: message }])
    }

    return (
        
        <div className="body">   
        <Container >
        <Row xs="1">
            <Col> <Link  to="/sendmail"><Button className="btn btn-success button" style={{background:"hsl(167deg 100% 37%)"}}>ComposeMail</Button></Link></Col>
        </Row>   
        <p style={{fontsize: 16,left:-50,padding:20}} class="text-right"></p>
        <h6>FOLDERS</h6>
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
            <li style={{margin:4,fontsize:13}} ><i class="fa fa-circle text-success"/>Work</li>
            <li style={{margin:4,fontsize:13}}><i class="fa fa-circle text-danger"></i>Documents</li>
            <li style={{margin:4,fontsize:13}}><i class="fa fa-circle text-dark"></i>Social</li>
            <li style={{margin:4,fontsize:13}}><i class="fa fa-circle text-info"></i>Advertising</li>
            <li style={{margin:4,fontsize:13}} ><i class="fa fa-circle text-warning"></i>Clients</li>
          </List >
        <p style={{fontsize: 16}}>LABELS</p>
        <div className="">
            <div className="row">
                <div class="col-sm-3" style={{fontsize: 13,width:100,height:40}}>
                    <button class="tags  border px-2 py-1"><TiTag/>Family</button>
                    <button class="tags  border px-2 py-1"><TiTag/>Work</button>
                    <button class="tags  border px-2 py-1"><TiTag/>Home</button>
                </div>
            </div>
            <div className="row">
                <div class="col-sm-3" style={{fontsize: 13,width:100,height:40}}>
                    <button class="tags  border px-2 py-1"><TiTag/>Children</button>
                    <button class="tags  border px-2 py-1"><TiTag/>Holidays</button>
                    <button class="tags  border px-2 py-1"><TiTag/>Music</button>
                </div>
            </div>
            <div className="row">
                <div class="col-sm-3" style={{fontsize: 16}}>
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
        <div className="row">
            <div class="col-sm-3" style={{height:60}}>
                <h6 className="left" >Inbox(16)</h6>
            </div>
            <Row>
              <Col style={{float:"right",left:570}}>
            <input className="searchinput"  type="text" placeholder="  Search email"/><Button style={{background:" hsl(167deg 100% 37%)"}} >Search</Button>
            </Col>
            </Row>
        </div>
        <div className="row" style={{height:180}}>
            <div className="col-sm-6">
              <Row>
                <Col xs="4">
                <div className="right" style={{float:"left",left:25}}>
                    <button className="block-example border border-dark" style={{fontsize:13,background:"white",borderRadius: 6,margin:3,paddingRight:1,paddingLeft:1,paddingTop:0,paddingBottom:0}}><TiRefresh/> Refresh</button>
                    <button className="block-example border border-dark" style={{fontsize:13,background:"white",borderRadius: 6,margin:3,paddingRight:1,paddingLeft:1,paddingTop:0,paddingBottom:0}}><TiEyeOutline/> </button>
                    <button className="block-example border border-dark" style={{fontsize:13,background:"white",borderRadius: 6,margin:3,paddingRight:1,paddingLeft:1,paddingTop:0,paddingBottom:0}}><BsExclamation/> </button>
                    <button className="block-example border border-dark" style={{fontsize:13,background:"white",borderRadius: 6,margin:3,paddingRight:1,paddingLeft:1,paddingTop:0,paddingBottom:0}}><TiTrash/></button>
                </div>
                </Col>
                </Row>
                <div className="right">
                    <button className="block-example border border-dark" style={{fontsize:13,background:"white",borderRadius: 1,padding:0}}><TiArrowLeft/></button>
                    <button className="block-example border border-dark" style={{fontsize:13,background:"white",borderRadius: 1,padding:0 }}><TiArrowRight/></button>
                </div>
            </div>
         </div>
         
        <div className = "sendmail" style={{backgroundColor:"#eee",height:400}}>
        <Form onSubmit = { addUser } >
        <Form.Group >
        <Form.Label > To </Form.Label>
        < Form.Control type = "text"
        name = "name"
        value = { name }
        onChange = { updateName }
        placeholder = "Enter Name" />
        </Form.Group> 
        <Form.Group >
        <Form.Label > Message </Form.Label>
         <Form.Control type = "text"
        name = "message"
        value = { message }
        onChange = { updateMessage }
        placeholder = "Enter Message" />
        </Form.Group>
        <div style={{backgroundColor:"#eee"}}>
           <ListGroup horizontal>
           <ListGroupItem ><FaMagic/></ListGroupItem>
           <ListGroupItem ><FaBold/></ListGroupItem>
           <ListGroupItem ><FaUnderline/></ListGroupItem>
           <ListGroupItem ><FaEraser/></ListGroupItem>
           <ListGroupItem ><FaFont/></ListGroupItem>

           <ListGroupItem ><FaCaretDown/></ListGroupItem>
           <ListGroupItem ><FaListUl/></ListGroupItem>
           <ListGroupItem ><FaListOl/></ListGroupItem>
           <ListGroupItem ><FaAlignLeft/></ListGroupItem>
           <ListGroupItem ><FaCalendarAlt/></ListGroupItem>

           <ListGroupItem ><FaVideo/></ListGroupItem>
           <ListGroupItem ><FaArrowsAlt/></ListGroupItem>
           <ListGroupItem ><FaCode/></ListGroupItem>
           <ListGroupItem ><FaQuestion/></ListGroupItem>
            
           </ListGroup>
        </div>
        <div style={{margin:30,align:"left",left:60}}>
         <Button className = "action_btn"
        variant = "primary"
        type = "submit" >
        Send </Button> 
        <Link to = "/" >
        <Button className = "action_btn"
        variant = "info" >
        Back </Button> </Link >
        </div>
        </Form> 
        </div>
       </div>  
    </div>
    );
};

export default Sendmail;