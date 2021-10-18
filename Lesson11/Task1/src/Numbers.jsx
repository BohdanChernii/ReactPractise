import React from 'react';

class Numbers extends React.Component {
    shouldComponentUpdate(nextProps){
        if(this.props.number === nextProps.number && this.props.title ===  nextProps.title){
            return false
        }
        return true;
    }
    render() {
        const {title, number} = this.props
        return (
            <div className="number">
            <span className="number__title">{title}</span>
            <span className="number__value">{number}</span>
          </div>  
        )
    }
}
export default Numbers;