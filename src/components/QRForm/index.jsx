import React, { useEffect, useRef } from "react";
import { db } from "../../DB/db";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";

const QRForm = ({ edit }) => {
  const initialValues = {
    link: "",
    title: "",
    titleColor: "#ffffff",
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
  };

  const validationSchema = Yup.object().shape({
    link: Yup.string().required("Link is required"),
    title: Yup.string().required("Title is required"),
    titleColor: Yup.string().required("Title color is required"),
    primaryColor: Yup.string().required("Primary color is required"),
    secondaryColor: Yup.string().required("Secondary color is required"),
  });

  const id = parseInt(useParams()?.id);
  const formikRef = useRef();

  useEffect(() => {
    edit &&
      db.qr.get(id).then((data) => {
        formikRef.current.setFieldValue("link", data.link);
        formikRef.current.setFieldValue("title", data.title);
        formikRef.current.setFieldValue("titleColor", data.titleColor);
        formikRef.current.setFieldValue("primaryColor", data.primaryColor);
        formikRef.current.setFieldValue("secondaryColor", data.secondaryColor);
      });
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (
    { link, title, titleColor, primaryColor, secondaryColor },
    { setSubmitting }
  ) => {
    if (!edit) {
      await db.qr.add({
        link,
        title,
        titleColor,
        primaryColor,
        secondaryColor,
      });
      setSubmitting(false);
      navigate("/");
    } else {
      await db.qr.put({
        id,
        link,
        title,
        titleColor,
        primaryColor,
        secondaryColor,
      });
      setSubmitting(false);
      navigate("/");
    }
  };

  return (
    <div className="qr_form">
      <h2>{edit ? "Edit your QR" : "Create new QR"} </h2>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <div className="qr_form_link">
              <label htmlFor="Link">Link</label>
              <Field id="Link" type="text" className="input" name="link" />
              <small>Example: https://grajalesu.github.io/portfolio/</small>
              {touched.link && errors.link && <ErrorMessage name="link" />}
            </div>
            <div className="qr_form_title">
              <div className="qr_form_title_text">
                <label htmlFor="Title">Title</label>
                <Field type="text" id="Title" className="input" name="title" />
                <small>Example: Portfolio</small>
                {touched.title && errors.title && <ErrorMessage name="title" />}
              </div>
              <div className="qr_form_title_color">
                <label htmlFor="Title Color">Color</label>
                <Field
                  id="Title Color"
                  type="color"
                  className="input"
                  name="titleColor"
                />
                {touched.titleColor && errors.titleColor && (
                  <ErrorMessage name="titleColor" />
                )}
              </div>
            </div>
            <div className="qr_form_colors">
              <div className="qr_form_colors_section">
                <label htmlFor="Primary Color">Primary Color</label>
                <Field
                  id="Primary Color"
                  type="color"
                  className="input"
                  name="primaryColor"
                />
                {touched.primaryColor && errors.primaryColor && (
                  <ErrorMessage name="primaryColor" />
                )}
              </div>
              <div className="qr_form_colors_section">
                <label htmlFor="Secondary Color">Secondary Color</label>
                <Field
                  id="Secondary Color"
                  type="color"
                  className="input"
                  name="secondaryColor"
                />
                {touched.secondaryColor && errors.secondaryColor && (
                  <ErrorMessage name="secondaryColor" />
                )}
              </div>
            </div>
            <button type="submit">{edit ? "EDIT" : "CREATE"}</button>
            {isSubmitting && <p>Loading...</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QRForm;
