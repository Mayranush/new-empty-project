/**
 * Created by Shushi on 11/14/2017.
 */
import React from "react";
import {connect} from "react-redux";
import {projectDataActions} from "../../actions/index";
import "./myDetails.scss";

const MyDetails = (...props) => {

    console.log(props,"props in my details")
    return (
      <div className="my-details">

        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label htmlFor="first_name" className="col-lg-3 control-label">First name</label>
            <div className="col-lg-3 form-group-values">
              <input id="first_name" className="form-control" type="text" placeholder={props[0].firstName}/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="last_name" className="col-lg-3 control-label">Last name</label>
            <div className="col-lg-3 form-group-values">
              <input id="last_name" className="form-control" type="text" defaultValue="Bishop"/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="user_email" className="col-lg-3 control-label">Email</label>
            <div className="col-lg-3 form-group-values">
              <input id="user_email" className="form-control" type="text" defaultValue="nickBishop@gmail.com"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="position" className="col-lg-3 control-label">Phone number</label>
            <div className="col-lg-3 form-group-values">
              <input id="position" className="form-control" type="text" defaultValue="1684313554541"/>
            </div>
          </div>
        </form>
        <br/>
        <br/>
        <br/>

        <div><a className="password-recovery" href="">Reset password</a>
        </div>

      </div>)
}

export {MyDetails}