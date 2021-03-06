import React from 'react';
import Modal from '../../components/modal/Modal';

/* eslint-disable require-jsdoc, class-methods-use-this */
export default class DashboardLayout extends React.Component {
  render() {
    return (
      <Modal
        modalId="searchModal"
        title='Search'
        size="modal-lg"
        btnClass = "btn-success"
        btnLabel= 'Ok'
        closeLabel = 'Close'>


        <div
          className="form-group">
          <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
          <div
            className="input-group mb-2 mr-sm-2 mb-sm-0">
            <div
              className="input-group-addon">
              <i className="fa fa-search"></i>
            </div>
            <input
              type="text"
              className="form-control d-block"
              placeholder="Search text"/>
          </div>
          <small
            className="form-text">
            You can search a book by author or category.
            You can also search for other users, etc
          </small>
        </div>
      </Modal>
    );
  }
}
