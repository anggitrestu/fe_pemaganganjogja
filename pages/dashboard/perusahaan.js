import Company from 'components/dashboard/Company';
import Sidebar from 'components/dashboard/Sidebar';

const Index = () => {
  return (
    <div className="flex flex-row md:min-h-screen w-full">
      {/* sidebar */}
      <Sidebar></Sidebar>
      {/* sidebar */}
      {/* content */}
      <Company></Company>
      {/* content */}
    </div>
  );
};

export default Index;
