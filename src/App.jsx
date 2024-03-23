import "./App.css";
import SimpleForm from "./Components/Form/SimpleForm";
import Grandpa from "./Components/Grandpa/Grandpa";
import HookForm from "./Components/HookForm/HookForm";
import Reusable from "./Components/Reusable/Reusable";
import UseRef from "./Components/UseRef/UseRef";

function App() {
  const handledSignUpSubmit = (data) => {
    console.log("sign up data", data);
    //  e.preventDefault();
  };

  const handleUpdateProfile = (data) => {
    console.log("update profile", data);
    //  e.preventDefault();
  };

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <UseRef></UseRef> */}
      {/* <HookForm></HookForm> */}
      {/* <Reusable formTitle={"Sign Up"} handleSubmit={handledSignUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>Please sign up right now</p>
        </div>
      </Reusable>
      <Reusable
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText="Update"
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your Profile</p>
        </div>
      </Reusable> */}
      <Grandpa></Grandpa>
    </>
  );
}

export default App;
