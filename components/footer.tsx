"use client"
import React from "react";
import ColoresLogo from "@/public/colores_logo.svg";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://colorescoffee.co/" className="flex items-center">
              <ColoresLogo
                className="fill-current text-white w-28 whitespace-nowrap"
              />
              {/* <span
                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white
                  font-custom
                  "
              >
                COLORES
              </span> */}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://colorescofee.co/"
                    className="hover:underline"
                  >
                    Colores
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/colorescoffee"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://colorescoffee.co/" className="hover:underline">
              Colores Coffee Roasters™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                viewBox="9 9 30 30"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z"
                  id="Fill-1"
                />
              </svg>
              <span className="sr-only">TikTok Page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://instagram.com/colorescoffee"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                viewBox="9 9 30 30"
                version="1.1"
                xmlns="http://www.w3.org/1999/xlink"
                fill="currentColor"
              >
                <path
                  d="M25.6440564,8.00125481 C28.524689,8.00651102 29.1340343,8.02966857 30.5968,8.09632 C32.29984,8.17376 33.46272,8.44448 34.48064,8.84 C35.5328,9.24896 36.42496,9.79584 37.31456,10.68544 C38.20416,11.57504 38.75136,12.4672 39.16,13.51936 C39.55552,14.53728 39.82592,15.70016 39.90368,17.4032 C39.9747749,18.9634834 39.9963833,19.5527641 39.9995653,22.9632797 L39.9995653,25.0367203 C39.9963833,28.4472359 39.9747749,29.0365166 39.90368,30.5968 C39.82592,32.29984 39.55552,33.46272 39.16,34.48064 C38.75136,35.5328 38.20416,36.42496 37.31456,37.31456 C36.42496,38.20416 35.5328,38.75104 34.48064,39.16 C33.46272,39.55552 32.29984,39.82624 30.5968,39.90368 C29.0365166,39.9747749 28.4472359,39.9963833 25.0367203,39.9995653 L22.9632797,39.9995653 C19.5527641,39.9963833 18.9634834,39.9747749 17.4032,39.90368 C15.70016,39.82624 14.53728,39.55552 13.51936,39.16 C12.4672,38.75104 11.57504,38.20416 10.68544,37.31456 C9.79584,36.42496 9.24864,35.5328 8.84,34.48064 C8.44448,33.46272 8.17408,32.29984 8.09632,30.5968 C8.02966857,29.1340343 8.00651102,28.524689 8.00125481,25.6440564 L8.00125481,22.3559436 C8.00651102,19.475311 8.02966857,18.8659657 8.09632,17.4032 C8.17408,15.70016 8.44448,14.53728 8.84,13.51936 C9.24864,12.4672 9.79584,11.57504 10.68544,10.68544 C11.57504,9.79584 12.4672,9.24896 13.51936,8.84 C14.53728,8.44448 15.70016,8.17376 17.4032,8.09632 C18.8659657,8.02966857 19.475311,8.00651102 22.3559436,8.00125481 Z M25.0186977,10.8832675 L22.9813023,10.8832675 C19.6322732,10.8861221 19.0771566,10.9057829 17.53472,10.976 C15.97472,11.04736 15.12736,11.30784 14.56384,11.52704 C13.81696,11.81728 13.28384,12.16416 12.72416,12.72384 C12.16416,13.28384 11.81728,13.81696 11.52704,14.56352 C11.30816,15.12736 11.04704,15.97472 10.97632,17.53472 C10.9058103,19.0771566 10.8861244,19.6322732 10.8832677,22.9813023 L10.8832677,25.0186977 C10.8861244,28.3677268 10.9058103,28.9228434 10.97632,30.46528 C11.04704,32.02528 11.30816,32.87264 11.52704,33.43648 C11.81728,34.18304 12.16416,34.71616 12.72416,35.27616 C13.28384,35.83584 13.81696,36.18272 14.56384,36.47296 C15.12736,36.69216 15.97472,36.95264 17.53472,37.024 C19.076864,37.0942171 19.6319556,37.1138779 22.9812271,37.1167325 L25.0187729,37.1167325 C28.3680444,37.1138779 28.923136,37.0942171 30.46528,37.024 C32.02528,36.95264 32.87264,36.69216 33.43616,36.47296 C34.18304,36.18272 34.71616,35.83584 35.27584,35.27616 C35.83584,34.71616 36.18272,34.18304 36.47296,33.43648 C36.69184,32.87264 36.95296,32.02528 37.02368,30.46528 C37.0941897,28.9228434 37.1138756,28.3677268 37.1167323,25.0186977 L37.1167323,22.9813023 C37.1138756,19.6322732 37.0941897,19.0771566 37.02368,17.53472 C36.95296,15.97472 36.69184,15.12736 36.47296,14.56352 C36.18272,13.81696 35.83584,13.28384 35.27584,12.72384 C34.71616,12.16416 34.18304,11.81728 33.43616,11.52704 C32.87264,11.30784 32.02528,11.04736 30.46528,10.976 C28.9228434,10.9057829 28.3677268,10.8861221 25.0186977,10.8832675 Z M24,15.78384 C28.53792,15.78384 32.21632,19.46224 32.21632,23.99984 C32.21632,28.53776 28.53792,32.21616 24,32.21616 C19.46208,32.21616 15.78368,28.53776 15.78368,23.99984 C15.78368,19.46224 19.46208,15.78384 24,15.78384 Z M24,18.66672 C21.0544,18.66672 18.66656,21.05456 18.66656,23.99984 C18.66656,26.94544 21.0544,29.33328 24,29.33328 C26.9456,29.33328 29.33344,26.94544 29.33344,23.99984 C29.33344,21.05456 26.9456,18.66672 24,18.66672 Z M32.540928,13.539232 C33.601088,13.539232 34.460928,14.398752 34.460928,15.459232 C34.460928,16.519392 33.601088,17.379232 32.540928,17.379232 C31.480448,17.379232 30.620928,16.519392 30.620928,15.459232 C30.620928,14.398752 31.480448,13.539232 32.540928,13.539232 Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram Page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
