import {useSelector} from "react-redux";

const HeroPanelWizard = () => {

    const user = useSelector((store) => store.user);

  return (
    <div>
      <h1 className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0">{user?.displayName}</h1>
    </div>
  );
};

export default HeroPanelWizard;
