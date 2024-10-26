import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SectionRegisteration = () => {
  interface FormValues {
    name: string;
    email: string;
    address: string;
    phone: string;
    comment: string;
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone is required"),
    comment: Yup.string().required("Comment is required"),
  });
  const initialValues: FormValues = {
    name: "",
    email: "",
    address: "",
    phone: "",
    comment: "",
  };
  return (
    <div className="relative lg:h-[100vh] h-[180vh]">
      <img
        src="/section1/laptop.jpg"
        className="object-cover w-full lg:h-[80vh] h-auto absolute z-20"
        alt=""
      />
      <div className="bg-[rgba(0,0,100,0.5)] absolute z-30 w-full lg:h-[80vh] h-auto"></div>
      <div className="lg:px-24 px-0   flex w-full flex-col lg:flex-row  absolute z-30 items-center justify-center ">
        <div className="w-full  flex">
          <div className="flex flex-col  justify-center gap-4">
            <h2 className="px-4 py-1 w-28 rounded-2xl font-semibold bg-blue-200 text-blue-700   text-base ">
              Contact us
            </h2>

            <h1 className="text-4xl font-bold max-w-[40vw] text-white">
              Register Your Account Get free access to{" "}
              <span className="text-yellow-500"> 60000 </span>
              online course
            </h1>
          </div>
        </div>
        <div className="flex lg:w-[45vw] shadow-lg p-10 z-10  bg-white  my-12 rounded-lg">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setTimeout(() => {
                setSubmitting(false); // Simulate a server response
              }, 2000);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col  w-full ">
                <h1 className="text-3xl  font-semibold text-slate-900 pb-1">
                  Fill Your Registeration
                </h1>
                <div className="flex flex-col gap-5 w-full">
                  <div>
                    <Field name="name" type="text" />

                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-1">
                    <Field
                      name="email"
                      type="email"
                      className="bg-gray-100 rounded-sm h-12 pl-4 w-full"
                      placeholder="Enter Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm pl-2"
                    />
                  </div>

                  <div>
                    <Field
                      name="address"
                      type="text"
                      className="bg-gray-100 rounded-sm h-12 pl-4 w-full"
                      placeholder="Enter Address"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-sm pl-2"
                    />
                  </div>

                  <div>
                    <Field
                      name="phone"
                      type="text"
                      className="bg-gray-100 rounded-sm h-12 pl-4 w-full"
                      placeholder="Enter Phone"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm pl-2"
                    />
                  </div>

                  <div>
                    <Field
                      name="comment"
                      as="textarea"
                      className="bg-gray-100 rounded-sm h-48 py-2 p-4 w-full"
                      placeholder="Enter Comment"
                    />
                    <ErrorMessage
                      name="comment"
                      component="div"
                      className="text-red-500 text-sm pl-2"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-base text-white font-semibold max-w-32 px-4 py-3 rounded"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SectionRegisteration;
