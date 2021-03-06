import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../modal/Modal';
import InputField from '../../../form/InputField';

/* eslint-disable require-jsdoc, class-methods-use-this */

class AddStock extends React.Component {
  render() {
    const { quantity, recordDate, onChange, isLoading, onSubmit } = this.props;
    return (
      <Modal
        modalId="stock"
        title={ 'Add a stock' }
        size="modal-sm"
        btnClass = "btn-success"
        btnLabel= { 'Add' }
        btnDisabled={isLoading}
        btnOnClick={onSubmit}
      >
        <form>
          <InputField
            type="number"
            name='quantity'
            placeholder="Number of copies"
            icon="hashtag"
            value={quantity}
            onChange={onChange}
          />

          <InputField
            type="date"
            name='recordDate'
            placeholder="Record date"
            icon="calendar"
            value={recordDate}
            onChange={onChange}
          >
            <small
              className="form-text">
            Record date is different from the date you add the record.
            </small>
          </InputField>
        </form>
      </Modal>
    );
  }
}

AddStock.propTypes = {
  quantity: PropTypes.string.isRequired,
  recordDate: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddStock;
