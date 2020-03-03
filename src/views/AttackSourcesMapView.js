import React from 'react';
import {Container, Grid, Card} from "semantic-ui-react";
import PageHeader from "../components/PageHeader"
import AttackSourceMap from "../components/AttackSourceMap";
import NavSidebar from "../components/sidebar/NavSidebar";
import DatePicker from "react-datepicker";

class AttackSourcesMapView extends React.Component{
    state = {
        loading : true,
        attacks : null,
        startDate: null,
        endDate: null
    };
    handleChangeStart = date => {
        this.setState({
            startDate: date
        });
    };
    handleChangeEnd = date => {
        this.setState({
            endDate: date
        });
    };
    async componentDidMount(){
        try {
            const url = "http://127.0.0.1:8000/api/attacks";
            const response = await fetch(url);
            const data = await response.json();
            this.setState({attacks: data.results, loading: false });
            setInterval(async () => {
                const url = "http://127.0.0.1:8000/api/attacks";
                const response = await fetch(url);
                const data = await response.json();
                this.setState({attacks: data.results, loading: false });
            }, 1000);
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        if(this.state.loading ){
            return(
                <div>
                    <PageHeader/>
                    <Container className="top-gap" textAlign="center">
                        <p>Loading ...</p>
                    </Container>
                </div>
            );
        }
        if(!this.state.attacks ){
            return (
                <div>
                    <PageHeader/>
                    <Container className="top-gap" textAlign="center">
                        <p>There is no attack!</p>
                    </Container>
                </div>
            );
        }
        return (
            <div>
                <PageHeader/>
                <Container fluid>
                    <Grid>
                        <Grid.Row className="p-2">
                            <Grid.Column width={4}>
                                <NavSidebar/>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Card fluid raised>
                                    <Card.Content>
                                        <Card.Header>Attack Sources Map</Card.Header>
                                    </Card.Content>
                                    <Card.Content>
                                        <div>
                                            <label>from: </label>
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChangeStart}
                                                isClearable
                                                dateFormat="yyyy-MM-dd"
                                            />
                                        </div>
                                        <div>
                                            <label> To: </label>
                                            <DatePicker
                                                selected={this.state.endDate}
                                                onChange={this.handleChangeEnd}
                                                isClearable
                                                dateFormat="yyyy-MM-dd"
                                            />
                                        </div>
                                        <AttackSourceMap
                                            attacks={this.state.attacks}
                                            startDate={this.state.startDate}
                                            endDate={this.state.endDate}/>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}
export default AttackSourcesMapView;