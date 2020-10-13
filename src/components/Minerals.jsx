import React, {useEffect, useState} from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

import Icon from '../Icon';
import NPRI from './NPRI';

const Mineral = (props) => {
    const [owner, setOwner] = useState(props.owner);
    const [interest, setInterest] = useState(props.interest);
    const [lease, setLease] = useState(props.lease);

    return(
        <>
            <td>
                <FormControl
                    placeholder="Luke Skywalker"
                    onChange={(ev) => setOwner(ev.target.value)}
                    value={owner}
                />
            </td>
            <td>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="0.5"
                        onChange={(ev) => setInterest(ev.target.value)}
                        value={interest}
                    />
                    <InputGroup.Append>
                        <InputGroup.Text>%</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </td>
            <td></td>
            <td>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="tatooine lease"
                        onChange={(ev) => setLease(ev.target.value)}
                        value={lease}
                    />
                </InputGroup>
            </td>
        </>
    )
}


const NPRIS = (props) => {
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
                        <NPRI key={i} owner={ownerNPRI} npri={npri} />                       
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

export default ({minerals}) => {
    const [value, setValue] = useState(minerals);

    function removeMineral(li) {
        let pos = minerals.indexOf(li);
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
                                    onClick={(ev)=>removeMineral(li)}
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