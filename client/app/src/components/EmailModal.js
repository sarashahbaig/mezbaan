import React, { Component } from "react";

class EmailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      message: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleCancel = () => {
    this.props.hideModal();
  };

  handleSendEmail = () => {
    // make an api call in axios to send an email
    this.props.hideModal();
  };

  render() {
    const { subject, message } = this.state;
    const { modalUser, showModal } = this.props;
    const { firstName, lastName, email } = modalUser;
    const showClass = showModal ? "show d-block" : "";
    return (
      <div className={`modal fade ${showClass}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Send Email to {modalUser.firstName}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.handleCancel}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={subject}
                  placeholder="Enter a subject"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Required example textarea"
                  required
                  rows={4}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
              <a
                href={`mailto:${email}?subject=${subject}&body=${message}`}
                className="btn btn-primary"
                onClick={this.handleSendEmail}
              >
                Send
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailModal;
