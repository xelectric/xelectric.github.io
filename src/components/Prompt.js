import React from 'react';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import Snackbar from 'material-ui/Snackbar';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    emailField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        height: 100,
    },
});

const Loading = () => <div className="loading-screen">
    <CircularProgress className="loading-circle" size={100} />
    <div className="loading-blur" />
</div>


class Prompt extends React.Component {
    state = {
        type: 'general',
        success: '',
        loading: false,
        message: '',
        email: '',
    };

    formUrl = "https://script.google.com/macros/s/AKfycbz74fkTVR53al8dWN3p1OiQ2Oz4TdwCAnSlpWTJVyYCI77_Q6I/exec?action=post";

    handleClearSuccess = () => {
        this.setState({
            success: '',
        })
    }

    handleChange = key => ({ target: { value } }) => {
        this.setState({ [key]: value });
    };

    handleRequest = () => {
        const { email, type, message } = this.state;
        const payload = JSON.stringify({ email, message, type });

        fetch(this.formUrl, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: payload,
            mode: 'no-cors'
        }).then(data => {
            this.setState({
                loading: false,
                success: 'Done'
            })
        })
    }

    handleSubmit = () => {
        this.setState({
            loading: true,
        }, this.handleRequest)
    }

    render() {
        const { classes } = this.props;
        const bannerStyle = !this.props.showBanner ? { display: 'none' } : {}

        return (
            <div style={bannerStyle}>
                <div className="loading-blur" />
                {this.state.loading && <Loading />}
                <Snackbar
                    open={Boolean(this.state.success)}
                    onClose={this.handleClearSuccess}
                    message={<span id="message-id">Success</span>}
                />
                <div className="prompt-container">
                    <div className="close-icon" onClick={this.props.toggleBanner}>X</div>
                    <div className="prompt-heading">
                        <h3>This Website is under construction</h3>
                        <h4>For more inquiries, please fill out the form below</h4>
                    </div>
                    <div className="prompt-form">
                        <FormControl component="fieldset" required className={classes.formControl}>
                            <FormLabel component="legend">Inquiry Type</FormLabel>
                            <RadioGroup
                                aria-label="inquiry"
                                className={classes.group}
                                value={this.state.type}
                                onChange={this.handleChange('type')}
                            >
                                <FormControlLabel value="general" control={<Radio />} label="General Inquiry" />
                                <FormControlLabel value="residential" control={<Radio />} label="Residential" />
                                <FormControlLabel value="customwork" control={<Radio />} label="Custom Work" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <div>
                            <TextField
                                type="email"
                                label="Email"
                                fullWidth
                                onChange={this.handleChange('email')}
                                value={this.state.email}
                                className={classes.emailField}
                                margin="normal"
                            />
                            <TextField
                                label="Message"
                                multiline
                                fullWidth
                                rows={50}
                                onChange={this.handleChange('message')}
                                value={this.state.message}
                                helperText="Enter your inquiries here"
                                className={classes.textField}
                                margin="normal"
                            />
                        </div>
                    </div>
                    <div className="prompt-submit">
                        <Button variant="raised" fullWidth color="primary" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div >
        )
    }
}

export default withStyles(styles)(Prompt);