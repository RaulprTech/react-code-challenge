import React, {useState} from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import Icon from '../Icon';


export default (props) => {
    let [owner, setOwner] = useState(props.owner);
    let [npri, setNpri] = useState(props.npri);
    
    return(
                <tr>
                    <td>
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                                <InputGroup.Text><Icon icon="indent"/></InputGroup.Text>
                            </InputGroup.Append>
                            <FormControl
                                placeholder="Luke Skywalker"
                                onChange={(ev)=>setOwner(ev.target.value)}
                            />
                        </InputGroup>
                    </td>
                    <td></td>
                    <td>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="0.5"
                                onChange={(ev)=>setNpri(ev.target.value)}
                            />
                            <InputGroup.Append>
                                <InputGroup.Text>%</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </td>
                    <td>
                    </td>
                    <td>
                        <Button variant="secondary" size="sm" active><Icon icon="remove"/></Button>
                    </td>
                </tr>
    )
  }
  