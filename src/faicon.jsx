import React from 'react';
import 'font-awesome/css/font-awesome.css';

class Faicon extends React.Component {
    render() {
        let size = "lg",
            name = this.props.name,
            animate = "",
            border = "",
            fixed= "",
            flip = "",
            rotate = "",
            nameOfClass;

        {/*
          * Default size fa-lg
         */}
        if (this.props.size) {
            size = this.props.size;
        }

        {/*
          * Set animate for icon
        */}
        if (this.props.spin) {
            animate = " fa-spin";
        } else if (this.props.pulse) {
            animate = " fa-pulse";
        }

        {/*
          * Set border for icon
        */}
        if (this.props.border) {
            border = " fa-border";
        }

        {/*
         * Set fixed size for icon
         */}
        if (this.props.fixed) {
            fixed = " fa-fw";
        }

        {/*
         * Set flip for icon
         */}
        if (this.props.fh) {
            flip = " fa-flip-horizontal";
        } else if (this.props.fv) {
            flip = " fa-flip-vertical";
        }

        {/*
         * Set rotate for icon
         */}
        if (this.props.rotate) {
            rotate = " fa-rotate-" + this.props.rotate;
        }

        nameOfClass = "fa fa-" + name + " fa-" + size + animate + border + fixed + flip;
        return (
            <i className={ nameOfClass }> </i>
        );
    }
}

export default Faicon;
