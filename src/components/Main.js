import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import Axios from 'axios';
import Footer from './Footer';
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataApi: []
        }
    }
    componentDidMount = () => {
        Axios.get(`https://${process.env.REACT_APP_BACKEND}/data`).then(res => {
            this.setState({ dataApi: res.data })
        })
    }
    handleSubmit = (title, description, toUSD, image_url) => {
        let config = {
            method: "POST", baseURL: `https://${process.env.REACT_APP_BACKEND}`, url: "/create",
            data: {
                title: title,
                description: description,
                toUSD: toUSD,
                image_url: image_url,
            }
        }
        Axios(config);
    }
    render() {
        return (
            <div class="row">
                {
                    this.state.dataApi.map(item => {
                        return <>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image_url} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Card.Footer className="text-muted">{item.toUSD}</Card.Footer>
                                    <Button onClick={() => this.handleSubmit(item.title, item.description, item.toUSD, item.image_url)} variant="warning">Add-To-list</Button>
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
export default Main