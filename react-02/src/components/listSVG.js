import React from 'react';

class ListSVG extends React.Component {
    constructor() {
        super();
        this.state = {
            fill: "#000000"
        }
    }
    render() {
        return (
            <div>

            <svg  
            
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 480 480" 
            width="100px"
            height="100px"
            className={this.props.className}
            id={this.props.id}
            >
		    <path fill={this.state.fill} d="M415.928,88c0.019-2.111-0.798-4.144-2.272-5.656l-80-80c-1.505-1.484-3.543-2.302-5.656-2.272V0H88
			C74.745,0,64,10.745,64,24v432c0,13.255,10.745,24,24,24h304c13.255,0,24-10.745,24-24V88H415.928z M336,27.312L388.688,80H344
			c-4.418,0-8-3.582-8-8V27.312z M400,456c0,4.418-3.582,8-8,8H88c-4.418,0-8-3.582-8-8V24c0-4.418,3.582-8,8-8h232v56
			c0,13.255,10.745,24,24,24h56V456z"/>
		    <path d="M144,216c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S157.255,216,144,216z M144,248c-4.418,0-8-3.582-8-8
			s3.582-8,8-8s8,3.582,8,8S148.418,248,144,248z"/>
	        <rect x="200" y="232" width="160" height="16"/>
		    <path d="M144,136c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S157.255,136,144,136z M144,168c-4.418,0-8-3.582-8-8
			s3.582-8,8-8s8,3.582,8,8S148.418,168,144,168z"/>	
		    <rect x="200" y="152" width="160" height="16"/>
		    <path d="M144,296c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S157.255,296,144,296z M144,328c-4.418,0-8-3.582-8-8
			s3.582-8,8-8s8,3.582,8,8S148.418,328,144,328z"/>
			<rect x="200" y="312" width="160" height="16"/>
	        <path d="M144,376c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S157.255,376,144,376z M144,408c-4.418,0-8-3.582-8-8
			s3.582-8,8-8s8,3.582,8,8S148.418,408,144,408z"/>
	        <rect x="200" y="392" width="160" height="16"/>
	        </svg>
            <br/>
            <div className="titles" id={this.props.id}>
                Linked list
            </div>
            </div>
        )
    }
}

export default ListSVG;