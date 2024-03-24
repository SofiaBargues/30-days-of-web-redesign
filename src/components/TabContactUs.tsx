// import { logo } from "../assets";

export const TabContactUs = () => (
  <>
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      className="tab"
      aria-label="Contact Us"
    />
    <div
      role="tabpanel"
      className="tab-content bg-base-100 border-base-300 rounded-box p-6"
    >
      <form
        action="/performing-arts-school/mitcham/#wpcf7-f5-p967-o2"
        method="post"
        className="wpcf7-form init"
        aria-label="Contact form"
        noValidate="novalidate"
        data-status="init"
      >
        <div style={{ display: "none" }}>
          <input type="hidden" name="_wpcf7" defaultValue={5} />
          <input type="hidden" name="_wpcf7_version" defaultValue="5.8.7" />
          <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
          <input
            type="hidden"
            name="_wpcf7_unit_tag"
            defaultValue="wpcf7-f5-p967-o2"
          />
          <input
            type="hidden"
            name="_wpcf7_container_post"
            defaultValue={967}
          />
          <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" />
        </div>
        <span
          className="wpcf7-form-control-wrap school_receiver"
          data-name="school_receiver"
        >
          <input
            type="hidden"
            name="school_receiver"
            className="wpcf7-form-control wpcf7-hidden wpcf7dtx wpcf7dtx-hidden"
            aria-invalid="false"
            defaultValue="mitcham@jigsaw-arts.co.uk"
            autoComplete="off"
          />
        </span>
        <div className="formContainerBox width70 blueBackground">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="firstname"
                  >
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="First name"
                      defaultValue=""
                      type="text"
                      name="firstname"
                    />
                  </span>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="lastname"
                  >
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Last name"
                      defaultValue=""
                      type="text"
                      name="lastname"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="phoneNum"
                  >
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Phone number"
                      defaultValue=""
                      type="text"
                      name="phoneNum"
                    />
                  </span>
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="emailAdd"
                  >
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Email address"
                      defaultValue=""
                      type="email"
                      name="emailAdd"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  <span className="wpcf7-form-control-wrap" data-name="message">
                    <textarea
                      cols={40}
                      rows={10}
                      className="wpcf7-form-control wpcf7-textarea"
                      aria-invalid="false"
                      placeholder="Message"
                      name="message"
                      defaultValue={""}
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p className="text-center">
            <input
              className="wpcf7-form-control wpcf7-submit has-spinner"
              type="submit"
              defaultValue="Send"
            />
            <span className="wpcf7-spinner" />
          </p>
        </div>
        <div className="wpcf7-response-output" aria-hidden="true" />
      </form>
    </div>
  </>
);
