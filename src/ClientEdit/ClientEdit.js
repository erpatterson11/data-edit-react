import React, { Component } from "react"

const dbData = [
    { id: 1, name: "Smith", age: 32, creditScore: 680 },
    { id: 2, name: "Kelly", age: 31, creditScore: 740 },
    { id: 3, name: "Johnson", age: 28, creditScore: 800 },
]

export default class ClientEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ users: dbData })
        }, 1000 * 3)
    }

    handleChange(id, el) {
        const users = [].concat(this.state.users)
        const userID = users.findIndex(x => x.id === id)
        if (+el.value) {
            el.value = +el.value
        }
        users[userID][el.name] = el.value
        this.setState({ users })
    }

    submitEdit(user) {
        console.log(user)
        if (!user.name) return console.error("User has no name!")
        if (!user.age) return console.error("User has no age")
        if (!user.creditScore) return console.error("User has no credit score!")

        if ("" + user.creditScore.length !== 3) return console.error("Credit score must be a three digit number")

        setTimeout(() => {
            alert(`User with id: ${user.id} was edited! Name: ${user.name} Age: ${user.age} Score: ${user.creditScore}`)
        }, 1000 * 2)
    }

    render() {
        const { users } = this.state
        return (
            <div>
                {users.length
                    ? users.map(user => (
                          <div className="" key={user.id}>
                              <input
                                  type="text"
                                  name="name"
                                  value={user.name}
                                  onChange={e => this.handleChange(user.id, e.target)}
                                  onBlur={e => this.submitEdit(user)}
                              />
                              <input
                                  type="number"
                                  name="age"
                                  value={user.age}
                                  onChange={e => this.handleChange(user.id, e.target)}
                                  onBlur={e => this.submitEdit(user)}
                              />
                              <input
                                  type="number"
                                  name="creditScore"
                                  value={user.creditScore}
                                  onChange={e => this.handleChange(user.id, e.target)}
                                  onBlur={e => this.submitEdit(user)}
                              />
                          </div>
                      ))
                    : null}
            </div>
        )
    }
}
