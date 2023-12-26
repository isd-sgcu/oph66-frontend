export default function EventBox() {
  const EnrollBox = () => {
    return (
      <div className="flex flex-row gap-2 text-white">
        <div className="rounded-full bg-pink-500 px-2 py-1 ">
          <p className="text-xs">ต้องลงทะเบียน/ Limited seats</p>
        </div>
        <div className="rounded-full border-2 border-white px-2 py-1">
          <p className="text-xs">999/999</p>
        </div>
      </div>
    );
  };
  return (
    <div className="box-border w-72 rounded-lg border-2 border-white bg-gradient-to-br from-gray-100 to-pink-400 shadow-md ring-offset-2 ring-offset-white">
      <a href="\">
        <div className="border-1 rounded-md border-black bg-gradient-to-r from-[#393570]  to-[#CA4072] px-4 py-2">
          <p className="font-ibm text-xl font-semibold uppercase text-white">
            Session talk with ajarn
          </p>
          <EnrollBox />
        </div>
        <div className="flex flex-col px-4 py-2 text-start text-white">
          <p>คณะสถาปัตยกรรมศาสตร์</p>
          <p className="text-sm">Faculty of Architecture</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 5H18V3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3V5H8V3C8 2.44772 7.55228 2 7 2C6.44772 2 6 2.44772 6 3V5H5C3.34315 5 2 6.34315 2 8V9H22V8C22 6.34315 20.6569 5 19 5Z"
                  fill="#FDFFFC"
                />
                <path
                  d="M2 19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V11H2V19Z"
                  fill="#FDFFFC"
                />
              </svg>
              20-21 January 2024
            </div>
            <div className="flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13ZM14 16.0058C14.2666 16.0058 14.5222 15.8993 14.71 15.71C14.8993 15.5222 15.0058 15.2666 15.0058 15C15.0058 14.7334 14.8993 14.4778 14.71 14.29L13 12.59V9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V13C10.9985 13.2658 11.1028 13.5213 11.29 13.71L13.29 15.71C13.4778 15.8993 13.7334 16.0058 14 16.0058Z"
                  fill="#FDFFFC"
                />
                <path
                  d="M18.9992 5.99997C18.8026 6.00221 18.6102 5.94276 18.4492 5.82997L15.4492 3.82997C15.1148 3.65059 14.9107 3.29738 14.9223 2.91808C14.934 2.53878 15.1593 2.19875 15.5041 2.0402C15.8488 1.88166 16.2537 1.93192 16.5492 2.16997L19.5492 4.16997C19.9132 4.41457 20.0754 4.86781 19.9491 5.28782C19.8229 5.70783 19.4377 5.99658 18.9992 5.99997Z"
                  fill="#FDFFFC"
                />
                <path
                  d="M5.00017 5.99997C4.56161 5.99658 4.17644 5.70783 4.05021 5.28782C3.92397 4.86781 4.08614 4.41457 4.45017 4.16997L7.45017 2.16997C7.7457 1.93192 8.1505 1.88166 8.49528 2.0402C8.84005 2.19875 9.06537 2.53878 9.077 2.91808C9.08864 3.29738 8.88458 3.65059 8.55017 3.82997L5.55017 5.82997C5.38913 5.94276 5.19677 6.00221 5.00017 5.99997Z"
                  fill="#FDFFFC"
                />
              </svg>
              10.00-17.00
            </div>
            <div className="flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="9" r="1" fill="#FDFFFC" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9997 2C15.8657 2 18.9997 5.13401 18.9997 9C19.1397 12.13 16.6297 16.3 12.8097 21.58C12.6216 21.8398 12.3204 21.9936 11.9997 21.9936C11.679 21.9936 11.3778 21.8398 11.1897 21.58C7.36971 16.29 4.85971 12.12 4.99971 9C4.99971 5.13401 8.13372 2 11.9997 2ZM8.99971 9C8.99971 10.6569 10.3429 12 11.9997 12C12.7954 12 13.5584 11.6839 14.121 11.1213C14.6836 10.5587 14.9997 9.79565 14.9997 9C14.9997 7.34315 13.6566 6 11.9997 6C10.3429 6 8.99971 7.34315 8.99971 9Z"
                  fill="#FDFFFC"
                />
              </svg>
              คณะสถาปัตยกรรมศาสตร์ / Faculty of Architecture
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
