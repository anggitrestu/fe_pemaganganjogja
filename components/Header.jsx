import { PaperClipIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <div>
      <div classname="bg-white shadow overflow-hidden sm:rounded-lg">
        <div classname="px-4 py-5 sm:px-6">
          <h3 classname="text-lg leading-6 font-medium text-gray-900">
            Applicant Information
          </h3>
          <p classname="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div classname="border-t border-gray-200">
          <dl>
            <div classname="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt classname="text-sm font-medium text-gray-500">Full name</dt>
              <dd classname="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Margot Foster
              </dd>
            </div>
            <div classname="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt classname="text-sm font-medium text-gray-500">
                Application for
              </dt>
              <dd classname="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Backend Developer
              </dd>
            </div>
            <div classname="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt classname="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd classname="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                margotfoster@example.com
              </dd>
            </div>
            <div classname="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt classname="text-sm font-medium text-gray-500">
                Salary expectation
              </dt>
              <dd classname="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                $120,000
              </dd>
            </div>
            <div classname="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt classname="text-sm font-medium text-gray-500">About</dt>
              <dd classname="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div classname="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt classname="text-sm font-medium text-gray-500">Attachments</dt>
              <dd classname="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul
                  role="list"
                  classname="border border-gray-200 rounded-md divide-y divide-gray-200"
                >
                  <li classname="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div classname="w-0 flex-1 flex items-center">
                      <paperclipicon
                        classname="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      >
                        <span classname="ml-2 flex-1 w-0 truncate">
                          resume_back_end_developer.pdf
                        </span>
                      </paperclipicon>
                    </div>
                    <div classname="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        classname="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li classname="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div classname="w-0 flex-1 flex items-center">
                      <paperclipicon
                        classname="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      >
                        <span classname="ml-2 flex-1 w-0 truncate">
                          coverletter_back_end_developer.pdf
                        </span>
                      </paperclipicon>
                    </div>
                    <div classname="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        classname="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
