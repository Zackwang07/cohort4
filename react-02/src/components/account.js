import React from 'react';
import './account.css';

class AccountList extends React.Component {

    render() {
        
        let lowest = this.props.accounts[0];
        this.props.accounts.forEach(account => {
            if (parseInt(account.accountBalance) < parseInt(lowest.accountBalance)) {
                lowest = account;
            }
        });

        let highest = this.props.accounts[0];
        this.props.accounts.forEach(account => {
            if (parseInt(account.accountBalance) > parseInt(highest.accountBalance)) {
                highest = account;
            }
        });

        let sum = 0;
        this.props.accounts.forEach(account =>{
            sum += parseInt(account.accountBalance);
        })

        const list = this.props.accounts.map((account) => {
            return (
                <li key={account.key}>
                    <p>{account.accountName}</p>
                    <p>{account.accountBalance}</p>
                    <button id="btnSelect">Select</button>
                    <button id="btnDelete">Delete</button>
                </li>
            )
        })
        return (
            <div className="List">
                <div>
                    <p>Accounts List</p>
                </div>
                <ul>{list}</ul>
                <div>
                    <div>Lowest account:   <span id='spanLowest'>{lowest && lowest.accountName}</span></div>
                    <div>Highest account:  <span id='spanHighest'>{highest && highest.accountName}</span></div>
                    <div>Total Balance:   <span id='spanTotal'>{sum}</span></div>
                </div>
            </div>
        )
    }
}

class CreateAccount extends React.Component {
    render() {
        return (
            <div className="create">
                <div>Account Name<input id="newName" type="text" onChange={this.props.onChange} /></div>
                <div>Starting Balance<input id="newBalance" type="text" onChange={this.props.onChange} /></div>
                <button id="btnCreate" onClick={this.props.onClick}>Create</button>


            </div>
        )
    }
}

class Transaction extends React.Component {
    render() {
        return (
            <div className="details">
                <div>Account: {this.props.current && this.props.current.accountName}</div>
                <div>Balance: {this.props.current && this.props.current.accountBalance}</div><br />
                <input id="amount" type="text" onChange={this.props.onChange} /><br />
                <button id="btnDeposit" onClick={this.props.onClick}>Deposit</button>
                <button id="btnWithdrawl" onClick={this.props.onClick}>Withdrawl</button>
                <div></div><br />
            </div>
        )
    }
}

class Account extends React.Component {
    constructor() {
        super();
        this.state = {
            newName: null,
            newBalance: null,
            accounts: [],
            current: null,
            amount: null,
        }
    }


    handleChange = (e) => {
        let name = e.target.id;
        let value = e.target.value;

        this.setState({
            [name]: value
        })
    }

    handleClick = (e) => {
        if (e.target.id === "btnCreate") {
            let k = 1;
            if (this.state.accounts.length > 0) {
                k = this.state.accounts[this.state.accounts.length - 1].key + 1
            }

            const newAcount = { key: k, accountName: this.state.newName, accountBalance: this.state.newBalance }
            this.setState({
                accounts: this.state.accounts.concat([newAcount])
            })
        }
        if (e.target.id === "btnSelect") {
            this.setState({
                current: this.state.accounts.find((account) => account.accountName === e.target.parentElement.children[0].textContent)
            })
        }
        if (e.target.id === "btnDelete") {
            this.setState({
                accounts: this.state.accounts.filter((account) => account.accountName !== e.target.parentElement.children[0].textContent)
            })
        }
        if (e.target.id === "btnDeposit") {
            const newAccount = this.state.current;
            newAccount.accountBalance = parseInt(newAccount.accountBalance) + parseInt(this.state.amount);

            this.setState({
                current: newAccount,
            })
        }
        if (e.target.id === "btnWithdrawl") {
            const newAccount = this.state.current;
            newAccount.accountBalance = parseInt(newAccount.accountBalance) - parseInt(this.state.amount);

            this.setState({
                current: newAccount,
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Account</h1>
                <div className='box' onClick={this.handleClick}>
                    <AccountList accounts={this.state.accounts} />
                    <CreateAccount
                        onChange={this.handleChange}
                        newName={this.state.newName}
                        newBalance={this.state.newBalance}

                    />
                    <Transaction current={this.state.current} onChange={this.handleChange} />
                </div>

            </div>

        )

    }
}

export default Account;