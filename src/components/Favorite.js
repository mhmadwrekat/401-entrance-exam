import React, { Component } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import Axios from 'axios';
import Footer from './Footer';
export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDB: [], showUpdate: false, ids: '', title: '', description: '',
            toUSD: '', image_url: ''
        }
    }
    componentDidMount = () => {
        Axios.get(`https://${process.env.REACT_APP_BACKEND}/DBdata`).then(res => {
            this.setState({ dataDB: res.data })
        })
    }
    handleDelete = (id) => {
        let ID = id;
        let config = {
            method: "DELETE", baseURL: `https://${process.env.REACT_APP_BACKEND}`, url: `/delete/${ID}`,
        }
        Axios(config).then(res => { this.setState({ dataDB: res.data }) })
    }
    handleTitle = (event) => { this.setState({ title: event.target.value }); }
    handleDescription = (event) => { this.setState({ description: event.target.value }); }
    handleToUSD = (event) => { this.setState({ toUSD: event.target.value }); }
    handleImage_url = (event) => { this.setState({ image_url: event.target.value }); }
    handleUpdate = (id, title, description, toUSD, image_url) => {
        this.setState({
            ids: id,
            title: title,
            description: description,
            toUSD: toUSD,
            image_url: image_url,
            showUpdate: true
        })
    }
    handleUpdateForm = (id) => {
        let ID = id;
        let config = {
            method: "PUT", baseURL: `https://${process.env.REACT_APP_BACKEND}`, url: `/update/${ID}`,
            data: {
                title: this.state.title, description: this.state.description,
                toUSD: this.state.toUSD, image_url: this.state.image_url
            }
        }
        Axios(config).then(res => { this.setState({ dataDB: res.data }) })
    }
    render() {
        return (
            <div class="row">
                {
                    this.state.showUpdate &&
                    <Form onSubmit={() => this.handleUpdateForm(this.state.ids)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder={this.state.title} onChange={this.handleTitle} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>description</Form.Label>
                            <Form.Control type="text" placeholder={this.state.description} onChange={this.handleDescription} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder={this.state.toUSD} onChange={this.handleToUSD} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control type="text" placeholder={this.state.image_url} onChange={this.handleImage_url} />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            UPDATE
                        </Button>
                    </Form>
                }
                <br></br>
                {
                    this.state.dataDB.map(item => {
                        return <>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image_url} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Card.Footer className="text-muted">{item.toUSD}</Card.Footer>
                                    <Button onClick={() => this.handleDelete(item._id)} variant="danger">DELETE</Button>{" "}
                                    <Button onClick={() => this.handleUpdate(item._id, item.title, item.description, item.toUSD, item.image_url)} variant="warning">Update</Button>
                                </Card.Body>
                            </Card>
                        </>
                    })
                }
                <Footer />
            </div>
        )
    }
}
export default Favorite