var React = require('react');
var Panel = require('../../components/Panel/Panel');
var PanelCollapse = require('../../components/PanelCollapse/PanelCollapse');
var Populator = require('../../components/Populator/Populator');
module.exports = {
    addForm: function(self) {
        return [
            <form role="form" key='1' onSubmit={self.saveToDB}>
                <PanelCollapse target="profile" message="Profile Details"/>
                <div  id='profile' className='collapse'>
                    <Panel message="Customer Details" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">First Name 1</label>
                            <input type="text" className="form-control"  id="firstName" value={self.state.firstName} onChange={self.append} required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">First Name 2</label>
                            <input type="text" className="form-control"  id="firstName2" value={self.state.firstName2} onChange={self.append} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">First Name 3</label>
                            <input type="text" className="form-control"  id="firstName3" value={self.state.firstName3} onChange={self.append} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Last Name 1</label>
                            <input type="text" className="form-control"  id="lastName" value={self.state.lastName} onChange={self.append} required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Last Name 2</label>
                            <input type="text" className="form-control"  id="lastName2" value={self.state.lastName2} onChange={self.append} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Last Name 3</label>
                            <input type="text" className="form-control"  id="lastName3" value={self.state.lastName3} onChange={self.append} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-6">
                            <label htmlFor="">Middle Name</label>
                            <input type="text" className="form-control"  id="middleName" value={self.state.middleName} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="">Alias Name</label>
                            <input type="text" className="form-control"  id="aliasName" value={self.state.aliasName} onChange={self.append}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Date Of Birth</label>
                            <input type="date" className="form-control"  id="dob" value={self.state.dob} onChange={self.append} required/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">SSN Number 1</label>
                            <input type="text" className="form-control"  id="ssn" value={self.state.ssn} onChange={self.append} required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">SSN Number 2</label>
                            <input type="text" className="form-control"  id="ssn2" value={self.state.ssn2} onChange={self.append} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">SSN Number 3</label>
                            <input type="text" className="form-control"  id="ssn3" value={self.state.ssn3} onChange={self.append} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Passport 1</label>
                            <input type="text" className="form-control"  id="passportNumber" value={self.state.passportNumber} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Passport 2</label>
                            <input type="text" className="form-control"  id="passportNumber2" value={self.state.passportNumber2} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Passport 3</label>
                            <input type="text" className="form-control"  id="passportNumber3" value={self.state.passportNumber3} onChange={self.append}/>
                        </div>
                    </div>
                    <Panel message="Additional Details" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Employer Name 1</label>
                            <input type="text" className="form-control"  id="employerName1" value={self.state.employerName1} onChange={self.append} required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Employer Name 2 </label>
                            <input type="text" className="form-control"  id="employerName2" value={self.state.employerName2} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Employer Name 3</label>
                            <input type="text" className="form-control"  id="employerName3" value={self.state.employerName3} onChange={self.append}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Product Name 1</label>
                            <input type="text" className="form-control"  id="productName1" value={self.state.productName1} onChange={self.append} required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Product Name 2 </label>
                            <input type="text" className="form-control"  id="productName2" value={self.state.productName2} onChange={self.append}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Collection Successful</label>
                            <select className='form-control' id="productName3" value={self.state.productName3} onChange={self.append}>
                                <option value='1'>Yes</option>
                                <option value='0'>No</option>
                            </select>
                            {/*<input type="text" className="form-control"  id="productName3" value={self.state.productName3} onChange={self.append}/>*/}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-8">
                            <label htmlFor="">Remarks</label>
                            <textarea  className="form-control"  id="remarks" value={self.state.remarks} onChange={self.append} required/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-8">
                            {/* <button type="button" className="btn btn-default">Save</button>*/}
                        </div>
                    </div>
                </div>
                <PanelCollapse target="contact" message="Contact Details"/>
                <div  id='contact' className='collapse'>
                    <Panel message="Home Phone Details" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 1</label>
                            <input type="text" className="form-control"  id="homePhone1" value={self.state.homePhone1} onChange={self.append} required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 2</label>
                            <input type="text" className="form-control"  id="homePhone2" value={self.state.homePhone2} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 3</label>
                            <input type="text" className="form-control"  id="homePhone3" value={self.state.homePhone3} onChange={self.append}/>
                        </div>
                    </div>
                    <Panel message="Handphone Details" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 1</label>
                            <input type="text" className="form-control"  id="mobilePhone1" value={self.state.mobilePhone1} onChange={self.append} required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 2 </label>
                            <input type="text" className="form-control"  id="mobilePhone2" value={self.state.mobilePhone2} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 3</label>
                            <input type="text" className="form-control"  id="mobilePhone3" value={self.state.mobilePhone3} onChange={self.append}/>
                        </div>
                        {/*<div className="form-group col-md-4">
                            <label htmlFor="">Phone 4</label>
                            <input type="text" className="form-control"  id="mobilePhone4" value={self.state.mobilePhone4} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 5</label>
                            <input type="text" className="form-control"  id="mobilePhone5" value={self.state.mobilePhone5} onChange={self.append}/>
                        </div>*/}
                    </div>
                    <Panel message="Work Phone Details" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 1</label>
                            <input type="text" className="form-control"  id="workPhone1" value={self.state.workPhone1} onChange={self.append} required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 2</label>
                            <input type="text" className="form-control"  id="workPhone2" value={self.state.workPhone2} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 3</label>
                            <input type="text" className="form-control"  id="workPhone3" value={self.state.workPhone3} onChange={self.append}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-8">
                            {/* <button type="button" className="btn btn-default">Save</button>*/}
                        </div>
                    </div>
                </div>
                <PanelCollapse target="address" message="Address Details"/>
                <div  id='address' className='collapse'>
                    <Panel message="Address 1" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control"  id="currentAddress1" value={self.state.currentAddress1} onChange={self.append} required/>
                        </div>
                        {/*<div className="form-group col-md-4">
                            <label htmlFor="">Line 2 </label>
                            <input type="text" className="form-control"  id="secondLine1" value={self.state.secondLine1} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 3</label>
                            <input type="text" className="form-control"  id="thirdLine1" value={self.state.thirdLine1} onChange={self.append}/>
                        </div>*/}
                    </div>
                    <Panel message="Address 2" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control"  id="currentAddress2" value={self.state.currentAddress2} onChange={self.append} />
                        </div>
                        {/*<div className="form-group col-md-4">
                            <label htmlFor="">Line 2 </label>
                            <input type="text" className="form-control"  id="secondLine2" value={self.state.secondLine2} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 3</label>
                            <input type="text" className="form-control"  id="thirdLine2" value={self.state.thirdLine2} onChange={self.append}/>
                        </div>*/}
                    </div>
                    <Panel message="Address 3" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control"  id="currentAddress3" value={self.state.currentAddress3} onChange={self.append} />
                        </div>
                        {/*<div className="form-group col-md-4">
                            <label htmlFor="">Line 2 </label>
                            <input type="text" className="form-control"  id="secondLine3" value={self.state.secondLine3} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 3</label>
                            <input type="text" className="form-control"  id="thirdLine3" value={self.state.thirdLine3} onChange={self.append}/>
                        </div>*/}
                    </div>
                    {/*<Panel message="Address 4" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 1</label>
                            <input type="text" className="form-control"  id="firstLine4" value={self.state.firstLine4} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 2 </label>
                            <input type="text" className="form-control"  id="secondLine4" value={self.state.secondLine4} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 3</label>
                            <input type="text" className="form-control"  id="thirdLine4" value={self.state.thirdLine4} onChange={self.append}/>
                        </div>
                    </div>
                    <Panel message="Address 5" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 1</label>
                            <input type="text" className="form-control"  id="firstLine5" value={self.state.firstLine5} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 2 </label>
                            <input type="text" className="form-control"  id="secondLine5" value={self.state.secondLine5} onChange={self.append}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 3</label>
                            <input type="text" className="form-control"  id="thirdLine5" value={self.state.thirdLine5} onChange={self.append}/>
                        </div>
                    </div>*/}
                    <div className='row'>
                        <div className="form-group col-md-8">
                            {/* <button type="button" className="btn btn-default">Save</button>*/}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='pull-right'>
                        <input type="submit" className='btn btn-primary m-l-5' value='Submit'/>
                        {/*<button type="button" className='btn btn-default m-l-5'>Save All</button>
                        <button type="button" onClick={this.saveToDB} className='btn btn-primary m-l-5'>Submit</button>
                        <button type='reset' className='btn btn-default m-l-5'>Reset</button>
                        <button type="button" className='btn btn-default m-l-5'>Cancel</button>*/}
                    </div>
                </div>
            </form>
        ];
    }
}
