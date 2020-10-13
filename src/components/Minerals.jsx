import React, {useEffect, useState} from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

import Icon from '../Icon';
import Mineral from './Mineral';
import NPRIS from './NPRIS';


export default ({minerals}) => {
    const [value, setValue] = useState(minerals);


    let newMinerals = [];

    function removeMineral(i) {
        let pos = minerals.indexOf(i);
        let newMinerals = minerals.splice(pos, 1);
        setValue(newMinerals);
      }

    return(
        <>
            {
                minerals.map((li, i) => {
                    return (
                        <>
                        <tr>
                            <Mineral key={i} owner={li.owner} interest={li.interest} lease={li.lease} />
                            <td>
                                <Button 
                                    variant="secondary"
                                    size="sm"
                                    onClick={(ev)=>removeMineral()}
                                    active>
                                        <Icon icon="remove" />
                                </Button>
                            </td>
                        </tr>
                        <NPRIS/>
                        </>
                    )
                })
            }
        </>
    )
}