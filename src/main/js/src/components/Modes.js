import React, { Component } from 'react'
import {Jumbotron, Modal, Row, Col, Card} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Link, withRouter } from 'react-router-dom';
import Workbench from './Workbench';
import axios from 'axios';

class Modes extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            workbench_data: [],
            show_exec_window : false
        }
        this.getWorkbenchData()
    }

    getWorkbenchData = () => 
        axios.get("/workflow/workbench/")
        .then(res => this.setState({workbench_data: res.data}))

    setNewWorkflow = (e, id) => {
        axios.get("/workflow/set_workflow/"+id)
        .then(res => {
            this.props.history.push({
                pathname:"/workflow",
                state: { data: res.data}
            })
        })
    }

    close_exec_window = () => this.setState({show_exec_window : false});
    open_exec_window = () => this.setState({show_exec_window : true});


    render() {
        
        return (
            <div>
                <Modal show={this.state.show_exec_window} onHide={this.close_exec_window}>
                    <Modal.Header closeButton>
                        <Modal.Title>Choose New Workflow mode</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{textAlign:"center"}}>
                        <Link to="/selectworkflow">
                            <Button variant="primary" style={btnStyle}>Desktop Mode</Button>
                        </Link>
                        <br/>
                        <Link to="/clustermode">
                            <Button variant="primary" style={btnStyle}>Cluster Mode</Button>
                        </Link>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.close_exec_window}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


               <Jumbotron className="jumbotron" style={{width:'90%', marginTop: '20px'}}>
                    <div style={{marginBottom:"5px"}}> 
                        <h1 style={{fontSize: "3rem", display:'inline', marginRight:"20px"}}>JedAI</h1> 
                        <span className="workflow-desc">The Java gEneric DAta Integration ToolKit is an open source, high scalability toolkit that offers out-of-the-box solutions for any data integration task.</span>
                    </div>
                    <Row className="mt-3 mb-3" style={{textAlign:'center'}}>
                        <Col md={3}>
                            <Card style={{border:'none', background:'transparent'}}>
                                <Card.Body>
                                    <span className="fa fa-database fa-2x" style={{color:'#007bff'}}/>
                                    <p className="mt-2" style={{fontSize:'0.9rem'}}>Multiple data source formats: CSV, XML, RDF, serialized, database</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{border:'none', background:'transparent'}}>
                                <Card.Body>
                                    <span className="fa fa-cogs fa-2x" style={{color:'#28a745'}}/>
                                    <p className="mt-2" style={{fontSize:'0.9rem'}}>Auto-configuration via Grid Search or Random Search</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{border:'none', background:'transparent'}}>
                                <Card.Body>
                                    <span className="fa fa-bar-chart fa-2x" style={{color:'#fd7e14'}}/>
                                    <p className="mt-2" style={{fontSize:'0.9rem'}}>Detailed results, logs, and performance visualizations</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card style={{border:'none', background:'transparent'}}>
                                <Card.Body>
                                    <span className="fa fa-flask fa-2x" style={{color:'#6f42c1'}}/>
                                    <p className="mt-2" style={{fontSize:'0.9rem'}}>Workbench for benchmarking multiple workflow configurations</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div style={{margin: "20px"}}>
                        <h3 style={{display:"inline", marginRight:"20px"}}>Workbench</h3> 
                        <Button variant="primary" onClick={this.open_exec_window}>
                            <span className="fa fa-plus-circle" style={{marginRight: "10px"}}/>
                            New Workflow
                        </Button>
                    </div>
                    <Jumbotron style={{margin:"auto", border:"groove", backgroundColor:"white"}}>
                        <Workbench data={this.state.workbench_data} getDataFunc={this.getWorkbenchData} setNewWorkflow={this.setNewWorkflow} />
                    </Jumbotron>  
                </Jumbotron> 
            </div>
        )
    }
}

const btnStyle = {
    cursor: 'pointer',
    width : '200px',
    height: '45px',
    margin: '5px'

}

export default withRouter(Modes)
