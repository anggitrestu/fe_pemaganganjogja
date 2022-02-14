import Company from 'components/dashboard/Company';
import Sidebar from 'components/dashboard/Sidebar';
import withPrivateRoute from 'components/withPrivateRoute';

import { useForm } from 'react-hook-form';

const Index = () => {
  return (
    <div>
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
        {/* sidebar */}
        <Sidebar></Sidebar>
        {/* sidebar */}
        {/* content */}
        <Company></Company>
        {/* content */}
      </div>
    </div>
  );
};

export default Index;
