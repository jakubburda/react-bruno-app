import Error from "./Error";
import DataLoading from "./DataLoading";
import RecordsContainer from "./RecordsContainer";

const SharedLayout = ({ data, error }) => {
  const renderContent = () => {
    if (error) return <Error error={error} />;
    if (!data) return <DataLoading />;
    return <RecordsContainer data={data} />;
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-[#F0F0F0]">
      {renderContent()}
    </div>
  );
};

export default SharedLayout;
