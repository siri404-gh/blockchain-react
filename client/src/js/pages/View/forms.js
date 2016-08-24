var React = require('react');
var Panel = require('../../components/Panel/Panel');
var PanelCollapse = require('../../components/PanelCollapse/PanelCollapse');
var Populator = require('../../components/Populator/Populator');
var moment = require('moment');
module.exports = {
    viewForm: function(self) {
        return [
            <form role="form" key='1'>
                <PanelCollapse target="profile" message="Profile Details"/>
                <div  id='profile' className='collapse'>
                    <Panel message="Customer Details" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">First Name 1</label>
                            <input type="text" className="form-control"  id="" value={self.state.firstName} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">First Name 2</label>
                            <input type="text" className="form-control"  id="" value={self.state.firstName2} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">First Name 3</label>
                            <input type="text" className="form-control"  id="" value={self.state.firstName3} disabled/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Last Name 1</label>
                            <input type="text" className="form-control"  id="" value={self.state.lastName} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Last Name 2</label>
                            <input type="text" className="form-control"  id="" value={self.state.lastName2} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Last Name 3</label>
                            <input type="text" className="form-control"  id="" value={self.state.lastName3} disabled/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-6">
                            <label htmlFor="">Middle Name</label>
                            <input type="text" className="form-control"  id="" value={self.state.middleName} disabled/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="">Alias Name</label>
                            <input type="text" className="form-control"  id="" value={self.state.aliasName} disabled/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Date Of Birth</label>
                            <input type="date" className="form-control"  id="" value={self.state.dob} disabled/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">SSN Number 1</label>
                            <input type="text" className="form-control"  id="" value={'XXX-XXX-'+self.state.ssn.slice(self.state.ssn.length-4)} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">SSN Number 2</label>
                            <input type="text" className="form-control"  id="" value={'XXX-XXX-'+self.state.ssn2.slice(self.state.ssn2.length-4)} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">SSN Number 3</label>
                            <input type="text" className="form-control"  id="" value={'XXX-XXX-'+self.state.ssn3.slice(self.state.ssn3.length-4)} disabled/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Passport 1</label>
                            <input type="text" className="form-control"  id="" value={'XXXXXX-'+self.state.passportNumber.slice(self.state.passportNumber.length-2)} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Passport 2</label>
                            <input type="text" className="form-control"  id="" value={'XXXXXX-'+self.state.passportNumber2.slice(self.state.passportNumber2.length-2)} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Passport 3</label>
                            <input type="text" className="form-control"  id="" value={'XXXXXX-'+self.state.passportNumber3.slice(self.state.passportNumber3.length-2)} disabled/>
                        </div>
                    </div>
                    <Panel message="Additional Details" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Employer Name 1</label>
                            <input type="text" className="form-control"  id="" value= {self.state.employerName1} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Employer Name 2 </label>
                            <input type="text" className="form-control"  id="" value={self.state.employerName2} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Employer Name 3</label>
                            <input type="text" className="form-control"  id="" value= {self.state.employerName3} disabled/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Product Name 1</label>
                            <input type="text" className="form-control"  id="" value={self.state.productName1} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Product Name 2 </label>
                            <input type="text" className="form-control"  id="" value={self.state.productName2} disabled/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Collection Successful</label>
                            {/*<input type="text" className="form-control"  id="" value={self.state.productName3} disabled/>*/}
                            <select className='form-control' value={self.state.productName3} disabled>
                                <option value='1'>Yes</option>
                                <option value='0'>No</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Overwrite Local Data</label><br/>
                            <button className={"btn "+self.state.overrideButtonClass} data-toggle="modal" data-target={self.state.overrideButtonId} type="button" >Overwrite</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-8">
                            <label htmlFor="">Remarks</label>
                            <textarea  className="form-control"  id="" value={self.state.remarks} disabled/>
                        </div>
                    </div>
                    {/*<div className='row'>
                        <div className="form-group col-md-8">
                            <label htmlFor="">Remarks</label>
                            <textarea  className="form-control"  id="" value={self.state.remarks2} disabled/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-8">
                            <label htmlFor="">Remarks</label>
                            <textarea  className="form-control"  id="" value={self.state.remarks3} disabled/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-8">
                            <label htmlFor="">Remarks</label>
                            <textarea  className="form-control"  id="" value={self.state.remarks4} disabled/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-8">
                            <label htmlFor="">Remarks</label>
                            <textarea  className="form-control"  id="" value={self.state.remarks5} disabled/>
                        </div>
                    </div>*/}
                </div>
                <PanelCollapse target="contact" message="Contact Details"/>
                <div  id='contact' className='collapse'>
                    <Panel message="Home Phone Details" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 1</label>
                            <input type="text" className="form-control"  id="" value={self.state.homePhone1} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 2</label>
                            <input type="text" className="form-control"  id="" value={self.state.homePhone2} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 3</label>
                            <input type="text" className="form-control"  id="" value={self.state.homePhone3} disabled/>
                        </div>
                    </div>
                    <Panel message="Handphone Details" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 1</label>
                            <input type="text" className="form-control"  id="" value={self.state.mobilePhone1} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 2 </label>
                            <input type="text" className="form-control"  id="" value={self.state.mobilePhone2} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 3</label>
                            <input type="text" className="form-control"  id="" value={self.state.mobilePhone3} disabled/>
                        </div>
                        {/*<div className="form-group col-md-4">
                            <label htmlFor="">Phone 4</label>
                            <input type="text" className="form-control"  id="" value={self.state.mobilePhone4} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 5</label>
                            <input type="text" className="form-control"  id="" value={self.state.mobilePhone5} disabled/>
                        </div>*/}
                    </div>
                    <Panel message="Work Phone Details" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 1</label>
                            <input type="text" className="form-control"  id="" value={self.state.workPhone1} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 2</label>
                            <input type="text" className="form-control"  id="" value={self.state.workPhone2} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Phone 3</label>
                            <input type="text" className="form-control"  id="" value={self.state.workPhone3} disabled/>
                        </div>
                    </div>
                </div>
                <PanelCollapse target="address" message="Address Details"/>
                <div id='address' className='collapse'>
                    <Panel message="Address 1" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control"  id="" value={self.state.currentAddress1} disabled/>
                        </div>
                        {/*<div className="form-group col-md-4">
                            <label htmlFor="">Line 2 </label>
                            <input type="text" className="form-control"  id="" value={self.state.secondLine1} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 3</label>
                            <input type="text" className="form-control"  id="" value={self.state.thirdLine1} disabled/>
                        </div>*/}
                    </div>
                    <Panel message="Address 2" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control"  id="" value={self.state.currentAddress2} disabled/>
                        </div>
                        {/*<div className="form-group col-md-4">
                            <label htmlFor="">Line 2 </label>
                            <input type="text" className="form-control"  id="" value={self.state.secondLine2} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 3</label>
                            <input type="text" className="form-control"  id="" value={self.state.thirdLine2} disabled/>
                        </div>*/}
                    </div>
                    <Panel message="Address 3" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control"  id="" value={self.state.currentAddress3} disabled/>
                        </div>
                        {/*<div className="form-group col-md-4">
                            <label htmlFor="">Line 2 </label>
                            <input type="text" className="form-control"  id="" value={self.state.firstLine3} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 3</label>
                            <input type="text" className="form-control"  id="" value={self.state.firstLine3} disabled/>
                        </div>*/}
                    </div>
                    {/*<Panel message="Address 4" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 1</label>
                            <input type="text" className="form-control"  id="" value={self.state.firstLine4} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 2 </label>
                            <input type="text" className="form-control"  id="" value={self.state.firstLine4} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 3</label>
                            <input type="text" className="form-control"  id="" value={self.state.firstLine4} disabled/>
                        </div>
                    </div>
                    <Panel message="Address 5" type="info"/>
                    <div className='row'>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 1</label>
                            <input type="text" className="form-control"  id="" value={self.state.firstLine5} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 2 </label>
                            <input type="text" className="form-control"  id="" value={self.state.firstLine5} disabled/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="">Line 3</label>
                            <input type="text" className="form-control"  id="" value={self.state.firstLine5} disabled/>
                        </div>
                    </div>*/}
                </div>
                <PanelCollapse target="audit" message="Audit Log"/>
                <div  id='audit' className='collapse'>
                    <div className='row'>
                        <div className="form-group col-md-6">
                            <label htmlFor="">Last updated By : </label> {self.state.bankID} (<img className='logo-small' src={'/images/'+self.state.bankID.toLowerCase().replace('_','')+'.png'}/>)
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="">Last Updated On : </label> {moment.unix(self.state.timestamp).format('DD-MMM-YY hh:mm:ss')}
                        </div>
                    </div>
                </div>
            </form>
        ];
    },
    searchForm: function(self) {
        return [
            <form role="form" onSubmit={self.formSubmit} key={Math.random()}>
                <PanelCollapse message="Search" target="search"/>
                <div  id='search' className='collapse in'>
                    <div className='row'>
                        <div className="form-group col-md-6">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search by Customer Id" ref="search"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button" onClick={self.formSubmit}><span className='glyphicon glyphicon-search'></span></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        ];
    }
};
