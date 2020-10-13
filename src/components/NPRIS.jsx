import React, {useEffect, useState} from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

import NPRI from './NPRI';
import Icon from '../Icon';

export default (props) => {
    const [ownerNPRI, setOwnerNPRI] = useState("");
    const [npri, setNpri] = useState("");
    const [values, setValues] = useState([]);

    let min = [];

    function newNPRI(){
        min.owner = ownerNPRI;
        min.npri = npri;
        setValues(values  =>  [ ... values, min]);
    }


    return(
        <>
            {
                values.map((li, i) => {
                    return (
                        <NPRI key={i} owner={li.owner} npri={li.npri} />                       
                    )
                })
            }
            <tr>
                <td>
                    <InputGroup className="mb-3">
                        <InputGroup.Append>
                            <InputGroup.Text><Icon icon="indent" /></InputGroup.Text>
                        </InputGroup.Append>
                        <FormControl
                            placeholder="Luke Skywalker"
                            onChange={(ev) => setOwnerNPRI(ev.target.value)}
                        />
                    </InputGroup>
                </td>
                <td></td>
                <td>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="0.5"
                            onChange={(ev) => setNpri(ev.target.value)}
                        />
                        <InputGroup.Append>
                            <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </td>
                <td>
                </td>
                <td>
                    <Button variant="secondary" size="sm" active><Icon icon="remove" /></Button>
                </td>
            </tr>
            <tr>
                <td>
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={(ev) => newNPRI()}
                        active>
                        <Icon icon="add" />
                        {" Add NPRI"}
                    </Button>
                </td>
            </tr>
        </>
    )
}