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
      <div className="home-form">
        <div className="Home-div">
          <span className="space">&nbsp;&nbsp;&nbsp;</span>
          <Field label={"First Name"} />
          <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Field label={"Last Name"} />
        </div>
        <div className="Home-div">
          <span className="space">&nbsp;&nbsp;&nbsp;</span>
          <Field label={"Phone"} />
          <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Field label={"Email"} />
        </div>
        <div className="Home-div">
          <span className="space">&nbsp;&nbsp;&nbsp;</span>
          <Field label={"City"} />
          <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Field label={"State"} />
        </div>
        <div className="Home-div">
          <span className="space">&nbsp;&nbsp;&nbsp;</span>
          <Field label={"Address"} />
          <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Field label={"ZipCode"} />
        </div>
      </div>
      <CustomButton text="Submit" />
    </Layout>
  );
};

export default Homepage;
