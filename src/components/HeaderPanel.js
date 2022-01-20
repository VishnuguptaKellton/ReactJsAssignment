import Panel from 'react-bootstrap/lib/Panel'
import React from 'react';

const HeaderPanel = ({title }) => {

    return(

        <Panel.Heading>
        <Panel.Title componentClass="h3">{title}</Panel.Title>
       </Panel.Heading>
    )

}

export default HeaderPanel;


