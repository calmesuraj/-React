import CustomButton from "../Components/Buttons/button";
import Layout from "../Components/Layout/Layout";
import PageTitle from "../Components/PageTitle/PageTitle";
import getMessage from "../Components/Message/message";
import "./HomePage.css";
import Field from "../Components/FormDiv/Field";
const Homepage = () => {
  const handleHomeSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Layout onSubmit={handleHomeSubmit}>
      <PageTitle title={getMessage("Authenticated")} />
      <div className="Home-div">
        &nbsp;&nbsp;&nbsp;
        <Field label={"First Name"} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Field label={"Last Name"} />
      </div>
      <div className="Home-div">
        &nbsp;&nbsp;&nbsp;
        <Field label={"Phone"} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Field label={"Email"} />
      </div>
      <div className="Home-div">
        &nbsp;&nbsp;&nbsp;
        <Field label={"City"} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Field label={"State"} />
      </div>
      <div className="Home-div">
        &nbsp;&nbsp;&nbsp;
        <Field label={"Address"} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Field label={"ZipCode"} />
      </div>
      <CustomButton text="Submit" />
    </Layout>
  );
};

export default Homepage;
