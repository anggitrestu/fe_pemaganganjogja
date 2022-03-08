import Sidebar from 'components/dashboard/Sidebar';
import Reports from 'components/dashboard/Report';

const Index = () => {
  return (
    <div className="flex flex-row md:min-h-screen w-full">
      {/* sidebar */}
      <Sidebar></Sidebar>
      {/* sidebar */}
      {/* content */}
      <Reports></Reports>
      {/* content */}
    </div>
  );
};

export default Index;
