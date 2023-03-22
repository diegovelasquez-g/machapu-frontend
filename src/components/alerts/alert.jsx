import { IconExclamationCircle } from "@tabler/icons-react";

export const Alert = ({ message }) => {
  return (
    <div class="bg-red-200 border border-red-900 rounded-md text-red-800 text-sm p-2 flex justify-between border-l-4">
      <div>
        <div className="flex items-center">
          <IconExclamationCircle size={20} className="h-4 w-4 mr-2" />
          <p>
            <span className="font-bold">{message}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
