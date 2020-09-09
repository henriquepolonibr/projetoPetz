import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Title, StyledButton, Nav, NavHeader, Input, Results } from '../../styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import logo from '../../../assets/logo.png';


class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            petzProperties: [],
            texto: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                let state = this.state;
                state.petzProperties = json;
                this.setState(state);
                // console.log(state.petzProperties);
            })
    }

    atualizaLista(event) {
        this.setState({
            texto: event.target.value.substr(0, 20)
        });
    }

    render() {
        let filtradoUserId = this.state.petzProperties.filter(
            (nome) => {
                return nome.userId == this.state.texto;
            }
        );
        // console.log("filtrado", filtrado);
        return (
            <div>
                <Container fluid>
                    <Nav>
                        <NavHeader>
                            <div>
                                <Row>
                                    <Image src={logo} rounded />
                                    <Input type="text" placeholder="Digite o User ID de 1 a 10: " onKeyUp={this.atualizaLista.bind(this)} />
                                    {/* {console.log("text", this.state.texto)} */}
                                </Row>
                            </div>
                        </NavHeader>
                    </Nav>
                </Container>

                <Results>
                    <div>
                        {filtradoUserId.map((item) => {
                            return (
                                <article key={item.id}>
                                    <p>User ID: {item.userId}</p>
                                    <p>ID: {item.id}</p>
                                    <p>Title: {item.title}</p>
                                    <strong>Body: {item.body}</strong>
                                    <StyledButton><Link to={`/posts/${item.id}`}>Mais detalhes</Link></StyledButton>
                                    < hr />
                                </article>
                            );
                        })}
                    </div>
                </Results>

            </div>
        );
    }
}
export default Lista;