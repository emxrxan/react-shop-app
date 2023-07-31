import React, { Component } from 'react'

class Card extends Component {
    state = {  } 
    render() { 
        return <div>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center p-2">
                    <button onClick={this.props.onDelete} type="button" class="btn btn-primary btn-sm">-</button>
                    <span className='cardTitle'>{this.props.name}</span>
                    <span className="badge bg-primary rounded-pill">{this.props.amount}</span>
                </li> 
            </ul>
        </div>;
    }
}
 
export default Card;