import React from 'react';

class Faicon extends React.Component {
    render() {
        let size = " fa-lg",
            name = this.props.name,
            animate = "",
            border = "",
            fixed= "",
            flip = "",
            rotate = "",
            inverse = "",
            stack = "",
            addClass = "",
            nameOfClass = "";

        {/*
          * Default size fa-lg
         */}
        if (this.props.size) {
            size = " fa-" + this.props.size;
        } else if (this.props.size === "none") {
            size = "";
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

        {/*
         * Set inverse colors for icon
         */}
        if (this.props.inverse) {
            inverse = " fa-inverse";
        }

        if (this.props.stack) {
            stack = " fa-stack-" + this.props.stack + "x";
        }

        if (this.props.addClass) {
            addClass = " " + this.props.addClass;
        }

        nameOfClass = "fa fa-" + name
            + size + animate + stack + rotate
            + border + fixed + flip + inverse
            + addClass;
        
        return (
            <i className={ nameOfClass } title={ this.props.title } aria-hidden="true"></i>
        );
    }
}

export default Faicon;
