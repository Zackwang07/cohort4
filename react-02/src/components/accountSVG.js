import React from 'react';

class AccountSVG extends React.Component {
    constructor() {
        super();
        this.state = {
            fill: "#000000"
        }
    }
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="100px"
                height="100px"
                className={this.props.className}
                id={this.props.id}
            >
            <path fill={this.state.fill} d="M61,52H60V17a3.009,3.009,0,0,0-3-3H55V12h1a1,1,0,0,0,.96-.73.984.984,0,0,0-.44-1.12l-13-8A.98.98,0,0,0,43,2H21a1,1,0,0,0-1,1V14H7a3.009,3.009,0,0,0-3,3V52H3a1,1,0,0,0-1,1v4a5,5,0,0,0,5,5H57a5,5,0,0,0,5-5V53A1,1,0,0,0,61,52ZM54,16h3a1,1,0,0,1,1,1V52H56V25a1,1,0,0,0-1-1H54Zm0,10v2H32V26ZM34,24V16h2v8Zm4,0V16h2v8Zm4,0V16h2v8Zm4,0V16h2v8Zm4,0V16h2v8Zm3-10H33V12H53Zm-.53-4H33.53L43,4.17ZM22,4H39.47l-9.99,6.15a.984.984,0,0,0-.44,1.12A1,1,0,0,0,30,12h1v2H22Zm0,12H32v2H22Zm0,4H32v4H31a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H54V52H10V20H20v2.06a9,9,0,1,0,2,0ZM42,54v1a1,1,0,0,1-1,1H23a1,1,0,0,1-1-1V54ZM21,24a7,7,0,1,1-7,7A7.008,7.008,0,0,1,21,24ZM6,17a1,1,0,0,1,1-1H20v2H9a1,1,0,0,0-1,1V52H6ZM60,57a3.009,3.009,0,0,1-3,3H7a3.009,3.009,0,0,1-3-3V54H20v1a3.009,3.009,0,0,0,3,3H41a3.009,3.009,0,0,0,3-3V54H60Z"/>
            <path d="M24,33a3.01,3.01,0,0,1-2,2.82V37H20V35.82A3.01,3.01,0,0,1,18,33h2a1,1,0,1,0,1-1,3,3,0,0,1-1-5.82V25h2v1.18A3.01,3.01,0,0,1,24,29H22a1,1,0,1,0-1,1A3.009,3.009,0,0,1,24,33Z"/>
            <path d="M31,44H30V41a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1v3a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V45A1,1,0,0,0,31,44ZM14,44V42h2v2Zm4,4H16V46h2Zm0-6h2v2H18Zm4,6H20V46h2Zm0-6h2v2H22Zm4,6H24V46h2Zm0-6h2v2H26Zm4,6H28V46h2Z"/>
            <path d="M51.63,43.99l-5.46-4.26,1.32-1.32a1,1,0,0,0-.62-1.7L39.09,36a1.037,1.037,0,0,0-.8.29,1.024,1.024,0,0,0-.29.8l.71,7.78a1.01,1.01,0,0,0,.66.85,1,1,0,0,0,1.04-.23l1.32-1.32,4.26,5.46a1.008,1.008,0,0,0,.73.39h.06a1.007,1.007,0,0,0,.71-.29l4.24-4.24a1.022,1.022,0,0,0,.29-.77A1.008,1.008,0,0,0,51.63,43.99Zm-4.76,3.52-4.25-5.47a1.032,1.032,0,0,0-.73-.38h-.06a.99.99,0,0,0-.71.29l-.61.61L40.1,38.1l4.46.41-.61.61a.994.994,0,0,0-.29.77,1.032,1.032,0,0,0,.38.73l5.47,4.25Z"/>
  
            </svg >

        )
    }
}

export default AccountSVG;