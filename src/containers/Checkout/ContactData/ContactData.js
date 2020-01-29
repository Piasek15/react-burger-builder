import React, {Component} from "react";

import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.module.css'
import axios from "../../../axios-orders"
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Patrick',
                address: {
                    street: 'Hehehhehe 4',
                    zipCode: '23534',
                    country: 'Poland'
                },
                email: 'aaaa@hehehaha.pl'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({loading: false});
                console.log(error)
            });
        console.log(this.props);
        console.log(this.props.ingredients);
    };

    render() {
        let form = (
            <form>
                <Input type="text" name="name" placeholder="Your name"/>
                <Input type="email" name="email" placeholder="Your Mail"/>
                <Input type="text" name="street" placeholder="Street"/>
                <Input type="text" name="postal" placeholder="Postal Code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;