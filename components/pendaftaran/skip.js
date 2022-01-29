import ApiKuisioners from 'pages/api/ApiKuisioners';
import { useEffect, useState } from 'react';

const FormEmpat = () => {
  const [kuisioner, setKuisioner] = useState(null);
  const fetchKuisioners = async () => {
    const res = await ApiKuisioners.all();
    setKuisioner(res);
  };

  useEffect(() => {
    fetchKuisioners();
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-black font-semibold text-2xl">Kuisioner</h1>
      {kuisioner?.length > 0 ? (
        <div>
          {kuisioner.map((item, index) => {
            console.log(item.answers);
            return (
              <div key={index} className="">
                <div className="flex">
                  <p>
                    <span className="text-center text-bermuda bg-bermuda bg-opacity-10  rounded-full inline-block w-[25px] h-[25px]">
                      {index + 1}
                    </span>
                  </p>
                  <p className="text-black text-base font-normal ml-3 inline-block">
                    {item.question}
                  </p>
                </div>
                {item.type === 'radio-button' && (
                  <div className="">
                    {item?.answers ? (
                      <div className="form-control">
                        {item.answers.a}
                        {/* {item.answers} */}
                        {/* {item.map((answer, index) => {
                          return (
                            <label className="cursor-pointer label" key={index}>
                              <span className="label-text">Secondary</span>
                              <input
                                type="radio"
                                name="opt"
                                defaultChecked="checked"
                                className="radio radio-secondary"
                                defaultValue
                              />
                            </label>
                          );
                        })} */}
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div>kuisioner tidak tersedia</div>
      )}
    </div>
  );
};

export default FormEmpat;
