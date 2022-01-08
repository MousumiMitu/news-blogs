import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const FeedbackForm = ({ closeFeedbackForm }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="pt-4 px-3 form-page">
      <div onClick={closeFeedbackForm} className="cls-btn3">
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </div>
      <h5 className="p-0"> Thank you so much for taking time</h5>
      <small>Please provide the below details</small>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column form-details pt-3"
      >
        <label for="fname"> First name</label>
        <input
          type="text"
          id="fname"
          placeholder="John"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <span className="text-danger">This field is required</span>
        )}
        <label for="lname"> Last name</label>
        <input
          type="text"
          id="lname"
          placeholder="doe"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className="text-danger">This field is required</span>
        )}
        <label for="address"> Address</label>
        <textarea
          id="address"
          cols="25"
          rows="2"
          {...register("address", { required: true })}
        ></textarea>
        {errors.address && (
          <span className="text-danger">This field is required</span>
        )}

        <label htmlFor="country">Country</label>
        <input
          placeholder="India"
          type="text"
          className="form-control"
          id="country"
          {...register("country", { required: true })}
        />
        {errors.country && <span style={{ color: "red" }}>Required field</span>}
        <label for="email"> Email ID</label>
        <input
          type="email "
          id="email"
          placeholder="example@gmail.com"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-danger">This field is required</span>
        )}
        <label htmlFor="phone">Phone Number</label>
        <input
          placeholder="1234567"
          type="text"
          className="form-control"
          id="phone"
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <span className="text-danger">This field is required</span>
        )}
        <button className="submit-btn" type="submit">
          {" "}
          Submit Feedback
        </button>
      </form>
    </section>
  );
};

export default FeedbackForm;
