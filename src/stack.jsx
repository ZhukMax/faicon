import React from 'react';
import Faicon from './faicon.jsx';

class Stack extends React.Component {
    render() {
        let size = "lg",
            animate = "",
            fh1 = "", fv1 = "",
            fh2 = "", fv2 = "",
            rotate1 = "",
            rotate2 = "",
            inverse1 = false,
            inverse2 = false,
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
            fh1 = true;
            fv1 = false;
        } else if (this.props.fv1) {
            fh1 = false;
            fv1 = true;
        }

        {/*
         * Set flip for icon 2
         */}
        if (this.props.fh2) {
            fh2 = true;
            fv2 = false;
        } else if (this.props.fv2) {
            fh2 = false;
            fv2 = true;
        }

        {/*
         * Set rotate for icons
         */}
        if (this.props.rotate1) {
            rotate1 = this.props.rotate1;
        }
        if (this.props.rotate2) {
            rotate2 = this.props.rotate2;
        }

        {/*
         * Set inverse colors for icons
         */}
        if (this.props.inverse1) {
            inverse1 = true;
        }
        if (this.props.inverse2) {
            inverse2 = true;
        }

        nameOfClass = "fa-stack fa-" + size + animate;
        return (
            <span className={ nameOfClass }>
                <Faicon name={ this.props.name1 } stack="1" size="none" fh={ fh1 } fv={ fv1 } rotate={ rotate1 } inverse={ inverse1 }/>
                <Faicon name={ this.props.name2 } stack="2" size="none" fh={ fh2 } fv={ fv2 } rotate={ rotate2 } inverse={ inverse2 }/>
            </span>
        );
    }
}

export default Stack;
