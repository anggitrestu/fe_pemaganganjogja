import Sidebar from 'components/dashboard/Sidebar';
import CreateLowongan from 'components/dashboard/lowongan/Create';

const Create = () => {
  return (
    <div>
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
        {/* sidebar */}
        <Sidebar></Sidebar>
        {/* sidebar */}
        {/* content */}
        <CreateLowongan></CreateLowongan>

        {/* content */}
      </div>
    </div>
  );
};

export default Create;
