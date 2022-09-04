import React from 'react';
import {Fragment} from 'react';
import './Packages.css';
import {useState} from 'react';

function Packages () {
  const Diseases = [
    'Live Cancer',
    'Oncology',
    'Cardiology',
    'Neurosurgery',
    'Cosmetic',
    'Spine Surgery',
    'Transplant',
    'Fertility',
  ];

  const Packages = [
    {
      subpart1: 'Physiology',
      subpart2: 'Angioplasty',
      cost1: '2,69,000',
      cost2: '1,69,000',
    },
    {
      subpart1: 'Surgery',
      subpart2: 'Chemotherapy',
      cost1: '2,69,000',
      cost2: '1,69,000',
    },
  ];

  const [myValue, setMyValue] = useState (Diseases[0]);
  const [treatment, setTreatment] = useState (Packages[0]);

  return (
    <Fragment>
      <div className="packages container-fluid row justify-content-center align-items-center text-center p-5">
        <h1>
          Find Customized Packages
        </h1>
        <div className="options">
          <div>
            <h4>Select Department</h4>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={e => setMyValue (e.target.value)}
              defaultValue={myValue}
            >
              <option value={1}>{Diseases[0]}</option>
              <option value={2}>{Diseases[1]}</option>
              <option value={3}>{Diseases[2]}</option>
              <option value={4}>{Diseases[3]}</option>
              <option value={5}>{Diseases[4]}</option>
              <option value={6}>{Diseases[5]}</option>
              <option value={7}>{Diseases[6]}</option>
              <option value={8}>{Diseases[7]}</option>
            </select>
          </div>
          <h4>Treatment Costs for {Diseases[myValue - 1]}</h4>
          <div>
            {Packages[0].subpart1}
            <br />
            {Packages[0].cost1}
          </div>
          <div>
            {Packages[0].subpart2}
            <br />
            {Packages[0].cost2}
          </div>;

        </div>
      </div>
    </Fragment>
  );
}

export default Packages;
