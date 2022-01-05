import React from "react";

const FeedbackForm = () => {
  return (
    <section className="pt-4 px-3">
      <h4 className="p-0"> Thank you so much for taking time</h4>
      <small>Please provide the below details</small>
      <form action="" className="d-flex flex-column form-details pt-3">
        <label for="fname"> First name</label>
        <input type="text" id="fname" placeholder="first name" />
        <label for="lname"> Last name</label>
        <input type="text" id="lname" placeholder="last name" />

        <label for="address"> Address</label>
        <textarea name="" id="address" cols="25" rows="3"></textarea>

        <label for="email"> Email ID</label>
        <input type="email " id="email" placeholder="" />

        <button className="submit-btn"> Submit Feedback</button>
      </form>
    </section>
  );
};

export default FeedbackForm;
