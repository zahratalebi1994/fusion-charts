import React from 'react'
import {Card, List} from 'semantic-ui-react'

class NavSidebar extends React.Component{
    render() {
        return(
            <Card fluid>
                <Card.Content>
                    <List animated>
                        <List.Item as='a' href="/"  className="text-grey">Dashboard</List.Item>
                        <List.Item as='a' href="/attack-frequency"  className="text-grey">Attack Frequncy</List.Item>
                        <List.Item as='a' href="/attack-sources-map"  className="text-grey">Attack Sources Map</List.Item>
                        <List.Item as='a' href="/top-victim-servers" className="text-grey">Top Victim Servers</List.Item>
                    </List>
                </Card.Content>
            </Card>
        );
    }
}

export default NavSidebar;