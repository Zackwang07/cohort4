import React from 'react';

class CitySVG extends React.Component {
    constructor() {
        super();
        this.state = {
            fill: "#000000"
        }
    }
    render() {
        return (
            <svg 
            id={this.props.id}
            className = {this.props.className} 
            height="100px" 
            viewBox="0 0 64 64" 
            width="100px" 
            xmlns="http://www.w3.org/2000/svg">
            <g>
            <path d="m41 51h2v8h-2z" />
            <path d="m45 51h2v8h-2z" />
            <path d="m55 35.99v-20.99h-2v-10.181l-2 .333v-2.152h-2v2.486l-2 .333v-4.819h-2v5.153l-2 .333v-3.486h-2v3.819l-2 .333v7.848h-2v10h-8v-14h-4v-6h-2v-4h-10v4h-2v6h-4v18.685c-2.072.989-3.581 2.962-3.92 5.315h-2.08v28h62v-28.153zm-14-27.143 10-1.667v7.82h-10zm-2 8.153h14v19.276l-6 .857v5.201l-3-4-3 4v-17.334h-2zm0 12h-14v-2h14zm0 20h10v12h-10zm1-2 4-5.333 4 5.333zm-25-44h6v2h-6zm-2 4h10v4h-10zm-4 6h18v12h-4v4.685c-.911-.434-1.926-.685-3-.685h-10c-.34 0-.672.033-1 .08zm1 18h10c2.414 0 4.434 1.721 4.899 4h-19.798c.465-2.279 2.485-4 4.899-4zm17 6v2h-24v-2zm-4 18h-4v-4h4zm-6 0h-4v-4h4zm0 2v4h-4v-4zm2 0h4v4h-4zm4-8h-4v-4h4zm-6 0h-4v-4h4zm-6 0h-4v-4h4zm-4 2h4v4h-4zm0 6h4v4h-4zm18 4v-18h-20v18h-2v-20h24v20zm1.92-26c-.216-1.502-.906-2.853-1.92-3.889v-.111h14v14l-2 2.667v13.333h-8v-26zm34.08 26h-10v-13.333l-2-2.667v-6.133l12-1.714z" />
            <path d="m31 33h2v2h-2z" />
            <path d="m31 57h2v2h-2z" />
            <path d="m31 37h2v2h-2z" />
            <path d="m31 53h2v2h-2z" />
            <path d="m31 45h2v2h-2z" />
            <path d="m31 41h2v2h-2z" />
            <path d="m31 49h2v2h-2z" />
            <path d="m35 41h2v2h-2z" />
            <path d="m35 37h2v2h-2z" />
            <path d="m35 33h2v2h-2z" />
            <path d="m57 57h2v2h-2z" />
            <path d="m57 49h2v2h-2z" />
            <path d="m57 53h2v2h-2z" /><path d="m57 45h2v2h-2z" /><path d="m57 41h2v2h-2z" /><path d="m53 53h2v2h-2z" /><path d="m53 41h2v2h-2z" /><path d="m53 49h2v2h-2z" /><path d="m53 57h2v2h-2z" /><path d="m53 45h2v2h-2z" /><path d="m23 15h2v2h-2z" /><path d="m19 15h2v2h-2z" /><path d="m11 15h2v2h-2z" /><path d="m15 15h2v2h-2z" /><path d="m15 19h2v2h-2z" /><path d="m23 19h2v2h-2z" /><path d="m11 19h2v2h-2z" /><path d="m19 19h2v2h-2z" /><path d="m11 23h2v2h-2z" /><path d="m15 23h2v2h-2z" /><path d="m19 23h2v2h-2z" /><path d="m49 19h2v2h-2z" /><path d="m45 19h2v2h-2z" /><path d="m41 19h2v2h-2z" /><path d="m49 23h2v2h-2z" /><path d="m41 23h2v2h-2z" /><path d="m45 23h2v2h-2z" /><path d="m45 35h2v2h-2z" /><path d="m45 31h2v2h-2z" /><path d="m45 27h2v2h-2z" /><path d="m49 31h2v2h-2z" /><path d="m49 27h2v2h-2z" />
            </g>
            </svg>

        )
    }
}

export default CitySVG;