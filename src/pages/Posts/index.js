import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavHeader, Post } from '../../styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import logo from '../../../assets/logo.png';

class Posts extends Component {

    constructor(props){
        super(props);
        this.state = {
            post:[],
        };
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({ post:json});
            // console.log("post", json);
        })
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Nav>
                        <NavHeader>
                            <div>
                                <Row>
                                        <Image src={logo} rounded />
                                </Row>
                            </div>
                        </NavHeader>
                    </Nav>
                </Container>

                <Post>
                    <div>
                        <p>User Id: { this.state.post.userId }</p>
                        <p>Id: { this.state.post.id }</p>
                        <p>Title: { this.state.post.title }</p>
                        <p>Body: { this.state.post.body }</p>
                        <Link to="/">Voltar para Lista</Link>

                    </div>
                </Post>

            </div>
        );
    }
}

export default Posts;
