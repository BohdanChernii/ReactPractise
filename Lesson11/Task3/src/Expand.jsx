import React from 'react';
class Expand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
        
    }
    showText = () =>{
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render() {
        const {title, children} = this.props;
        return (
            <div className="expand border">
            <div className="expand__header">
              <span className="expand__title">{title}</span>
              <button className="expand__toggle-btn" onClick={this.showText}>
                  {this.state.isOpen ?(
              <i className="fas fa-arrow-up"></i>):(
              <i className="fas fa-arrow-down"></i>)
                  }
              </button>
            </div>
            <div className="expand__content">
                {this.state.isOpen ?
                (children):null}             
            </div>
          </div>
        )
    }
}
export default Expand