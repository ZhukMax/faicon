import React from 'react';
import Faicon from './faicons.jsx';

class Stack extends React.Component {
    render() {
        let size = "lg",
            animate = "",
            flip = "",
            flip1 = "", flip2 = "",
            rotate = "",
            inverse = "",
            nameOfClass;

        {/*
         * Default size fa-lg
         */}
        if (this.props.size) {
            size = this.props.size;
        }

        {/*
         * Set animate for spin
         */}
        if (this.props.spin) {
            animate = " fa-spin";
        } else if (this.props.pulse) {
            animate = " fa-pulse";
        }

        {/*
         * Set flip for icon 1
         */}
        if (this.props.fh1) {
            flip1 = "fh";
        } else if (this.props.fv1) {
            flip1 = "fv";
        }

        {/*
         * Set flip for icon 2
         */}
        if (this.props.fh2) {
            flip2 = "fh";
        } else if (this.props.fv2) {
            flip2 = "fv";
        }

        nameOfClass = "fa-stack fa-" + size + animate;
        return (
            <span className={ nameOfClass }>
                <Faicon name={ this.props.name1 } stack="1" size="none" { flip1 } fh/>
                <Faicon name={ this.props.name2 } stack="2" size="none" { flip2 }/>
            </span>
        );
    }
}

export default Stack;
