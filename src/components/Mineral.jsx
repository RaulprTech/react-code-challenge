import React, {useState} from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import Icon from '../Icon';

export default (props) => {
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