import React, {useState} from 'react';
import { Button, Table, InputGroup, FormControl } from 'react-bootstrap';

import Icon from '../Icon';

import Minerals from '../components/Minerals';

const EditTractOwnership = ({ value = [], onChange = () => { } }) => {

  const [owner, setOwner] = useState("");
  const [interest, setInterest] = useState("");
  const [lease, setLease] = useState("");

  const [minerals, setMinerals] = useState(value);

  let min = [];

  function addMineral() {
    min.owner = owner;
    min.interest = interest;
    min.lease = lease;
    setMinerals(minerals => [...minerals, min]);
    min = []
  }


  const titles = ["Owner", "Mineral Interest", "NPRI", "Lease"];

  return (
    <Table responsive>
      <thead>
        <tr>
          {
            titles.map((title, i) => (<td><b>{title}</b></td>))
          }
          <td></td>
        </tr>
      </thead>
      <tbody>
        <Minerals minerals={minerals}/>
        <tr>
          <td>
            <FormControl
              placeholder="Luke Skywalker"
              onChange={onChange = (ev) => setOwner(ev.target.value) }
              //
            />
          </td>
          <td>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="0.5"
                onChange={(ev) => setInterest(ev.target.value)}
                //
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
                // 
              />
            </InputGroup>
          </td>
          <td>
            <Button 
              variant="secondary" 
              size="sm"
              active>
                <Icon icon="remove" />
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              variant="secondary"
              size="sm"
              onClick={(ev) => addMineral()}
              active>
              <Icon icon="add" />
              {" Add Mineral interest"}
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default EditTractOwnership;
