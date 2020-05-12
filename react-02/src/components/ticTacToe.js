import React from 'react';
import './ticTacToe.css'

function Square(props) {
    return (
        <button className='square' onClick={props.onClick} >{props.value}</button>
    )
}

class Board extends React.Component {

    renderSquare(i) {
        return <Square value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        // location={this.location(i)}
        />;
    }



    render() {
        const boardSize = 3;
        let squares = [];
        for (let i = 0; i < boardSize; ++i) {
            let row = [];
            for (let j = 0; j < boardSize; ++j) {
                row.push(this.renderSquare(i * boardSize + j));
            }
            squares.push(<div key={i} className="board-row">{row}</div>);
        }

        return (
            <div>{squares}</div>
        );
    }
}

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [
                { squares: Array(9).fill(null), lastMove: null }
            ],
            stepNumber: 0,
            xIsNext: true,
            selected: null,
            isReversed: false,

        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{ squares: squares, lastMove: this.location(i) }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        })
    }

    location(i) {
        if (i === 0) { return 'col:1 row:1' } else
            if (i === 1) { return 'col:2 row:1' } else
                if (i === 2) { return 'col:3 row:1' } else
                    if (i === 3) { return 'col:1 row:2' } else
                        if (i === 4) { return 'col:2 row:2' } else
                            if (i === 5) { return 'col:3 row:2' } else
                                if (i === 6) { return 'col:1 row:3' } else
                                    if (i === 7) { return 'col:2 row:3' } else
                                        if (i === 8) { return 'col:3 row:3' }
    }

    jumpTo(move) {

        this.setState({
            stepNumber: move,
            xIsNext: (move % 2) === 0,
            selected: move,
        })
    }

    sortOrder() {
        this.setState({
            isReversed: !this.state.isReversed
        })
    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move, ) => {

            const desc = move ? 'Go to move #' + move + ' ' + step.lastMove : 'Go to game start';

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}
                        style={{ 'fontWeight': this.state.selected === move ? 'bold' : 'normal' }}
                    >
                        {desc}
                    </button>
                </li>
            )
        })

        let status;
        if (winner) {
            status = 'Winner: ' + winner
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={() => this.sortOrder()}>toggle</button>
                    {this.state.isReversed ? <ol reversed>{moves.reverse()}</ol> : <ol>{moves}</ol>}
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null;
}

export default Game;


// https://github.com/kelanwu/react-tic-tac-toe