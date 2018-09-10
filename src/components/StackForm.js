import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addStack } from '../actions';
import { Form, FormGroup, FormControl, ControlLabel, syncButton, Button } from 'react-bootstrap';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'CARDS';

class StackForm extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      cards: []
    };
  }

  componentDidMount() {
    this.setState({ cards: read_cookie(cookie_key) });
  }
  addCard() {
    const { cards } = this.state;

    cards.push({ id: cards.length, prompt: "", answer: "" });
    this.setState({ cards });
    bake_cookie(cookie_key, this.state.cards);
  }

  updateCard(event, index, part) {
    const { cards } = this.state;
    cards[index][part] = event.target.value;
    this.setState({ cards });
    bake_cookie(cookie_key, this.state.cards);
  }

  addStack() {
    this.props.addStack(this.state);
    bake_cookie(cookie_key, this.state.cards);
  }

  render() {
    return (
      <div>
        <Link to="/" className="link-home">
          <h4>Home</h4>
        </Link>
        <h4>Create a New Stack</h4>
        <br />
        <Form inline>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>{" "}
            <FormControl
              onChange={event => this.setState({ title: event.target.value })}
            />
          </FormGroup>

          {this.state.cards.map((card, index) => {
            return (
              <div key={card.id}>
                <br />
                <FormGroup>
                  <ControlLabel>Prompt:</ControlLabel>{" "}
                  <FormControl
                    onChange={event => this.updateCard(event, index, "prompt")}
                  />{" "}
                  <ControlLabel>Answer:</ControlLabel>{" "}
                  <FormControl
                    onChange={event => this.updateCard(event, index, "answer")}
                  />
                </FormGroup>
              </div>
            );
          })}
        </Form>
        <br />
        <Button onClick={() => this.addCard()}>Add Card</Button>{" "}
        <Button onClick={() => this.addStack()}>Add Stack</Button>
      </div>
    );
  }
}

export default connect(null, { addStack })(StackForm);
