import React from 'react';
import 'font-awesome/css/font-awesome.css';

class Faicon extends React.Component {
    render() {
        let size,
            name,
            nameOfClass;

        name = this.props.name;

        if (!this.props.size) {
            size = "lg";
        } else {
            size = this.props.size;
        }

        nameOfClass = "fa fa-" + name + " fa-" + size;
        return (
            <i className={ nameOfClass }> </i>
        );
    }
}

export default Faicon;
