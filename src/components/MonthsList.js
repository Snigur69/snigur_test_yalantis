import React from "react";
import axios from "axios";
import Month from "./Month";
import styles from "./Monthlist.module.css";

class MonthsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersByMonth: [],
            userList: [],
        };
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    async componentDidMount() {
        let usersArray = [];
        // Получаем всех пользователей и записываем во временную переменную
        await axios
            .get(
                "https://yalantis-react-school-api.yalantis.com/api/task0/users"
            )
            .then(function (response) {
                usersArray = response.data;
            })
            .catch(function (error) {
                throw new Error("Error with Users API");
            });

        // Создаем массив с месяцами (0 - январь, 1 - февраль и тд.)
        let months = [];
        for (let i = 0; i < 12; i++) {
            months[i] = [];
        }
        this.setState({ users: usersArray });

        // Добавляем в массив с масяцами пользователей
        this.state.users.forEach((elem) => {
            elem.month = new Date(elem.dob).getMonth();
            months[elem.month].push(elem);
        });
        this.setState({ usersByMonth: months });
    }
    mouseEnter(e) {
        console.log(e.target.id);
        if (e.target.id) {
            this.setState({ userList: this.state.usersByMonth[e.target.id] });
        }
    }

    mouseLeave() {
        this.setState({ userList: [] });
    }

    render() {
        return (
            <div>
                <div className="months_list">
                    {this.state.usersByMonth.map((el, ind) => {
                        return (
                            <Month
                                key={ind}
                                users={el}
                                month={ind}
                                mouseEnter={this.mouseEnter}
                                mouseLeave={this.mouseLeave}
                            />
                        );
                    })}
                </div>
                <div className={styles.userList}>
                    <p>Люди, які народилися у обраному місяці: </p>
                    <ol>
                        {this.state.userList.map((el, ind) => {
                            return (
                                <li key={ind}>
                                    ID: {el.id}. {el.firstName} {el.lastName}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default MonthsList;
