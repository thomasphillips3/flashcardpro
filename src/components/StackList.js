import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stacks from '../data/stacks.json';

class StackList extends Component {
    render() {
        return (
            <div>
            {
                stacks.map(stack => {
                    return (
                        <Link to='/stack' key={stack.id}>
                            <h4>{stack.title}</h4>
                        </Link>
                    )
                })
            }
            </div>
        )
    }
}

export default StackList;
