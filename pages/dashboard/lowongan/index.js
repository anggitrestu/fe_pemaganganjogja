import Sidebar from 'components/dashboard/Sidebar';
import Lowongan from 'components/dashboard/Lowongan';

const Index = () => {
  return (
    <div>
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
        {/* sidebar */}
        <Sidebar></Sidebar>
        {/* sidebar */}
        {/* content */}
        <Lowongan></Lowongan>
        {/* content */}
      </div>
    </div>
  );
};

export default Index;
