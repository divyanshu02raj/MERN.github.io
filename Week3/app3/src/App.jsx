import { TextUpdater, InputForm, UserCard, CustomButton, LoginForm } from "./Components";

function App() {
  return (
    <div className="p-4 space-y-4">
      <TextUpdater />
      <InputForm />
      <UserCard name="John Doe" email="john@example.com" />
      <CustomButton />
      <LoginForm />
    </div>
  );
}

export default App;
